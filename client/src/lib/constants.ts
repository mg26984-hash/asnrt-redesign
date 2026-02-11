// ============================================================
// ASNRT Redesign — Constants & Data
// Typography: Outfit (headings) + Plus Jakarta Sans (body)
// ============================================================

// Calculator — NephroCalcs is the single calculator service (OTCCalcs redirects to it)
export const NEPHROCALCS_URL = "https://www.nephrocalcs.xyz/";
// Backward compat
export const CALCULATOR_URL = NEPHROCALCS_URL;
export const OTCCALCS_URL = NEPHROCALCS_URL; // same site

export const CALCULATOR_WELCOME_URL = "https://asnrt.org/welcome_page/index.html";

export const CALCULATOR_CATEGORIES = [
  { name: "Kidney Function", icon: "Activity", count: 8, description: "eGFR, CrCl, and renal function assessment" },
  { name: "Electrolytes", icon: "Zap", count: 7, description: "Sodium, potassium, calcium corrections" },
  { name: "Acid-Base", icon: "Droplets", count: 5, description: "ABG interpretation and anion gap" },
  { name: "Dialysis", icon: "Heart", count: 6, description: "Kt/V, URR, and adequacy metrics" },
  { name: "Transplant", icon: "Shield", count: 5, description: "Scoring and risk assessment" },
  { name: "Fluid & Hemodynamics", icon: "HeartPulse", count: 6, description: "Fluid balance and hemodynamic calculations" },
  { name: "Urinalysis", icon: "TestTube", count: 4, description: "Urine studies and protein quantification" },
  { name: "Pediatric", icon: "Users", count: 5, description: "Pediatric-specific renal calculations" },
  { name: "CKD-MBD", icon: "Bone", count: 4, description: "Mineral bone disease parameters" },
  { name: "Drug Dosing", icon: "Stethoscope", count: 6, description: "Renal dose adjustments" },
  { name: "Nutrition", icon: "Ruler", count: 5, description: "BMI, protein intake, and dietary calculations" },
  { name: "Risk Scores", icon: "AlertTriangle", count: 4, description: "Clinical risk stratification" },
  { name: "Conversion", icon: "Wrench", count: 3, description: "Unit conversions for lab values" },
];

export interface EducationSubcategory {
  name: string;
  icon: string;
  description: string;
}

export interface EducationCategoryData {
  title: string;
  description: string;
  subcategories: EducationSubcategory[];
}

export const EDUCATION_CATEGORIES: Record<string, EducationCategoryData> = {
  patient: {
    title: "Patient Education",
    description: "Resources for patients and families about kidney disease.",
    subcategories: [
      { name: "Nephrology", icon: "BookOpen", description: "Understanding kidney disease and CKD" },
      { name: "Dialysis", icon: "Droplets", description: "Hemodialysis and peritoneal dialysis guides" },
      { name: "Transplantation", icon: "Heart", description: "Kidney transplant information" },
    ],
  },
  nurses: {
    title: "Nursing Education",
    description: "Training materials for nephrology nursing professionals.",
    subcategories: [
      { name: "Nephrology", icon: "Stethoscope", description: "Clinical nursing in nephrology" },
      { name: "Dialysis", icon: "Droplets", description: "Dialysis nursing protocols" },
      { name: "Transplantation", icon: "Heart", description: "Transplant nursing care" },
    ],
  },
  doctors: {
    title: "Medical Education",
    description: "CME resources and conference presentations for physicians.",
    subcategories: [
      { name: "Nephrology", icon: "GraduationCap", description: "Advanced nephrology topics" },
      { name: "Dialysis", icon: "Droplets", description: "Dialysis management and adequacy" },
      { name: "Transplantation", icon: "Heart", description: "Transplant immunology and management" },
    ],
  },
};

