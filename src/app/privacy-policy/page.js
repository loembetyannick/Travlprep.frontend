import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Outmade Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Travlprep mobile application and web services ("App").
              </p>
              <p className="text-gray-700 mb-4">
                Travlprep is a collaborative travel planning platform that helps you organize trips, share itineraries with friends and family, manage packing lists, store travel photos, and keep all your travel information in one organized place.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trip Collaboration</h3>
              <p className="text-gray-700 mb-4">
                When you share trips with others, we share the relevant trip data (itineraries, photos, notes, etc.) with the people you invite. Shared users can view and edit trip content based on the permissions you grant.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose information if required by law, court order, or to protect our rights, safety, or the rights and safety of others.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Your account remains active</li>
                <li>Necessary to provide our services</li>
                <li>Required to fulfill the purposes outlined in this Privacy Policy</li>
                <li>Required or permitted by law</li>
              </ul>
              <p className="text-gray-700 mb-4">
                When you delete your account, we permanently delete all your personal data, trips, photos, and associated content within 30 days, except where retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Access and Portability</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Request access to your personal information</li>
                <li>Export your data in a structured, machine-readable format</li>
                <li>Download all your trips, photos, and travel data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Control</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete specific trips, photos, or other content</li>
                <li>Restrict certain data processing activities</li>
                <li>Withdraw consent for location sharing or photo access</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Management</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Update your account information and preferences</li>
                <li>Manage trip sharing and collaboration settings</li>
                <li>Delete your account and all associated data permanently</li>
              </ul>

              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us at support@travlprep.com or use the data export and account deletion features within the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Subscription and Payment Information</h2>
              <p className="text-gray-700 mb-4">
                We use RevenueCat to manage subscription purchases and premium features. Payment processing is handled by Apple App Store and Google Play Store according to their respective privacy policies. We do not directly store credit card or payment information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 mb-4">
                Your continued use of the App after such modifications constitutes your acknowledgment and acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, our privacy practices, or wish to exercise your data rights, please contact us:
              </p>
              <div className="text-gray-700">
                <p className="mb-2"><strong>Outmade Ltd</strong></p>
                <p className="mb-2">Email: <a href="mailto:support@travlprep.com" className="text-blue-600 hover:text-blue-800">support@travlprep.com</a></p>
                <p className="mb-2">App: Use the "Account" section for data export and deletion</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 