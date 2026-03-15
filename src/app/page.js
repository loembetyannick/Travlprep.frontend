'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ReasonsSection from '../components/ReasonsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RatingSection from '../components/RatingSection';
import Footer from '../components/Footer';
import { API_ENDPOINTS } from '../config/api';

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Check if the modal has been shown before
    const hasSeenModal = localStorage.getItem('lifemade-email-modal-seen');
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
      localStorage.setItem('lifemade-email-modal-seen', 'true');
    }, 300);
  };

  const handleGetFreeTrial = async (e) => {
    e.preventDefault();
    if (!email.trim()) return; // Don't proceed if email is empty
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // First, call the API to subscribe the email
      const response = await fetch(API_ENDPOINTS.EMAIL_SUBSCRIPTION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim()
        }),
      });

      if (response.ok) {
        setSubmitMessage('Successfully subscribed! Redirecting to App Store...');
        console.log('Email subscribed successfully!');
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        setSubmitMessage(`Subscription failed: ${errorData.error || 'Unknown error'}. Redirecting to App Store...`);
        console.error('Failed to subscribe email:', errorData.error);
      }
      
      // Short delay to show the message before redirecting
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    } catch (error) {
      console.error('Error subscribing email:', error);
      setSubmitMessage('Network error. Redirecting to App Store...');
      await new Promise(resolve => setTimeout(resolve, 1500));
    } finally {
      // Redirect to App Store regardless of subscription result
      window.open('https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133', '_blank');
      
      // Close modal and remember it was seen
      setIsSubmitting(false);
      handleCloseModal();
    }
  };

  return (
    <div className="overflow-x-hidden" style={{ backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #FFFFF0, #F0F8FF, #FFFFF0)' }}>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ReasonsSection />
      <TestimonialsSection />
      <RatingSection />
      <Footer />

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className={`bg-gray-100 rounded-3xl p-6 max-w-sm w-full mx-4 relative transform transition-all duration-300 ease-out ${
              modalVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex justify-center mb-4">
              <Image
                src="/logo-title.png"
                alt="Lifemade"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
            </div>

            <div className="flex justify-center mb-4">
              <Image
                src="/main-img.png"
                alt="Lifemade App"
                width={300}
                height={200}
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: '200px' }}
              />
            </div>

            <div className="text-center">
              <h2 className="text-xl font-extrabold text-black mb-4">
                CLAIM YOUR 3-DAY<br />FREE TRIAL
              </h2>

              <form onSubmit={handleGetFreeTrial} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-6 py-4 bg-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-xs text-gray-500 px-4">
                  By signing up, you agree to our{' '}
                  <a href="/terms-and-conditions" className="underline hover:text-gray-700">Terms of Service</a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="underline hover:text-gray-700">Privacy Policy</a>.
                  No commitment. Cancel anytime.
                </p>

                {submitMessage && (
                  <p className="text-sm text-center text-gray-600 mb-2">
                    {submitMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!email.trim() || isSubmitting}
                  className={`w-full text-lg py-4 px-6 rounded-full font-bold transition-colors ${
                    email.trim() && !isSubmitting
                      ? 'bg-black text-white hover:bg-gray-900 cursor-pointer'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Claim My Free Trial'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}