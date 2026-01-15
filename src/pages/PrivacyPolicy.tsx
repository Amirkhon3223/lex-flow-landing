import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | LexFlow';
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
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-lg">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="px-8 lg:px-12 py-12 space-y-10">
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 leading-relaxed">
                LexFlow ("LexFlow", "we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700 font-medium mb-3">If you have any questions, contact us at:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:lexflow.team@gmail.com" className="hover:underline">
                      lexflow.team@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+12672283117" className="hover:underline">
                      +1 267 228 3117
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 1. Information We Collect */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                We may collect the following information:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Account and workspace information</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Technical Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>IP address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Browser type and version</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Device information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Time zone and language</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Cookies & Similar Technologies
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Authentication cookies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Security cookies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Performance cookies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                We use your information to:
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Provide and maintain LexFlow services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Authenticate users and secure accounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Process payments and subscriptions (via Stripe)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Improve platform performance and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Communicate with you regarding support or updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Cookies */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Cookies
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-gray-700 mb-4 text-lg">
                  LexFlow uses essential cookies required for authentication and security.
                </p>
                <p className="text-gray-700 font-medium mb-3">These cookies:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Are required for login and session management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Cannot be disabled without affecting functionality</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Third-Party Services */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Third-Party Services
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                We use trusted third-party services:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Stripe</h3>
                  <p className="text-gray-600 text-sm">Payment processing</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Cloudflare</h3>
                  <p className="text-gray-600 text-sm">Security, CDN, DDoS protection</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
                  <p className="text-gray-600 text-sm">Hosting, storage</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                These services may process limited data necessary for their function.
              </p>
            </section>

            {/* 5. Data Retention */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Data Retention
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                We retain your personal data:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>While your account is active</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>As required by law</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Until you request deletion</span>
                </li>
              </ul>
            </section>

            {/* 6. Your Rights */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Your Rights
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                You have the right to:
              </p>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Correct inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Request deletion of your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Withdraw consent at any time</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6 text-lg">
                To exercise your rights, contact{" "}
                <a href="mailto:lexflow.team@gmail.com" className="text-blue-600 hover:underline font-medium">
                  lexflow.team@gmail.com
                </a>
              </p>
            </section>

            {/* 7. Data Security */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Data Security
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We implement industry-standard security measures:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🔒</span>
                  <span className="text-gray-700">HTTPS encryption</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🍪</span>
                  <span className="text-gray-700">Secure cookies</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🔑</span>
                  <span className="text-gray-700">Access controls</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">📊</span>
                  <span className="text-gray-700">Infrastructure security monitoring</span>
                </div>
              </div>
            </section>

            {/* 8. Changes to This Policy */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-700 text-lg">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Contact Us
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
