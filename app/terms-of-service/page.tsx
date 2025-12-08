"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#1F151B] via-[#AD4D68] to-[#222545] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Terms of Service
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
              Welcome to FIXXA. These Terms of Service (&quot;Terms&quot;) govern your
              access to and use of our services, website, and applications. By
              using FIXXA, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">1.</span>
              Acceptance of Terms
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                By accessing or using FIXXA&apos;s services, you acknowledge that you
                have read, understood, and agree to be bound by these Terms and
                our Privacy Policy. If you do not agree to these Terms, please
                do not use our services.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">2.</span>
              Description of Service
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                FIXXA provides administrative management solutions for
                freelancers and independent professionals. Our services include
                but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated administrative task management</li>
                <li>Document organization and storage</li>
                <li>Invoice and payment tracking</li>
                <li>Client communication tools</li>
                <li>Time management and scheduling features</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">3.</span>
              User Accounts
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                To use certain features of FIXXA, you must create an account.
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your password and account</li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">4.</span>
              User Responsibilities
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the service for any illegal purposes or in violation of
                  any laws
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  service
                </li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Collect or harvest any information about other users</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">5.</span>
              Intellectual Property
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                All content, features, and functionality of FIXXA, including but
                not limited to text, graphics, logos, and software, are owned by
                FIXXA and are protected by international copyright, trademark,
                and other intellectual property laws.
              </p>
              <p>
                You retain ownership of any content you submit to FIXXA. By
                submitting content, you grant us a license to use, store, and
                process that content solely to provide our services to you.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">6.</span>
              Payment and Subscription
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                Certain features of FIXXA may require payment. By providing
                payment information, you represent that you are authorized to
                use the payment method.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Subscription fees are billed in advance on a recurring basis
                </li>
                <li>Refunds are handled on a case-by-case basis</li>
                <li>You may cancel your subscription at any time</li>
                <li>
                  We reserve the right to change pricing with 30 days notice
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">7.</span>
              Termination
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We may terminate or suspend your account and access to the
                service immediately, without prior notice or liability, for any
                reason, including breach of these Terms. Upon termination, your
                right to use the service will immediately cease.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">8.</span>
              Limitation of Liability
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                To the maximum extent permitted by law, FIXXA shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">9.</span>
              Changes to Terms
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of any material changes via email or through the
                service. Your continued use of FIXXA after such modifications
                constitutes your acceptance of the updated Terms.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-[#AD4D68] mr-3">10.</span>
              Contact Information
            </h2>
            <div className="pl-8 space-y-3 text-gray-700 leading-relaxed">
              <p>
                If you have any questions about these Terms, please contact us:
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
