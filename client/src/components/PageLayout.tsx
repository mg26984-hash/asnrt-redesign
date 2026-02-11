import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import BackToTop from "./BackToTop";


interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  /** If true, no breadcrumb bar is shown (for homepage) */
  noBreadcrumb?: boolean;
  /** Optional page header with title and subtitle */
  pageTitle?: string;
  pageSubtitle?: string;
}

export default function PageLayout({
  children,
  breadcrumbs,
  noBreadcrumb,
  pageTitle,
  pageSubtitle,
}: PageLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {!noBreadcrumb && breadcrumbs && (
        <div className="bg-stone-50 border-b border-border">
          <div className="container">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      )}

      {pageTitle && (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container py-10 md:py-14">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">{pageTitle}</h1>
            {pageSubtitle && (
              <p className="text-white/60 text-lg max-w-2xl">{pageSubtitle}</p>
            )}
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      <Footer />
      <BackToTop />
    </div>
  );
}
