'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CommunitySection from '../components/CommunitySection';
import InfoSection from '../components/InfoSection';
import ReasonsSection from '../components/ReasonsSection';
import RatingSection from '../components/RatingSection';
import Footer from '../components/Footer';

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if the modal has been shown before
    const hasSeenModal = localStorage.getItem('travlprep-email-modal-seen');
    if (!hasSeenModal) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowEmailModal(true);
        // Add a small delay to trigger the animation
        setTimeout(() => setModalVisible(true), 50);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    // Wait for animation to finish before hiding modal
    setTimeout(() => {
      setShowEmailModal(false);
      // Remember that user has seen the modal
      localStorage.setItem('travlprep-email-modal-seen', 'true');
    }, 300);
  };

  const handleGetFreeTrial = (e) => {
    e.preventDefault();
    if (!email.trim()) return; // Don't proceed if email is empty
    
    // Redirect to App Store
    window.open('https://apps.apple.com/gb/app/travlprep-travel-planner/id6670488133', '_blank');
    
    // Close modal and remember it was seen
    handleCloseModal();
  };

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

      {/* Email Modal */}
      {showEmailModal && (
        <div 
          className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-out`}
        >
          <div 
            className={`bg-white rounded-2xl max-w-md w-full mx-4 relative overflow-hidden shadow-2xl transform transition-all duration-300 ease-out ${
              modalVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8 text-center">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/logo-title.png"
                  alt="Travlprep"
                  width={180}
                  height={40}
                  className="h-8 w-auto mx-auto"
                />
              </div>

              {/* Main Image */}
              <div className="mb-6">
                <Image
                  src="/main-img.png"
                  alt="Travlprep App"
                  width={300}
                  height={200}
                  className="w-full max-w-xs mx-auto rounded-lg"
                />
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                CLAIM YOUR 3-DAY
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                FREE TRIAL
              </h3>

              {/* Form */}
              <form onSubmit={handleGetFreeTrial} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                
                {/* Terms Text */}
                <p className="text-xs text-gray-500 mb-4">
                  By signing up, you agree to our{' '}
                  <a href="/terms-and-conditions" className="underline hover:text-gray-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="underline hover:text-gray-700">
                    Privacy Policy
                  </a>
                  . No commitment. Cancel anytime.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!email.trim()}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    email.trim() 
                      ? 'bg-black text-white hover:bg-gray-800 cursor-pointer' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Claim My Free Trial
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}