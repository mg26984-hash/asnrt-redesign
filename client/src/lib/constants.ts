// ============================================================
// ASNRT Redesign — "Nephro Hub" Design System Constants
// Design: Modern multi-page with breadcrumb navigation
// Typography: Outfit (headings) + Plus Jakarta Sans (body)
// ============================================================

export const CALCULATOR_URL = "https://www.nephrocalcs.xyz/";
export const CALCULATOR_WELCOME_URL = "https://asnrt.org/welcome_page/index.html";

export const IMAGES = {
  logo: "https://asnrt.org/images/asnrt-logo.webp",
  footerLogo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/jlqWjvnXVWgrRHHj.webp",
  heroBg: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/AVnJNtuTJSKuveMA.jpg",
  calculatorSpotlight: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/YsDiYimgonnZFNXG.jpg",
  educationBg: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/CJBxwlIErmANObiW.jpg",
  doctor: "https://asnrt.org/storage/home/doctor.webp",
  kidney: "https://asnrt.org/storage/home/kidney.webp",
  asnrtSymbol: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/tHrAVFQxGxJLLCdU.webp",
  galleryCongress: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/hbVkpRprrGGYccLn.webp",
  galleryCover2: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/sRZLYqTHMPukknPo.webp",
  galleryCover3: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/trKJgDMoCfYKSTjx.webp",
} as const;

export const MEMBERS = [
  { name: "Prof. Torke Alotaibi", role: "President", image: "https://asnrt.org/storage/members/member-1.webp" },
  { name: "Prof. Amr Hussien", role: "Vice President", image: "https://asnrt.org/storage/members/member-2.webp" },
  { name: "Prof. Mohamed Ghnaimat", role: "President-Elect", image: "https://asnrt.org/storage/members/member-3.webp" },
  { name: "Prof. Mohamed Salah", role: "Secretary General", image: "https://asnrt.org/storage/members/member-4.webp" },
  { name: "Prof. Ahmed Ewaida", role: "Treasurer", image: "https://asnrt.org/storage/members/dr-ahmed-ewaida.webp" },
  { name: "Prof. Tarek Elbaz", role: "Member at Large", image: "https://asnrt.org/storage/members/member-6.webp" },
  { name: "Prof. Safa Al-Mukhtar", role: "Member at Large", image: "https://asnrt.org/storage/members/member-7.webp" },
] as const;

