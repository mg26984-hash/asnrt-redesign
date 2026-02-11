/**
 * SEO metadata for all routes.
 * Each entry provides a unique title, description, and Open Graph tags.
 */

export interface SEOData {
  title: string;
  description: string;
  path: string;
}

export const SEO: Record<string, SEOData> = {
  home: {
    title: "Home",
    description:
      "The Arab Society of Nephrology and Renal Transplantation (ASNRT) — advancing kidney health through education, research, and collaboration across 22 Arab countries since 1996. Access 74+ clinical nephrology calculators and educational resources.",
    path: "/",
  },
  about: {
    title: "About ASNRT",
    description:
      "Learn about the Arab Society of Nephrology and Renal Transplantation — our mission, history, constitution, and executive committee leading nephrology advancement across the Arab world.",
    path: "/about",
  },
  aboutConstitution: {
    title: "ASNRT Constitution",
    description:
      "Read the official constitution of the Arab Society of Nephrology and Renal Transplantation, outlining the society's governance, membership rules, and organizational structure.",
    path: "/about/constitution",
  },
  aboutCommittee: {
    title: "Executive Committee",
    description:
      "Meet the distinguished leaders of ASNRT's Executive Committee — nephrologists and researchers guiding the society's mission across the Arab world.",
    path: "/about/committee",
  },
  members: {
    title: "Members",
    description:
      "Explore the ASNRT membership directory featuring nephrologists, researchers, and healthcare professionals from 22 Arab countries dedicated to advancing kidney health.",
    path: "/members",
  },
  membersDirectory: {
    title: "Member Directory",
    description:
      "Browse the full directory of ASNRT members — nephrologists and transplant specialists from across the Arab world.",
    path: "/members/directory",
  },
  societies: {
    title: "National Societies",
    description:
      "Discover the national nephrology societies across the Arab world affiliated with ASNRT, working together to improve kidney care and transplantation outcomes.",
    path: "/societies",
  },
  education: {
    title: "Education Resources",
    description:
      "Access ASNRT's comprehensive nephrology education resources including patient education materials, nursing guides, and medical professional training content.",
    path: "/education",
  },
  educationPatient: {
    title: "Patient Education",
    description:
      "Patient education materials on kidney health, dialysis, transplantation, and chronic kidney disease management — provided by ASNRT.",
    path: "/education/patient",
  },
  educationNursing: {
    title: "Nursing Education",
    description:
      "Nursing education resources for nephrology care, dialysis procedures, and transplant patient management from ASNRT.",
    path: "/education/nursing",
  },
  educationMedical: {
    title: "Medical Education",
    description:
      "Medical professional education materials covering nephrology guidelines, research updates, and clinical best practices from ASNRT.",
    path: "/education/medical",
  },
  academic: {
    title: "Academic Resources",
    description:
      "Access ASNRT's academic resources including nephrology journals, clinical guidelines, and research publications advancing kidney health in the Arab world.",
    path: "/academic",
  },
  academicJournals: {
    title: "Journals",
    description:
      "Browse nephrology journals and academic publications recommended and supported by ASNRT for advancing kidney health research.",
    path: "/academic/journals",
  },
  academicGuidelines: {
    title: "Clinical Guidelines",
    description:
      "Access clinical guidelines for nephrology practice, kidney disease management, and transplantation protocols endorsed by ASNRT.",
    path: "/academic/guidelines",
  },
  events: {
    title: "Events & Congresses",
    description:
      "Stay updated on ASNRT congresses, conferences, and nephrology events across the Arab world. Join leading nephrologists and researchers.",
    path: "/events",
  },
  news: {
    title: "News & Updates",
    description:
      "Latest news and updates from the Arab Society of Nephrology and Renal Transplantation — congresses, research highlights, and community announcements.",
    path: "/news",
  },
  gallery: {
    title: "Photo Gallery",
    description:
      "Browse photos from ASNRT congresses, conferences, and events celebrating nephrology advancement across the Arab world.",
    path: "/gallery",
  },
  membership: {
    title: "Join ASNRT",
    description:
      "Apply for ASNRT membership and join a network of nephrologists, researchers, and healthcare professionals advancing kidney health across 22 Arab countries.",
    path: "/membership",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with the Arab Society of Nephrology and Renal Transplantation. Reach out for inquiries, collaboration, or membership information.",
    path: "/contact",
  },
};
