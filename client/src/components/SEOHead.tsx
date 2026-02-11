import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_NAME = "ASNRT - Arab Society of Nephrology & Renal Transplantation";
const BASE_URL = "https://asnrt.org";
const DEFAULT_OG_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030645861/jbSXpjycLkXcudzS.png";

export default function SEOHead({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SEOHeadProps) {
  const fullTitle = title === "Home" ? SITE_NAME : `${title} | ASNRT`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
