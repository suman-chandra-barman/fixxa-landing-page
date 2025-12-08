"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#1F151B] via-[#AD4D68] to-[#222545] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-200">
            Last updated: December 8, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              At FIXXA, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our services. Please read this policy
              carefully to understand our practices regarding your personal
              data.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">1.</span>
              Information We Collect
            </h2>
            <div className="pl-8 space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Personal Information
                </h3>
                <p>
                  We may collect personal information that you provide to us,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Name and contact information (email address, phone number)
                  </li>
                  <li>Account credentials (username and password)</li>
                  <li>Payment and billing information</li>
                  <li>Professional information (business name, tax details)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Usage Information
                </h3>
                <p>
                  We automatically collect certain information about your device
                  and how you interact with our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>
                    Location information (approximate location based on IP
                    address)
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">2.</span>
              How We Use Your Information
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and manage your account</li>
                <li>
                  Send you technical notices, updates, and support messages
                </li>
                <li>
                  Respond to your comments, questions, and customer service
                  requests
                </li>
                <li>
                  Communicate with you about products, services, and events
                </li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>
                  Detect, prevent, and address technical issues and security
                  threats
                </li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">3.</span>
              How We Share Your Information
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  who perform services on our behalf (payment processing, data
                  analysis, email delivery)
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and safety
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly agree
                  to share your information
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">4.</span>
              Data Security
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to protect
                your personal information, we cannot guarantee its absolute
                security.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">5.</span>
              Your Data Rights
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  structured, machine-readable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Object:</strong> Object to processing of your personal
                  information
                </li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at support@fixxa.ai.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">6.</span>
              Cookies and Tracking Technologies
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to track
                activity on our service and store certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
              <p>Types of cookies we use:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the service
                  to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  users interact with our service
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your preferences
                  and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant
                  advertisements
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">7.</span>
              Data Retention
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                Privacy Policy. We will also retain and use your information to
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">8.</span>
              International Data Transfers
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                Your information may be transferred to and maintained on
                computers located outside of your jurisdiction where data
                protection laws may differ. We ensure appropriate safeguards are
                in place to protect your information in accordance with this
                Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">9.</span>
              Children&lsquo;s Privacy
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you become aware that a child has provided us with
                personal information, please contact us, and we will take steps
                to delete such information.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">10.</span>
              Changes to This Privacy Policy
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </section>
          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">11.</span>
              Contact Us
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium">
                  Email:{" "}
                  <a
                    href="mailto:support@fixxa.ai"
                    className="text-[#AD4D68] hover:underline"
                  >
                    support@fixxa.ai
                  </a>
                </p>
                <p className="font-medium mt-2">
                  Phone:{" "}
                  <a
                    href="tel:+447943568038"
                    className="text-[#AD4D68] hover:underline"
                  >
                    +44 7943 568038
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#AD4D68] hover:text-[#8b3d54] font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
