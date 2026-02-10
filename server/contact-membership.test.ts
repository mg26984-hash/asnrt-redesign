import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  createContactSubmission: vi.fn().mockResolvedValue({ success: true, id: 1 }),
  createMembershipApplication: vi.fn().mockResolvedValue({ success: true, id: 1 }),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts valid contact form data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Dr. Ahmed",
      email: "ahmed@example.com",
      subject: "Membership Inquiry",
      message: "I would like to learn more about ASNRT membership.",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });

  it("rejects empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "ahmed@example.com",
        subject: "Test",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Dr. Ahmed",
        email: "not-an-email",
        subject: "Test",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects empty subject", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Dr. Ahmed",
        email: "ahmed@example.com",
        subject: "",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects empty message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Dr. Ahmed",
        email: "ahmed@example.com",
        subject: "Test",
        message: "",
      })
    ).rejects.toThrow();
  });
});

describe("membership.submitApplication", () => {
  it("accepts valid membership application", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.membership.submitApplication({
      fullName: "Prof. Mohamed Ghnaimat",
      email: "ghnaimat@example.com",
      country: "Jordan",
      institution: "Jordan University Hospital",
      specialty: "Nephrology",
      qualifications: "MD, FRCP",
      motivation: "I want to contribute to nephrology research in the Arab world.",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });

  it("accepts application without optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.membership.submitApplication({
      fullName: "Dr. Fatima",
      email: "fatima@example.com",
      country: "Kuwait",
      institution: "Kuwait Hospital",
      specialty: "Internal Medicine",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });

  it("rejects empty full name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.membership.submitApplication({
        fullName: "",
        email: "test@example.com",
        country: "Egypt",
        institution: "Cairo University",
        specialty: "Nephrology",
      })
    ).rejects.toThrow();
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.membership.submitApplication({
        fullName: "Dr. Test",
        email: "invalid-email",
        country: "Egypt",
        institution: "Cairo University",
        specialty: "Nephrology",
      })
    ).rejects.toThrow();
  });

  it("rejects empty country", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.membership.submitApplication({
        fullName: "Dr. Test",
        email: "test@example.com",
        country: "",
        institution: "Cairo University",
        specialty: "Nephrology",
      })
    ).rejects.toThrow();
  });

  it("rejects empty institution", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.membership.submitApplication({
        fullName: "Dr. Test",
        email: "test@example.com",
        country: "Egypt",
        institution: "",
        specialty: "Nephrology",
      })
    ).rejects.toThrow();
  });

  it("rejects empty specialty", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.membership.submitApplication({
        fullName: "Dr. Test",
        email: "test@example.com",
        country: "Egypt",
        institution: "Cairo University",
        specialty: "",
      })
    ).rejects.toThrow();
  });
});
