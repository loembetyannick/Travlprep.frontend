import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CommunitySection from '../components/CommunitySection';
import InfoSection from '../components/InfoSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <CommunitySection />
        <InfoSection />
      </main>
    </div>
  );
}