import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CommunitySection from '../components/CommunitySection';
import InfoSection from '../components/InfoSection';
import ReasonsSection from '../components/ReasonsSection';
import RatingSection from '../components/RatingSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <CommunitySection />
        <InfoSection />
        <ReasonsSection />
        <RatingSection />
      </main>
      <Footer />
    </div>
  );
}