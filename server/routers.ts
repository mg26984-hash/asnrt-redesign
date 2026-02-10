import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission, createMembershipApplication } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          subject: z.string().min(1, "Subject is required"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createContactSubmission(input);
        // Notify the site owner
        await notifyOwner({
          title: `New Contact: ${input.subject}`,
          content: `From: ${input.name} (${input.email})\n\n${input.message}`,
        });
        return result;
      }),
  }),

  membership: router({
    submitApplication: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required"),
          email: z.string().email("Invalid email"),
          country: z.string().min(1, "Country is required"),
          institution: z.string().min(1, "Institution is required"),
          specialty: z.string().min(1, "Specialty is required"),
          qualifications: z.string().optional(),
          motivation: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createMembershipApplication(input);
        await notifyOwner({
          title: `New Membership Application: ${input.fullName}`,
          content: `Name: ${input.fullName}\nEmail: ${input.email}\nCountry: ${input.country}\nInstitution: ${input.institution}\nSpecialty: ${input.specialty}`,
        });
        return result;
      }),
  }),
});

export type AppRouter = typeof appRouter;
