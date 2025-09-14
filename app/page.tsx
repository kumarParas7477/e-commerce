
import HeroSection from '../components/hero-section';
import NavBar from '../components/nav-bar';
import ShopSection from '../components/shop-section';
import AboutSection from '../components/about-section';
import CollectionsSection from '../components/collections-section';
import SocialSection from '../components/social-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ShopSection />
      <AboutSection />
      <CollectionsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
