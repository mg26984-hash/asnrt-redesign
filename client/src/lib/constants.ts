// ============================================================
// ASNRT Redesign — Constants & Data
// Typography: Outfit (headings) + Plus Jakarta Sans (body)
// ============================================================

// Calculator tools are services offered by ASNRT — not the main focus
export const NEPHROCALCS_URL = "https://www.nephrocalcs.xyz/";
export const OTCCALCS_URL = "https://www.otccalcs.com/";
export const CALCULATOR_WELCOME_URL = "https://asnrt.org/welcome_page/index.html";

// Backward compat — old pages still import these
export const CALCULATOR_URL = NEPHROCALCS_URL;
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

// ============================================================
// EDUCATION MATERIALS — Downloaded from original asnrt.org
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
        { title: "الصيام في رمضان لمرضى التهابات الكبيبات الكلوية", author: "ASNRT", year: "2025", pdfUrl: "https://asnrt.org/storage/education/patients/nephrology/Fasting-Ramadan-Kidney-Patients-Glomerulonephritis.pdf" },
        { title: "الصيام في رمضان لمرضى القصور الكلوي المزمن", author: "ASNRT", year: "2025", pdfUrl: "https://asnrt.org/storage/education/patients/nephrology/Fasting-Ramadan-Kidney-Patients-CKD.pdf" },
        { title: "الصيام في رمضان لمرضى زراعة الكلى", author: "ASNRT", year: "2025", pdfUrl: "https://asnrt.org/storage/education/patients/nephrology/Fasting-Ramadan-Kidney-Patients-Transplant.pdf" },
        { title: "الصيام في رمضان لمرضى الغسيل الكلوي", author: "ASNRT", year: "2025", pdfUrl: "https://asnrt.org/storage/education/patients/nephrology/Fasting-Ramadan-Kidney-Patients-Dialysis.pdf" },
        { title: "نظام تصنيف الخطورة للصيام حسب حالة الكلى", author: "ASNRT", year: "2025", pdfUrl: "https://asnrt.org/storage/education/patients/nephrology/Fasting-Ramadan-Risk-Classification.pdf" },
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
        { title: "DKD Updates — ASNRT Congress Presentation", author: "ASNRT", year: "2025", pdfUrl: "https://asnrt.org/storage/education/nurses/nephrology/DKD-Updates.pdf" },
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
        // 2025 GCC Congress
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
        { title: "DKD: New Insights, New Targets", author: "ASNRT", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/DKD-New-insights-new-targets.pdf" },
        { title: "ANCA-Associated Vasculitis (AAV) and Avacopan", author: "ASNRT", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/nephrology/Take-a-closer-look-at-ANCA-associated-vasculitis-AAV-and-avacopan.pdf" },
        // 2017 Kuwait
        { title: "Cardiovascular Risk", author: "Dr. Shabbir Moochhala", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/2017-01%20Cardiovasc%20risk%20talk%20Dr.%20Dr%20Shabbir%20Moochhala.pdf" },
        { title: "IgA Nephropathy", author: "Dr. Joanne M. Bargman", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Kuwait_IgA%20nephropathy%20Dr.%20Joanne%20M.%20Bargman.pdf" },
        { title: "Lupus Nephritis", author: "Dr. Joanne M. Bargman", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Kuwait_Lupus%20Dr.%20%20Joanne%20M.%20Bargman%20.pdf" },
        { title: "Measures to Delay Progression of CKD", author: "Dr. Adeera Levin", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Levin%20Measures%20to%20delay%20progression%20Kuwait%202017.pdf" },
        { title: "Hypertension and CKD", author: "Prof. Riyad Said", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Prof.%20Riyad%20Said%20Hypertension%20and%20CKD%20.pdf" },
        { title: "Membranous Nephropathy", author: "Dr. Shabbir Moochhala", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/2017-01%20Membranous%20talk%20pres%20Dr%20Shabbir%20Moochhala.pdf" },
        { title: "Anaemia in CKD", author: "Dr. David Goldsmith", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Anaemia%20in%20CKD%20%20%20Dr.%20David%20Goldsmith.pdf" },
        { title: "Screening for CKD", author: "Dr. Adeera Levin", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr.%20Adeera%20Levin%20%20Kuwait%202017%20Screening%20for%20CKD.pdf" },
        { title: "Bone Disease in CKD", author: "Dr. Jhonn Cunningham", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr.%20Jhonn%20cunningham%20-Bone-Kuwait-2017.pdf" },
        { title: "Vitamin D in CKD", author: "Dr. Magdy Elsharkawy", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Dr.%20Magdy%20%20Elsharkawy%20VitD%20%20K222%20final.pdf" },
        { title: "FSGS", author: "Kuwait 2017", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/FSGS_Kuwait_03Jan2017.pdf" },
        { title: "GCC DOPPS Data", author: "Dr. Saeed M.G Al-Ghamdi", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/GCC_DOPPS_Dr.%20Saeed%20M.G%20Al-Ghamdi_Kuwait_Jan_2017.final.pdf" },
      ] as EducationResource[],
    },
    dialysis: {
      title: "Medical Education — Dialysis",
      description: "Conference presentations on hemodialysis, peritoneal dialysis, and dialysis adequacy.",
      resources: [
        { title: "Home Hemodialysis", author: "Dr. Reem Ali Asad", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Home-Hemodialysis.pdf" },
        { title: "Advances in Hemodialysis Therapy & Technology", author: "Hesham Elsayed", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Advances-in-Hemodialysis-Therapy-and-Technology.pdf" },
        { title: "RRT in AKI: When, How Much, and Which Modality", author: "Prof. Basset El Essawy", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/RRT-in-AKI-when-how-much-and-which-modality.pdf" },
        { title: "Advances in the Management of Hyperkalemia", author: "Dr. Hamad Bahbahani", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Advances-in-the-Management-of-HYPERKALEMIA.pdf" },
        { title: "Bone Disease in CKD Patients: An Update", author: "Tarek ElBaz", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Bone-Disease-in-CKD-Patients-an-Update.pdf" },
        { title: "Advancing Patient Care: Managing Parathyroid Health", author: "Heba Al Rajab", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Advancing-Patient-Care-in-Nephrology-a-New-Approach-to-Managing-Parathyroid-Health.pdf" },
        { title: "Peritoneal Dialysis: Diabetes in Focus", author: "Ali K. Abu-Alfa", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Peritoneal-Dialysis-Diabetes-in-Focus.pdf" },
        { title: "CKD-Associated Pruritus", author: "Dr. Mohammad Almomen", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Scratching-the-Surface-of-CKD-Associated-Pruritus.pdf" },
        { title: "Preservation of Peritoneal Membrane Structure & Function", author: "Dina Abdellatif", event: "GCC 2025", year: "2025", pdfUrl: "https://asnrt.org/storage/education/doctors/dialysis/Preservation-of-Peritoneal-Membrane-Structure-and-Function.pdf" },
        { title: "Calcimimetics in CKD-MBD", author: "Amgen", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/Amgen%20Calcimimetics%20Kuwait%20Jan%202017.pdf" },
        { title: "HCV in Dialysis Patients", author: "Prof. Dr. Mai", event: "Kuwait 2017", year: "2017", pdfUrl: "https://asnrt.org/storage/education/pdfs/prof%20Dr%20Mai%20%20HCV%20Kwait%202017%20final.pdf" },
      ] as EducationResource[],
    },
    transplantation: {
      title: "Medical Education — Transplantation",
      description: "Presentations on transplant immunology, rejection, donor management, and post-transplant care.",
      resources: [
        { title: "Post-Transplant Complications: Malignancies", author: "Dr. Mohamed Abdulmoneem", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Post-transplant-complications-malignancies.pdf" },
        { title: "Post-Transplant Complications: UTI Prophylaxis", author: "Dr. Mohamed Megahed", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Post-transplant-complications-UTI-prophylaxis.pdf" },
        { title: "Pre-Transplant Categorization of Immunological Risk", author: "Gamal Saadi", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Pre-Transplant-Categorization-of-Immunological-Risk.pdf" },
        { title: "Maximizing the Donor Pool", author: "Dr. Peter Dupont", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Maximizing-the-donor-pool.pdf" },
        { title: "Donor Specific Antibodies", author: "Edward Cole", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Donor-Specific-Antibodies.pdf" },
        { title: "Management of Post-Transplant GN Recurrence", author: "Robert Najem", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Management-of-Post-Transplant-GN-Recurrence.pdf" },
        { title: "4th GCC Organ Transplantation & Nephrology Congress", author: "Dr. Colin Forman", event: "GCC 2025", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/4th-GCC-Organ-Transplantation-Nephrology-Congress.pdf" },
        { title: "Update in Desensitisation Strategies", author: "Dr. Peter Dupont", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Update-in-desensitisation-strategies.pdf" },
        { title: "Value of Electron Microscope in Renal Transplant Pathology", author: "Ahmed Abdelfattah Denewar", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Value-of-Electron-Microscope-in-renal-transplant-pathology.pdf" },
        { title: "BK Virus in Renal Transplantation: Consensus Recommendations", author: "Edward H Cole", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/BK-Virus-in-Renal-Transplantation.pdf" },
        { title: "Antibody-Mediated Rejection: Present and Future", author: "Dr. Mohamed Alseiari", event: "ASNRT Congress", pdfUrl: "https://asnrt.org/storage/education/doctors/transplantation/Antibody-Mediated-Rejection.pdf" },
      ] as EducationResource[],
    },
  },
} as const;
