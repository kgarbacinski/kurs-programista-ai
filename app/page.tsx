import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import VSCodeApproach from '@/components/VSCodeApproach';
import PresentersSection from '@/components/PresentersSection';
import ProgramModules from '@/components/ProgramModules';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import HowItWorks from '@/components/HowItWorks';
import CertificateSection from '@/components/CertificateSection';
import FAQSection from '@/components/FAQSection';
import PurchaseSection from '@/components/PurchaseSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <VSCodeApproach />
        <PresentersSection />
        <ProgramModules />
        <BeforeAfterSection />
        <HowItWorks />
        <CertificateSection />
        <FAQSection />
        <PurchaseSection />
      </main>
      <Footer />
    </>
  );
}
