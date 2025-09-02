import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { AboutStats } from "@/components/AboutStats";
import { CredoList } from "@/components/CredoList";
import { ClientLogoWall } from "@/components/ClientLogoWall";
import { SponsorCards } from "@/components/SponsorCards";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ServicesGrid />
        <ServiceHighlights />
        <AboutStats />
        <CredoList />
        <ClientLogoWall />
        <SponsorCards />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}