export const IMAGES = {
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/lCBmnwAFSTZvVShK.webp",
  footerLogo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/YwwFoPNHkvVNcSLX.webp",
  heroBg: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/rnNkyvsNkwNyMewh.webp",
  calculatorSpotlight: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/DYMJBqulXUOyxZss.webp",
  educationBg: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/mRdTpsmGoiVxzJNu.webp",
  doctor: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/zaUoLqcAbsEsqsUg.webp",
  kidney: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/fSBTwWAVesSosfrx.png",
  asnrtSymbol: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/DzxiJpjdeUtWCgvk.webp",
  galleryCongress: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/jGcMPIAMefggRGjz.webp",
  galleryCover2: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/RiziaHDipIUAJgHC.webp",
  galleryCover3: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/SuKJMzaKqnAqZxXY.webp",
} as const;

export const MEMBERS = [
  { name: "Prof. Torke Alotaibi", role: "President", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/fjqcMKdmaMAhvjbk.webp" },
  { name: "Prof. Amr Hussien", role: "Vice President", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/oKMJDEHQnLJGKUKj.webp" },
  { name: "Prof. Mohamed Ghnaimat", role: "President-Elect", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/QOEJiaUiyqbmsXYp.webp" },
  { name: "Prof. Mohamed Salah", role: "Secretary General", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/PcAZgZbOMhGMIiTX.webp" },
  { name: "Prof. Ahmed Ewaida", role: "Treasurer", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/LPVMYLbICGuVekPw.webp" },
  { name: "Prof. Tarek Elbaz", role: "Member at Large", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/RoTZoyHEYyJnNLjg.webp" },
  { name: "Prof. Safa Al-Mukhtar", role: "Member at Large", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/kBhaNVQWVLIyZXdo.webp" },
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
  { name: "Syrian Society of Nephrology, Hypertension and Transplantation", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/RuTyPbiGLJqInPkj.webp" },
  { name: "Kuwait Nephrology Association", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/RwAKvsYfIOLSYdID.webp" },
  { name: "The Egyptian Society of Nephrology and Transplantation", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/XgBBWNSqTGWdViBQ.webp" },
  { name: "Lebanese Society of Nephrology & Hypertension", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/DkbcjumIslvUZAGC.webp" },
  { name: "Oman Society of Nephrology and Transplantation (OSNT)", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/rcZptrtvqMJVMnLd.webp" },
  { name: "Jordan Society of Nephrology and Renal Transplantation", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/YLbPJhFYpLTeuxPo.webp" },
  { name: "Fayoum Outreach for Deceased Donor TX", banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/WcLPZimbadhSKlJk.webp" },
] as const;

export const INTERNATIONAL_SOCIETIES = [
  { name: "International Society of Nephrology (ISN)", url: "https://www.theisn.org/" },
  { name: "American Society of Nephrology (ASN)", url: "https://www.asn-online.org/" },
  { name: "European Renal Association (ERA)", url: "https://www.era-online.org/" },
  { name: "Kidney Disease: Improving Global Outcomes (KDIGO)", url: "https://kdigo.org/" },
  { name: "The Transplantation Society (TTS)", url: "https://www.tts.org/" },
  { name: "International Pediatric Nephrology Association (IPNA)", url: "https://www.ipna-online.org/" },
] as const;

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
  { title: "14th Congress of ASNRT — Amman, Jordan; 24-27 April 2019", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/jGcMPIAMefggRGjz.webp" },
  { title: "ASNRT Autumn Nephrology Forum and ESNT Clinical Nephrology Chapter, Nov 21-23, 2018", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/RiziaHDipIUAJgHC.webp" },
  { title: "ASNRT Spring Forum", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/SuKJMzaKqnAqZxXY.webp" },
  { title: "ASNRT ESNT 28 Feb — 3 March 2017", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/ArGODmTWkHpMzimo.webp" },
  { title: "7th EMAN ISN Update Dubai 13-16, Dec 2017", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/cRLWLcNuoKWMrAIS.webp" },
] as const;

// ============================================================
// EDUCATION MATERIALS — Scraped from original asnrt.org
// All URLs verified against the live site
// ============================================================

export interface EducationResource {
  title: string;
  author?: string;
  event?: string;
  year?: string;
  pdfUrl: string;
}

export const EDUCATION_MATERIALS = {
  patient: {
    nephrology: {
      title: "Patient Education — Nephrology",
      description: "Resources to help patients understand kidney disease, CKD stages, and fasting guidelines during Ramadan.",
      resources: [
        { title: "الصيام ومرضى الكلى — التهابات الكبيبات", author: "قسم الكلى", year: "2025", pdfUrl: "https://asnrt.org/storage/education/pdfs/%D8%A7%D9%84%D8%B5%D9%8A%D8%A7%D9%85%20%D9%84%D9%85%D8%B1%D8%B6%D9%89%20%D8%A7%D9%84%D8%A7%D9%84%D8%AA%D9%87%D8%A7%D8%A8%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%A8%D9%89.pdf" },
        { title: "الصيام ومرضى الكلى — مريض القصور الكلوى وزرع الكلى", author: "قسم الكلى", year: "2025", pdfUrl: "https://asnrt.org/storage/education/pdfs/%D8%A7%D9%84%D8%B5%D9%8A%D8%A7%D9%85%20%D9%85%D8%B9%20%D9%85%D8%B1%D8%B6%D9%89%20%D8%A7%D9%84%D9%82%D8%B5%D9%88%D8%B1%20%D8%A7%D9%84%D9%83%D9%84%D9%88%D9%8A%20%D8%A7%D9%84%D9%85%D8%B2%D9%85%D9%86%20%D9%88%D8%B2%D8%B1%D8%B9%20%D8%A7%D9%84%D9%83%D9%84%D9%89.pdf" },
        { title: "الصيام ومرضى الكلى — فهم امراض الكلى", author: "قسم الكلى", year: "2025", pdfUrl: "https://asnrt.org/storage/education/pdfs/%D9%81%D9%87%D9%85%20%D8%A3%D9%85%D8%B1%D8%A7%D8%B6%20%D8%A7%D9%84%D9%83%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%84%D9%81%D8%A9%202.pdf" },
        { title: "الصيام ومرضى الكلى — ملخص", author: "قسم الكلى", year: "2025", pdfUrl: "https://asnrt.org/storage/education/pdfs/%D9%84%D9%84%D8%B5%D9%8A%D8%A7%D9%85%20%20%D9%85%D9%84%D8%AE%D8%B5%20%D9%84%D8%A7%D9%85%D8%B1%D8%A7%D8%B6%20%D8%A7%D9%84%D9%83%D9%84%D9%89.pdf" },
        { title: "الصيام ومرضى الكلى — نظام تصنيف الخطوره", author: "قسم الكلى", year: "2025", pdfUrl: "https://asnrt.org/storage/education/pdfs/%D9%86%D8%B8%D8%A7%D9%85%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D8%AE%D8%B7%D9%88%D8%B1%D8%A9%20%D9%84%D9%84%D8%B5%D9%8A%D8%A7%D9%85%20%D8%AD%D8%B3%D8%A8%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D9%84%D9%89%203.pdf" },
        { title: "مقدمه — الصيام ومرضى الكلى", author: "قسم الكلى", year: "2025", pdfUrl: "https://asnrt.org/storage/education/pdfs/%D8%A7%D9%84%D8%B5%D9%8A%D8%A7%D9%85%20%D9%81%D9%8A%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%20%D9%84%D8%AC%D9%85%D9%8A%D8%B9%20%D9%85%D8%B1%D8%B6%D9%89%20%D8%A7%D9%84%D9%83%D9%84%D9%89%201.pdf" },
      ] as EducationResource[],
    },
    dialysis: {
      title: "Patient Education — Dialysis",
      description: "Guides to help patients understand hemodialysis and peritoneal dialysis.",
      resources: [] as EducationResource[],
      comingSoon: true,
    },
    transplantation: {
      title: "Patient Education — Transplantation",
      description: "What to expect before, during, and after kidney transplantation.",
      resources: [] as EducationResource[],
      comingSoon: true,
    },
  },
  nurses: {
    nephrology: {
      title: "Nursing Education — Nephrology",
      description: "Clinical nursing practices and training materials for nephrology care.",
      resources: [
        { title: "DKD Updates", author: "Prof. Hussein Sheashaa", event: "ASNRT Congress", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/DKD updates Kwait prof. Hussein Sheashaa.pdf" },
      ] as EducationResource[],
    },
    dialysis: {
      title: "Nursing Education — Dialysis",
      description: "Dialysis nursing protocols and best practices.",
      resources: [] as EducationResource[],
      comingSoon: true,
    },
    transplantation: {
      title: "Nursing Education — Transplantation",
      description: "Pre- and post-transplant nursing care guidelines.",
      resources: [] as EducationResource[],
      comingSoon: true,
    },
  },
  doctors: {
    nephrology: {
      title: "Medical Education — Nephrology",
      description: "Conference presentations, case studies, and CME resources for nephrologists.",
      resources: [
        // GCC 2025
        { title: "Fluid Management with AKI in Pediatric Practice", author: "Dr. Fatina Fadel", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Fluid-Management-with-AKI-in-Pediatric-Practice.pdf" },
        { title: "Nephropathology Case Presentation", author: "Riyad Said", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Nephropathology-Case-Presentation.pdf" },
        { title: "Rare Diseases in Nephrology", author: "Dieter Haffner", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Rare-Diseases-in-Nephrology.pdf" },
        { title: "Twice a Day, Twice the Ease", author: "Dieter Haffner", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Twice-a-Day-Twice-the-Ease.pdf" },
        { title: "Infection Related GN", author: "Tariq Zayan", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Infection-Related-GN.pdf" },
        { title: "New Progress in Diagnosis & Treatment of Lupus Nephritis", author: "Dr. Ahmed A. M. Ewaida", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/New-Progress-in-Diagnosis-and-Treatment-of-Lupus-Nephritis.pdf" },
        { title: "4th GCC Organ Transplantation & Nephrology Congress", author: "Muriel Ghosn", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/GCC-Organ-Transplantation-and-Nephrology-Congress.pdf" },
        { title: "Anemia in Chronic Kidney Disease Patients", author: "Dr. Heba Al Rajab", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Anemia-in-chronic-kidney-disease-patients.pdf" },
        { title: "IgA Nephropathy: Current Perspectives & Future Outcomes", author: "Dr. Ahmed Ewaida", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/IgA-Nephropathy.pdf" },
        { title: "Management of Hypertension in CKD Patients", author: "Mohammad Ghnaimat", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Management-of-Hypertension-in-CKD-Patients.pdf" },
        { title: "Management of Dyslipidaemia in CKD Patients: An Update", author: "Dr. Mousa Akbar", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Management-of-dyslipidaemia-in-CKD-patients-An-update.pdf" },
        { title: "Tumor Lysis Syndrome: An Endless Challenge in Onco-Nephrology", author: "Dr. Sultan Al Dalbhi", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Tumor-Lysis-Syndrome.pdf" },
        { title: "C3 Glomerulopathy", author: "Dr. H. Dastoor", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/C3-Glomerulopathy.pdf" },
        { title: "Atypical HUS: Current Approaches and Emerging Innovations", author: "May A Hassaballa", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Atypical-HUS.pdf" },
        { title: "Cardiorenal Syndrome: Key Points Towards Better Management", author: "Dr. M M Kapoor", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Cardiorenal-Syndrome.pdf" },
        { title: "Transforming Heart and Kidney Care: Kerendia in CKD and T2D", author: "Dr. Anas Alyousef", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Transforming-Heart-and-Kidney-Care.pdf" },
        { title: "DKD: New Insights, New Targets", author: "Magdy ElSharkawy", event: "GCC 2024", year: "2024", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/DKD-New-insights-new-targets.pdf" },
        { title: "ANCA-Associated Vasculitis (AAV) and Avacopan", author: "GCC 2023", event: "GCC 2023", year: "2023", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Take-a-closer-look-at-ANCA-associated-vasculitis-AAV-and-avacopan.pdf" },
        // Kuwait 2017
        { title: "Cardiovascular Risk", author: "Dr. Shabbir Moochhala", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/2017-01 Cardiovasc risk talk Dr. Dr Shabbir Moochhala.pdf" },
        { title: "IgA Nephropathy", author: "Dr. Joanne M. Bargman", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Kuwait_IgA nephropathy Dr. Joanne M. Bargman.pdf" },
        { title: "Lupus Nephritis", author: "Dr. Joanne M. Bargman", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Kuwait_Lupus Dr.  Joanne M. Bargman .pdf" },
        { title: "Measures to Delay Progression of CKD", author: "Dr. Adeera Levin", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Levin Measures to delay progression Kuwait 2017.pdf" },
        { title: "Hypertension and CKD", author: "Prof. Riyad Said", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Prof. Riyad Said Hypertension and CKD .pdf" },
        { title: "Membranous Nephropathy", author: "Dr. Shabbir Moochhala", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/2017-01 Membranous talk pres Dr Shabbir Moochhala.pdf" },
        { title: "Anaemia in CKD", author: "Dr. David Goldsmith", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Anaemia in CKD   Dr. David Goldsmith.pdf" },
        { title: "Screening for CKD", author: "Dr. Adeera Levin", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr. Adeera Levin  Kuwait 2017 Screening for CKD.pdf" },
        { title: "Bone Disease in CKD", author: "Dr. Jhonn Cunningham", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr. Jhonn cunningham -Bone-Kuwait-2017.pdf" },
        { title: "Vitamin D in CKD", author: "Dr. Magdy Elsharkawy", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr. Magdy  Elsharkawy VitD  K222 final.pdf" },
        { title: "FSGS", author: "Dr. Flavio Vincenti", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/FSGS_Kuwait_03Jan2017.pdf" },
        { title: "GCC DOPPS Data", author: "Dr. Saeed M.G Al-Ghamdi", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/GCC_DOPPS_Dr. Saeed M.G Al-Ghamdi_Kuwait_Jan_2017.final.pdf" },
      ] as EducationResource[],
    },
    dialysis: {
      title: "Medical Education — Dialysis",
      description: "Conference presentations on hemodialysis, peritoneal dialysis, and dialysis adequacy.",
      resources: [
        // GCC 2025
        { title: "Home Hemodialysis", author: "Dr. Reem Ali Asad", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Home-Hemodialysis.pdf" },
        { title: "Advances in Hemodialysis Therapy & Technology", author: "Hesham Elsayed", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Advances-in-Hemodialysis-Therapy-and-Technology.pdf" },
        { title: "RRT in AKI: When, How Much, and Which Modality", author: "Prof. Basset El Essawy", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/RRT-in-AKI-when-how-much-and-which-modality.pdf" },
        { title: "Advances in the Management of Hyperkalemia", author: "Dr. Hamad Bahbahani", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Advances-in-the-Management-of-HYPERKALEMIA.pdf" },
        { title: "Bone Disease in CKD Patients: An Update", author: "Tarek ElBaz", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Bone-Disease-in-CKD-Patients-an-Update.pdf" },
        { title: "Advancing Patient Care: Managing Parathyroid Health", author: "Heba Al Rajab", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Advancing-Patient-Care-in-Nephrology-a-New-Approach-to-Managing-Parathyroid-Health.pdf" },
        { title: "Peritoneal Dialysis: Diabetes in Focus", author: "Ali K. Abu-Alfa", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Peritoneal-Dialysis-Diabetes-in-Focus.pdf" },
        { title: "CKD-Associated Pruritus", author: "Dr. Mohammad Almomen", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Scratching-the-Surface-of-CKD-Associated-Pruritus.pdf" },
        { title: "Preservation of Peritoneal Membrane Structure & Function", author: "Dina Abdellatif", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Preservation-of-Peritoneal-Membrane-Structure-and-Function.pdf" },
        // Kuwait 2017
        { title: "Calcimimetics in CKD-MBD", author: "Amgen", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Amgen Calcimimetics Kuwait Jan 2017.pdf" },
        { title: "HCV in Dialysis Patients", author: "Prof. Dr. Mai", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/prof Dr Mai  HCV Kwait 2017 final.pdf" },
        { title: "Dialysis Initiation", author: "Tarek ElBaz", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/T. ElBaz. Dialysis initiation.pdf" },
        { title: "Trends in Hb, Iron Use and Ferritin", author: "David Goldsmith", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Trends in Hb, iron use and ferritin 2007-2017.pdf" },
      ] as EducationResource[],
    },
    transplantation: {
      title: "Medical Education — Transplantation",
      description: "Presentations on transplant immunology, rejection, donor management, and post-transplant care.",
      resources: [
        // GCC 2025 + Recent
        { title: "Post-Transplant Complications: Malignancies", author: "Dr. Mohamed Abdulmoneem", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/pdfs/Post Renal Transplant Malignancy Dr Mohamed Abdolmoneim.pdf" },
        { title: "Post-Transplant Complications: UTI Prophylaxis", author: "Dr. Mohamed Megahed", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/pdfs/UTI_Prophylaxis_5MB_attempt1.pdf" },
        { title: "Pre-Transplant Categorization of Immunological Risk", author: "Gamal Saadi", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Pre-Transplant-Categorization-of-Immunological-Risk.pdf" },
        { title: "Maximizing the Donor Pool", author: "Dr. Peter Dupont", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Maximizing-the-donor-pool.pdf" },
        { title: "Donor Specific Antibodies", author: "Edward Cole", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Donor-Specific-Antibodies.pdf" },
        { title: "Management of Post-Transplant GN Recurrence", author: "Robert Najem", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/management-of-post-transplant-glomerulonephritis-recurrence.pdf" },
        { title: "4th GCC Organ Transplantation & Nephrology Congress", author: "Dr. Colin Forman", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/GCC-Organ-Transplantation-Nephrology-Congress.pdf" },
        { title: "Update in Desensitisation Strategies", author: "Dr. Peter Dupont", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Update-in-desensitisation-strategies.pdf" },
        { title: "BK Virus in Renal Transplantation: Consensus Recommendations", author: "Edward H Cole", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Consensus-Recommendations-on-Management-of-BK-Virus-in-Renal-Transplantation.pdf" },
        { title: "Antibody-Mediated Rejection: Present and Future", author: "Dr. Mohamed Alseiari", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Antibody-Mediated-Rejection-Present-and-Future.pdf" },
        { title: "Follow-up Of Kidney Transplant Recipients In 2025", author: "Mohamed Mongi Bacha", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Follow-up-Of-Kidney-Transplant-Recipients-In-2025.pdf" },
        { title: "Post Kidney Transplantation Fungal Infection", author: "Mohamed Salah El Din Zaki", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Post-Kidney-Transplantation-Fungal-Infection.pdf" },
        { title: "CMV-Specific Cell-Mediated Immune Response", author: "Ayman Refaie", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/CMV-specific-cell-mediated-immune-response.pdf" },
        { title: "Management of TMAs in Kidney Transplantation", author: "Dr. Hassan Aleid", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Management-of-TMAs-in-Kidney-Transplantation.pdf" },
        // Kuwait 2017
        { title: "Organ Transplantation in the Arab World", author: "Dr. Adel Bakr", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/dr adel bakr kuwait 2017 organ tx in Arab .pdf" },
        { title: "Transplant in Immunised Patients", author: "Dr. Glotz", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Tx Immunised-Kowait  Dr Glotz 2017.pdf" },
        { title: "Update in ABMR Management", author: "Dr. Glotz", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/D. Glotz 2017 update in ABMR management.pdf" },
        { title: "Molecular Microscope Diagnostics (MMDx)", author: "Prof. Halloran", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/final 60 kuwait MMDx.pdf" },
        { title: "HCV and Liver Transplantation", author: "Dr. John J. Fung", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/GCC HCV and liver tx DR John J. Fung 2017.pdf" },
        { title: "Liver Transplantation", author: "Dr. John J. Fung", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/GCC Liver tx  Dr. John J. Fung 2017 .pdf" },
        { title: "Gender Effect on Transplantation", author: "Dr. Mona Alrukhaimi", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Gender Effect on Transplantation Dr Mona Alrukhaimi.pdf" },
        { title: "History of Transplantation", author: "Mehmet Haberal", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/History - GCC Kuwait Mehmet Haberal.pdf" },
        { title: "Islamic Perspective for Organ Transplantation", author: "Zuheir Al-Kawi", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Islamic perpective for organ tx  Zuheir Al-Kawi.pdf" },
        { title: "Kidney Transplantation in Libya", author: "Dr. Abdulhafid Ali Shebani", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Kidney Transplantation in libya -Dr. Abdulhafid Ali Shebani 2017.pdf" },
        { title: "Kidney Transplantation in Kuwait", author: "Dr. M. Samhan", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/KTx in Kuwait-Dr M  Samhan  GCC 2017.pdf" },
        { title: "CNI Minimization", author: "Donald E. Hricik", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Donald E. Hricik  CNI minimization Kuwait 2017.pdf" },
        { title: "Retransplantation", author: "Dr. Adel Bakr", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/DR ADEL BAKR  retransplantation 2017.pdf" },
        { title: "Long-term Outcome in Transplantation", author: "Flavio Vincenti", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Kuwait_Long-term_Outcome Flavio Vincenti 2017.pdf" },
        { title: "Living Donor High Quality", author: "Dr. Martí Manyalich", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Living donor High Quality Dr Martí Manyalich.pdf" },
        { title: "Lung Transplant Update", author: "Imran Nizami", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Lung Tx Update  Imran Nizami  GCC Kuwait.pdf" },
        { title: "Organ Failure and Transplantation in Oman", author: "Issa Al-Salmi", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/organ_failure_and_transplantation_in_Oman__Kuwait GCC_meeting_18 Jan_2017_issa_al_salmi.pdf" },
        { title: "Pregnancy Post Renal Transplant", author: "Dr. Dujanah Mousa", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Pregnancy post Renal Transplant Dr Dujanah Mousa.pdf" },
        { title: "Rejection Biomarkers", author: "Donald E. Hricik", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Rejection Biomarkers Donald E. Hricik 2017.pdf" },
        { title: "Risk Stratification", author: "Dr. Mohamed Hany Hafez", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Risk Strati Kuwit2017  Dr Mohamed Hany Hafez.pdf" },
        { title: "SPK Transplant", author: "Dr. Wael Habhab", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/SPK transplant  Dr. Wael Habhab  KSA.pdf" },
        { title: "UAE Transplantation", author: "Dr. Ali Abdulkareem Alobaidli", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/UAE Transplantation Kuwait dr. Ali Abdulkareem Alobaidli.pdf" },
        { title: "Updates in Heart Transplant", author: "Dr. Jehad AlBuraiki", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr Jehad AlBuraiki UPDATES IN HEART TRANSPLANT.pdf" },
        { title: "CNI Minimization in Kidney Transplant", author: "Donald E. Hricik", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Donald E. Hricik MD  CNI minimisation.pdf" },
        { title: "Stem Cells: Mansoura Experience", author: "Prof. Mohamed Ghoneim", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Prof Mohamed Ghoneim  Mansoura experience Stemm cells 2017.pdf" },
        { title: "Steroid-Free Protocols", author: "Dr. Ayman Refaie", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr Ayman Refaie steroid free protocols 2017 .pdf" },
        { title: "Outcome of Highly Sensitized Transplant", author: "Dr. Edward Cole", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr Edward cole  Highly sensitised.pdf" },
        { title: "Donation after Circulatory Death (DCD)", author: "Dr. Martí Manyalich", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr Martí Manyalich DCD KUWAIT 2017.pdf" },
        { title: "Common Medical Problems Post-Transplant", author: "Dr. Peter Dupont", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr Peter Dupont Common medical problems.pdf" },
        { title: "Current Challenges in Immunosuppression", author: "Dr. Peter Dupont", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr Peter Dupont Current challenges in immunosuppression.pdf" },
        { title: "Advagraf Conversion and De Novo Clinical Aspects", author: "Dr. Maarten HL Christiaans", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr. Maarten HL Christiaans Christiaans Advagraf conversion and de novo clinical aspects def.pdf" },
        { title: "Allograft Dysfunction Management", author: "Dr. Edward Cole", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/edward cole  Allograft Dysfunction Management 2017.pdf" },
        { title: "EPLET MisMatching", author: "Dr. Gamal Saadi", event: "ASNRT Congress Kuwait", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/EPLET MisMatching Kuwait Dr .Gamal 2017.pdf" },
      ] as EducationResource[],
    },
  },
} as const;
