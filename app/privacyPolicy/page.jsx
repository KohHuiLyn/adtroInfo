"use client"

import Navbar from "@/components/navbar"

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <div className="section">
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
          <div className="text-[#1f1d42] text-left">
            <h1 className="section-heading mb-4">Privacy Policy for Adtro Media</h1>
            <p className="paragraph mb-4 text-sm text-gray-600 italic">
              <strong>Last updated: March 27, 2025</strong>
            </p>

            <p className="paragraph mb-6">
              This Privacy Policy describes our policies and procedures on the collection, use, storage, and disclosure
              of your information when you use the Adtro Media application and services. It also explains your privacy
              rights and how the law protects you. By using our service, you agree to the collection and use of
              information in accordance with this policy.
            </p>

            <hr className="my-8 border-t border-gray-200" />

            <div className="border-l-4 border-[var(--accent-colour)] pl-4 mb-10">
              <h2 className="section-heading mb-6">Definitions</h2>
              <ul className="list-disc list-inside mb-6 space-y-3 paragraph">
                <li>
                  <strong>Application</strong> refers to Adtro Media, the software provided by the Company.
                </li>
                <li>
                  <strong>Company</strong> ("we", "us", or "our") refers to Adtro Media, Singapore Management
                  University, 40 Stamford Rd, Level 3 & 4 SMU Connexion.
                </li>
                <li>
                  <strong>Personal Data</strong> means any information that relates to an identified or identifiable
                  individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Application.
                </li>
                <li>
                  <strong>Usage Data</strong> refers to data collected automatically, generated by the use of the
                  Service or from the Service infrastructure.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the Service such as a computer, smartphone,
                  or tablet.
                </li>
                <li>
                  <strong>Third-Party Social Media Service</strong> refers to services like Google, Facebook, and
                  Instagram that are integrated into our platform.
                </li>
              </ul>
            </div>

            <hr className="my-8 border-t border-gray-200" />

            <div className="bg-[var(--border-colour)] p-6 rounded-lg mb-10">
              <h2 className="section-heading mb-6">Types of Data Collected</h2>

              <h3 className="section-subheading mt-6 mb-3">Personal Data</h3>
              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <p className="paragraph mb-2">We may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-1 paragraph ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Profile picture</li>
                  <li>Social media account IDs</li>
                  <li>Location (if necessary for service delivery)</li>
                  <li>Phone number (if applicable)</li>
                </ul>
              </div>

              <h3 className="section-subheading mt-6 mb-3">Usage Data</h3>
              <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                <p className="paragraph mb-2">Automatically collected information may include:</p>
                <ul className="list-disc list-inside space-y-1 paragraph ml-4">
                  <li>Device IP address</li>
                  <li>Browser type and version</li>
                  <li>App usage patterns</li>
                  <li>Date and time of access</li>
                  <li>Diagnostic data</li>
                </ul>
              </div>

              <h3 className="section-subheading mt-6 mb-3">Information from Third-Party Services</h3>
              <p className="paragraph mb-4">
                We allow you to sign in or link your account using Google, Facebook, and Instagram. Depending on the
                permissions you grant, we may collect data including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="paragraph mb-2 font-semibold">Google Scopes:</p>
                  <ul className="list-disc list-inside space-y-1 paragraph ml-4">
                    <li>openid, profile, email: Access basic account information.</li>
                    <li>
                      https://www.googleapis.com/auth/userinfo.profile, userinfo.email: View personal info including
                      name and email.
                    </li>
                    <li>
                      https://www.googleapis.com/auth/youtube.readonly, youtube.force-ssl: Retrieve YouTube channel
                      stats and livestream metadata.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="paragraph mb-2 font-semibold">Facebook and Instagram Scopes:</p>
                  <ul className="list-disc list-inside space-y-1 paragraph ml-4">
                    <li>public_profile: Basic info such as name and profile picture.</li>
                    <li>
                      pages_show_list, pages_read_engagement, pages_read_user_content: Access your managed Pages and
                      their engagement data.
                    </li>
                    <li>
                      instagram_basic, business_management: Fetch your Instagram Business account info, including
                      livestream details and comments.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-8 border-t border-gray-200" />

            <div className="mb-10">
              <h2 className="section-heading mb-6">Use of Your Data</h2>
              <p className="paragraph mb-4">We may use your information to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Provide and maintain the Service",
                  "Manage and secure user accounts",
                  "Display social media stats and livestream tools",
                  "Analyze engagement and performance metrics",
                  "Contact you with updates and notifications",
                  "Improve the Application and develop new features",
                ].map((item, index) => (
                  <div key={index} className="bg-[var(--border-colour)] p-4 rounded-md flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-colour)] mr-3"></div>
                    <p className="paragraph m-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-8 border-t border-gray-200" />

            <div className="border-t-2 border-b-2 border-[var(--white-smoke)] py-8 mb-10">
              <h2 className="section-heading mb-6">Storage and Security</h2>
              <p className="paragraph mb-4">
                Access tokens, refresh tokens, and social media identifiers are securely stored and encrypted. We
                implement commercially acceptable means to protect your data but cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">Sharing of Data</h2>
              <p className="paragraph mb-4">We may share your data:</p>
              <ul className="list-disc list-inside space-y-2 paragraph ml-4">
                <li>With service providers who help operate the Service</li>
                <li>To comply with legal obligations</li>
                <li>During business transfers or partnerships</li>
                <li>With your consent</li>
              </ul>
            </div>

            <div className="bg-[var(--border-colour)] p-6 rounded-lg mb-10">
              <h2 className="section-heading mb-6">Retention of Data</h2>
              <p className="paragraph mb-4">
                We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as
                required by law. You may request deletion of your account and associated data.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">User Rights</h2>
              <p className="paragraph mb-4">You have the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Access and review your data",
                  "Request correction or deletion",
                  "Withdraw consent at any time",
                  "Unlink third-party services through native platform settings",
                ].map((item, index) => (
                  <div key={index} className="bg-[var(--border-colour)] p-4 rounded-md flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-colour)] mr-3"></div>
                    <p className="paragraph m-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-b-2 border-[var(--white-smoke)] py-8 mb-10">
              <h2 className="section-heading mb-6">Children's Privacy</h2>
              <p className="paragraph mb-4">
                Our Service is not intended for children under the age of 13. We do not knowingly collect data from
                minors. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">Links to Other Sites</h2>
              <p className="paragraph mb-4">
                Our application may contain links to third-party sites. We are not responsible for the privacy practices
                of these websites.
              </p>
            </div>

            <div className="bg-[var(--border-colour)] p-6 rounded-lg mb-10">
              <h2 className="section-heading mb-6">Changes to This Policy</h2>
              <p className="paragraph mb-4">
                We may update this Privacy Policy periodically. We will notify users via email or a prominent notice on
                our platform.
              </p>
            </div>

            <div className="bg-[var(--border-colour)] p-6 rounded-lg mb-10">
              <h2 className="section-heading mb-6">Contact Us</h2>
              <div className="bg-white p-6 rounded-md shadow-sm text-center">
                <p className="paragraph mb-2">If you have any questions, please contact us:</p>
                <p className="text-[var(--accent-colour)] font-semibold text-xl">adtromedia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

