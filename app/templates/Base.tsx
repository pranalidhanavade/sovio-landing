import ServicesSection from '@/sections/ServiceHighlightsSection';
import FeaturesSection from '@/sections/FeaturesSection';
import CredentialInfoSection from '@/sections/CredentialInfoSection';
import FrequentlyAskedQueSection from '@/sections/FrequentlyAskedQueSection';
import CtaSection from '@/sections/CtaSection';
import NewsLetterSection from '@/sections/NewsLetterSection';
import Footer from '@/sections/Footer';
import HeroSection from '@/sections/HeroSection';
import Navbar from '@/sections/Navbar';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <FeaturesSection />
    <CredentialInfoSection />
    <FrequentlyAskedQueSection />
    <CtaSection />
    <NewsLetterSection />
    <Footer />
  </div>
);

export { Base };
