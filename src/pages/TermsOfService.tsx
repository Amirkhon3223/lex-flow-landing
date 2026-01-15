import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | LexFlow';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-8 lg:px-12 py-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-blue-100 text-lg">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="px-8 lg:px-12 py-12 space-y-10">
            {/* Introduction */}
            <section>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700">
                  By accessing or using LexFlow, you agree to be bound by these Terms of Service.
                </p>
              </div>
            </section>

            {/* 1. Description of Service */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Description of Service
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                LexFlow is a legal practice management platform that provides tools for managing clients, cases, documents, billing, and analytics.
              </p>
            </section>

            {/* 2. User Accounts */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. User Accounts
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>You are responsible for maintaining account confidentiality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>You must provide accurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>You are responsible for all activity under your account</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Subscriptions & Payments */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Subscriptions & Payments
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Payments are processed securely via Stripe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Subscriptions may be billed monthly or yearly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Prices may change with prior notice</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Refund Policy:</h3>
                  <p className="text-gray-700">
                    Unless required by law, payments are non-refundable.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Acceptable Use */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Acceptable Use
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                You agree <strong>not to</strong>:
              </p>
              <div className="bg-red-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Violate any laws</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Upload malicious content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Attempt unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Abuse platform resources</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Intellectual Property */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Intellectual Property
              </h2>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-700 text-lg">
                  All content, software, and trademarks are the exclusive property of LexFlow.
                </p>
              </div>
            </section>

            {/* 6. Termination */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Termination
              </h2>
              <p className="text-gray-700 text-lg">
                We may suspend or terminate accounts for violations of these Terms.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Limitation of Liability
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg">
                  LexFlow is provided <strong>"as is"</strong>. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </div>
            </section>

            {/* 8. Governing Law */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Governing Law
              </h2>
              <p className="text-gray-700 text-lg">
                These Terms are governed by the laws applicable in your jurisdiction unless otherwise required by law.
              </p>
            </section>

            {/* 9. Contact Information */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Contact Information
              </h2>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8">
                <p className="text-xl font-semibold mb-6">Get in touch with us:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6" />
                    <a href="mailto:lexflow.team@gmail.com" className="text-lg hover:underline">
                      lexflow.team@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    <a href="tel:+12672283117" className="text-lg hover:underline">
                      +1 267 228 3117
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