export const CALCULATOR_CATEGORIES = [
  { name: "Kidney Function", count: 10, icon: "Activity", description: "eGFR equations including CKD-EPI, Cockcroft-Gault, Schwartz" },
  { name: "AKI Workup", count: 8, icon: "AlertTriangle", description: "FENa, FEUrea, Anion Gap, Osmolal Gap, Mehran Score" },
  { name: "Dialysis Adequacy", count: 9, icon: "Droplets", description: "Kt/V, URR, Total Body Water, Session Duration" },
  { name: "Electrolytes", count: 7, icon: "Zap", description: "Sodium correction, Calcium, Potassium, QTc" },
  { name: "Proteinuria", count: 5, icon: "TestTube", description: "uACR, UPCR, ACR from PCR, IgAN Prediction" },
  { name: "Transplantation", count: 4, icon: "Heart", description: "KDPI, EPTS, Banff Classification, Tacrolimus" },
  { name: "Critical Care", count: 13, icon: "Stethoscope", description: "qSOFA, SOFA, APACHE II, NEWS2, Wells Score" },
  { name: "Anthropometric", count: 6, icon: "Ruler", description: "BMI, BSA, Ideal Body Weight, Lean Body Weight" },
  { name: "Cardiovascular", count: 2, icon: "HeartPulse", description: "ASCVD Risk, CHA₂DS₂-VASc Score" },
  { name: "CKD-MBD", count: 1, icon: "Bone", description: "Calcium-Phosphate Product" },
  { name: "Autoimmune", count: 2, icon: "Shield", description: "SLEDAI-2K, SLICC 2012 SLE Criteria" },
  { name: "Geriatric", count: 2, icon: "Users", description: "FRAIL Scale, PRISMA-7 Frailty Score" },
  { name: "Other Tools", count: 5, icon: "Wrench", description: "Steroid Conversion, PLEX Dosing, eGFR Compare" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  whatsapp: "https://wa.me/",
} as const;

export const NEWS_ITEMS = [
  {
    title: "New Federal Dietary Guidelines Impact on CKD Management",
    source: "HCPLive",
    date: "Feb 10, 2026",
    url: "https://www.hcplive.com/view/new-federal-dietary-guidelines-impact-chronic-kidney-disease-management-with-tim-pflederer-md",
    excerpt: "Tim Pflederer broke down the 2025-2030 Federal Dietary Guidelines, explaining how clinicians can guide patients with CKD to kidney-friendly nutrition.",
    tag: "Guidelines",
  },
  {
    title: "Apecotrep Delivers 40% Proteinuria Reduction in Phase 2 FSGS Trial",
    source: "The Lancet",
    date: "Jan 27, 2026",
    url: "https://www.hcplive.com/view/phase-2-apecotrep-delivers-40-proteinuria-reduction-in-fsgs",
    excerpt: "In a 12-week, 31-center phase 2 clinical trial, apecotrep (BI 764198) reduced proteinuria by 40% in individuals with primary FSGS.",
    tag: "Research",
  },
  {
    title: "KDIGO Releases New Guideline for Anemia in CKD",
    source: "KDIGO",
    date: "Jan 5, 2026",
    url: "https://www.hcplive.com/view/kdigo-releases-new-guideline-for-anemia-in-chronic-kidney-disease",
    excerpt: "The 2026 Clinical Practice Guideline covers diagnosis, iron therapy, ESAs/HIF-PHIs, and RBC transfusions for anemia management in CKD.",
    tag: "Guidelines",
  },
  {
    title: "FDA Grants Priority Review for Atacicept in IgA Nephropathy",
    source: "FDA",
    date: "Jan 2026",
    url: "https://www.hcplive.com/view/fda-grants-priority-review-of-biologics-license-application-for-atacicept-in-iga-nephropathy",
    excerpt: "Atacicept received priority review supported by ORIGIN 3 data showing 46% proteinuria reduction from baseline at week 36.",
    tag: "Regulatory",
  },
  {
    title: "FDA Accepts Oxylanthanum Carbonate NDA for Hyperphosphatemia",
    source: "FDA",
    date: "Jan 29, 2026",
    url: "https://www.hcplive.com/view/fda-accepts-oxylanthanum-carbonate-nda-resubmission-for-hyperphosphatemia-in-ckd-dialysis",
    excerpt: "Unicycive Therapeutics' NDA for OLC treatment of hyperphosphatemia in CKD patients on dialysis accepted with PDUFA date June 29, 2026.",
    tag: "Regulatory",
  },
  {
    title: "FDA Extends Sparsentan (Filspari) sNDA Review for FSGS",
    source: "FDA",
    date: "Jan 13, 2026",
    url: "https://www.hcplive.com/view/fda-extends-sparsentan-filspari-focal-segmental-glomerulosclerosis-snda-review",
    excerpt: "The FDA extended review of sparsentan sNDA for FSGS after a Major Amendment, moving PDUFA target to April 13, 2026.",
    tag: "Regulatory",
  },
] as const;

export const ARAB_SOCIETIES = [
  { name: "Syrian Society of Nephrology, Hypertension and Transplantation", banner: "https://asnrt.org/storage/societies/banners/slide-1.webp" },
  { name: "Kuwait Nephrology Association", banner: "https://asnrt.org/storage/societies/banners/slide-2.webp" },
  { name: "The Egyptian Society of Nephrology and Transplantation", banner: "https://asnrt.org/storage/societies/banners/slide-3.webp" },
  { name: "Lebanese Society of Nephrology & Hypertension", banner: "https://asnrt.org/storage/societies/banners/slide-4.webp" },
  { name: "Oman Society of Nephrology and Transplantation (OSNT)", banner: "https://asnrt.org/storage/societies/banners/slide-5.webp" },
  { name: "Jordan Society of Nephrology and Renal Transplantation", banner: "https://asnrt.org/storage/societies/banners/slide-6.webp" },
  { name: "Fayoum Outreach for Deceased Donor TX", banner: "https://asnrt.org/storage/societies/banners/slide-7.webp" },
] as const;

export const INTERNATIONAL_SOCIETIES = [
  { name: "International Society of Nephrology (ISN)", url: "https://www.theisn.org/" },
  { name: "American Society of Nephrology (ASN)", url: "https://www.asn-online.org/" },
  { name: "European Renal Association (ERA)", url: "https://www.era-online.org/" },
  { name: "Kidney Disease: Improving Global Outcomes (KDIGO)", url: "https://kdigo.org/" },
  { name: "The Transplantation Society (TTS)", url: "https://www.tts.org/" },
  { name: "International Pediatric Nephrology Association (IPNA)", url: "https://www.ipna-online.org/" },
] as const;

export const EDUCATION_CATEGORIES = {
  patient: {
    title: "Patient Education",
    description: "Resources designed to help patients understand kidney disease, dialysis, and transplantation.",
    subcategories: [
      { name: "Nephrology", description: "Understanding kidney disease, stages of CKD, and management strategies", icon: "BookOpen" },
      { name: "Dialysis", description: "Guide to hemodialysis and peritoneal dialysis for patients", icon: "Droplets" },
      { name: "Transplantation", description: "What to expect before, during, and after kidney transplantation", icon: "Heart" },
    ],
  },
  nurses: {
    title: "Nursing Education",
    description: "Specialized training materials and resources for nephrology nurses.",
    subcategories: [
      { name: "Nephrology", description: "Clinical nursing practices in nephrology care", icon: "Stethoscope" },
      { name: "Dialysis", description: "Dialysis nursing protocols and best practices", icon: "Droplets" },
      { name: "Transplantation", description: "Pre- and post-transplant nursing care guidelines", icon: "Heart" },
    ],
  },
  doctors: {
    title: "Medical Education",
    description: "Continuing medical education resources for nephrologists and physicians.",
    subcategories: [
      { name: "Nephrology", description: "Advanced nephrology topics, case studies, and CME", icon: "GraduationCap" },
      { name: "Dialysis", description: "Dialysis adequacy, vascular access, and complications", icon: "Droplets" },
      { name: "Transplantation", description: "Transplant immunology, rejection, and long-term management", icon: "Heart" },
    ],
  },
} as const;

export const ACADEMIC_ACTIVITIES = {
  journals: {
    arab: [
      { name: "Arab Journal of Nephrology and Transplantation", url: "#" },
      { name: "Saudi Journal of Kidney Diseases and Transplantation", url: "https://www.sjkdt.org/" },
    ],
    international: [
      { name: "Kidney International", url: "https://www.kidney-international.org/" },
      { name: "Journal of the American Society of Nephrology (JASN)", url: "https://jasn.asnjournals.org/" },
      { name: "Clinical Journal of the American Society of Nephrology (CJASN)", url: "https://cjasn.asnjournals.org/" },
      { name: "Nephrology Dialysis Transplantation (NDT)", url: "https://academic.oup.com/ndt" },
      { name: "American Journal of Kidney Diseases (AJKD)", url: "https://www.ajkd.org/" },
      { name: "Nature Reviews Nephrology", url: "https://www.nature.com/nrneph/" },
    ],
  },
  guidelines: {
    arab: [
      { name: "ASNRT Clinical Practice Guidelines", url: "#" },
    ],
    international: [
      { name: "KDIGO Clinical Practice Guidelines", url: "https://kdigo.org/guidelines/" },
      { name: "KDOQI Guidelines (NKF)", url: "https://www.kidney.org/professionals/guidelines" },
      { name: "ERA-EDTA Guidelines", url: "https://www.era-online.org/guidelines/" },
      { name: "Renal Association Guidelines (UK)", url: "https://ukkidney.org/health-professionals/guidelines" },
    ],
  },
} as const;

export const GALLERY_ITEMS = [
  { title: "14th Congress of ASNRT — Amman, Jordan; 24-27 April 2019", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/hbVkpRprrGGYccLn.webp" },
  { title: "ASNRT Autumn Nephrology Forum and ESNT Clinical Nephrology Chapter, Nov 21-23, 2018", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/sRZLYqTHMPukknPo.webp" },
  { title: "ASNRT Spring Forum", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/trKJgDMoCfYKSTjx.webp" },
  { title: "ASNRT ESNT 28 Feb – 3 March 2017", image: "https://asnrt.org/storage/galleries/items/asnrt-esnt-2027/001.webp" },
  { title: "7th EMAN ISN Update Dubai 13-16, Dec 2017", image: "https://asnrt.org/storage/galleries/items/eman-isn-update-dubai-2017/001.webp" },
] as const;
