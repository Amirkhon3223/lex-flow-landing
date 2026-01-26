import { ArrowLeft, Mail, Phone, Brain, Server, Shield, AlertTriangle } from "lucide-react";
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
              Last updated: January 26, 2026
            </p>
          </div>

          {/* Content */}
          <div className="px-8 lg:px-12 py-12 space-y-10">
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 leading-relaxed">
                LexFlow ("LexFlow", "we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our legal practice management platform.
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
                      <span>Name, email address, phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Law firm information (name, country, city)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Account and workspace information</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Professional Data
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Client information you enter into the system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Case details and documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Calendar events and meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Financial and billing information</span>
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
                      <span>IP address, browser type, device information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Time zone, language preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Service usage analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. AI Processing - IMPORTANT */}
            <section className="border-t border-gray-200 pt-10">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Brain className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      2. AI and Automated Processing
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                      LexFlow uses artificial intelligence to enhance your experience:
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">AI Features:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span>Document analysis and summarization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span>Legal assistant chat</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span>Document version comparison</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span>Intelligent recommendations</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">AI Provider:</h4>
                        <p className="text-gray-700 mb-2">
                          We use <strong>Groq API</strong> (with Llama models) to process AI requests.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Your data is NOT used to train AI models</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Data is transmitted via encrypted connection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>AI provider does not store your data after processing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-amber-100 rounded-lg p-4">
                      <p className="text-amber-800 font-medium">
                        <AlertTriangle className="w-5 h-5 inline mr-2" />
                        You can use LexFlow without AI features. AI is optional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Data Storage Location */}
            <section className="border-t border-gray-200 pt-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    3. Data Storage Location
                  </h2>
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Server Location:</h4>
                        <p className="text-gray-700 text-lg">
                          <strong>Hetzner Data Center</strong><br />
                          Helsinki, Finland 🇫🇮<br />
                          European Union
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">This means:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>GDPR compliant jurisdiction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>EU data protection laws apply</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Data does not leave EU</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Attorney-Client Privilege */}
            <section className="border-t border-gray-200 pt-10">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      4. Attorney-Client Privilege Protection
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                      We understand the importance of attorney-client privilege:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span>All client data is isolated by workspace (multi-tenant architecture)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span>We do NOT access your client data for any purpose except technical support (with your explicit permission)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span>Documents and case information are encrypted at rest</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span>You retain full ownership of all data you enter</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span>We will never disclose your data to third parties except as required by law</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Third-Party Services */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Third-Party Services
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                We use trusted third-party services:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Stripe</h3>
                  <p className="text-gray-600 text-sm">Payment processing</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Groq</h3>
                  <p className="text-gray-600 text-sm">AI processing (Llama models)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Resend</h3>
                  <p className="text-gray-600 text-sm">Email notifications</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Hetzner</h3>
                  <p className="text-gray-600 text-sm">Hosting (Finland, EU)</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                These services process only the data necessary for their specific function.
              </p>
            </section>

            {/* 6. Data Security */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Data Security
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We implement industry-standard security measures:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🔒</span>
                  <span className="text-gray-700">HTTPS/TLS encryption in transit</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🔐</span>
                  <span className="text-gray-700">bcrypt password hashing</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">📱</span>
                  <span className="text-gray-700">Two-factor authentication (2FA)</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🛡️</span>
                  <span className="text-gray-700">CSRF protection</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">🚫</span>
                  <span className="text-gray-700">Rate limiting</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <span className="text-blue-600 font-bold mt-1">💾</span>
                  <span className="text-gray-700">Regular backups</span>
                </div>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Data Retention
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                We retain your data:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Account data:</strong> While your account is active + 30 days after deletion request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Documents:</strong> Until you delete them or close your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Payment records:</strong> 7 years (legal requirement)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>AI chat history:</strong> Until you delete it or close your account</span>
                </li>
              </ul>
            </section>

            {/* 8. Your Rights (GDPR) */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Your Rights (GDPR)
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                You have the right to:
              </p>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Access</strong> - Request a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Rectification</strong> - Correct inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Erasure</strong> - Request deletion of your data ("right to be forgotten")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Portability</strong> - Export your data in a machine-readable format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Restriction</strong> - Limit how we process your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Objection</strong> - Object to processing of your data</span>
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

            {/* 9. Data Breach Notification */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Data Breach Notification
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg mb-4">
                  In the event of a data breach that affects your personal data:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>We will notify affected users within 72 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>We will notify relevant supervisory authorities as required by GDPR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>We will provide information about the nature of the breach and steps taken</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 10. Cookies */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. Cookies
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
                    <span>Provide CSRF protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Cannot be disabled without affecting functionality</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We do NOT use tracking or advertising cookies.
                </p>
              </div>
            </section>

            {/* 11. Changes to This Policy */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-700 text-lg">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. For significant changes, we will notify you via email.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                12. Contact Us
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
                <p className="mt-6 text-blue-100">
                  Data Controller: LexFlow Team
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
