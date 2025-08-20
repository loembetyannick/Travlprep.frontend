import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
      </main>
    </div>
  );
}