import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CommunitySection from '../components/CommunitySection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <CommunitySection />
      </main>
    </div>
  );
}