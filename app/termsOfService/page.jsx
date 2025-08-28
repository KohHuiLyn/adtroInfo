"use client"

import Navbar from "@/components/navbar"

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <div className="section">
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
          <div className="text-[#1f1d42] text-left">
            <h1 className="section-heading mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-600 italic mb-6">
              <strong>Last Updated: 22nd July 2025</strong>
            </p>

            <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
              <p>
                Welcome to Adtro Media (the "Platform"). The Platform is operated by Adtro Media Pte. Ltd. ("Adtro," "we," "us," or "our"). These Terms of Service (the "Terms") govern your access to and use of our websites, mobile applications, and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using the Services, you agree to these Terms. If you do not agree, please do not use the Services.
              </p>

              <h2 className="font-bold mt-8">1. Your Relationship with Us</h2>
              <p>
                These Terms form a legally binding agreement between you and Adtro Media Pte. Ltd. If you are using the Services on behalf of a business or other legal entity, you represent and warrant that you have authority to bind that entity to these Terms.
              </p>

              <h2 className="font-bold mt-8">2. Access and Use of Services</h2>
              <p>You may use the Services for personal, commercial, or business purposes, subject to these Terms and all applicable laws. You agree not to:</p>
              <ul className="list-disc list-inside">
                <li>Use the Services if you are under 18 without parental or legal guardian consent.</li>
                <li>Post or promote illegal, deceptive, or harmful content.</li>
                <li>Reverse engineer, decompile, or tamper with any part of the Platform.</li>
                <li>Circumvent, disable, or interfere with security or authentication measures.</li>
                <li>Create accounts using false or misleading information.</li>
              </ul>

              <h2 className="font-bold mt-8">3. Account Registration and Responsibilities</h2>
              <p>Certain features require registration. By creating an account, you agree to:</p>
              <ul className="list-disc list-inside">
                <li>Provide accurate, up-to-date information.</li>
                <li>Maintain the confidentiality of your password.</li>
                <li>Promptly notify us of unauthorized use of your account.</li>
              </ul>
              <p>You are responsible for all activity under your account. We may suspend or terminate your account for violating these Terms or engaging in fraudulent or harmful conduct.</p>

              <h2 className="font-bold mt-8">4. Multi-Streaming and Platform Integrations</h2>
              <ul className="list-disc list-inside">
                <li>Adtro enables sellers and brands to livestream to multiple platforms (e.g., TikTok, Facebook, YouTube, Shopee, Instagram) via our dashboard.</li>
                <li>Use of third-party platforms is subject to their respective terms and policies.</li>
                <li>
                  By using YouTube through our Services, you also agree to be bound by the  {" "}
                  <a 
                    href="https://www.youtube.com/t/terms" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[var(--accent-colour)] underline"
                  >
                    YouTube Terms of Service
                  </a>.
                </li>
                <li>Adtro is not responsible for content moderation, stream takedowns, or platform-specific issues.</li>
                <li>Users must ensure content complies with each platform’s community guidelines and advertising rules.</li>
              </ul>

              <h2 className="font-bold mt-8">5. Commerce & CRM Tools</h2>
              <p>Adtro offers CRM, booking, product inventory, campaign tracking, and WhatsApp checkout tools. You are responsible for:</p>
              <ul className="list-disc list-inside">
                <li>Ensuring accuracy of customer, product, and pricing data.</li>
                <li>Handling customer disputes, refunds, and compliance with consumer protection laws.</li>
                <li>Proper use of WhatsApp for business messaging in accordance with Meta’s WhatsApp Business Policy.</li>
              </ul>

              <h2 className="font-bold mt-8">6. Partnerships and Campaign Support</h2>
              <ul className="list-disc list-inside">
                <li>Adtro Media may collaborate with third-party partners, including agencies such as AIKO, to offer integrated campaign services and influencer support.</li>
                <li>Brands may be introduced to or onboarded through a partner such as AIKO for additional marketing or talent sourcing services.</li>
                <li>Adtro provides the technology infrastructure (e.g., livestreaming, CRM, analytics), while AIKO or other partners may manage campaign execution, talent coordination, or creative services.</li>
                <li>Any service offered by a partner is subject to that partner’s separate terms and policies. Adtro is not responsible for third-party deliverables unless otherwise specified in writing.</li>
              </ul>

              <h2 className="font-bold mt-8">7. User-Generated Content</h2>
              <p>You are solely responsible for all content you submit, including videos, comments, overlays, and product data.</p>
              <p>By submitting content, you grant Adtro a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute it for purposes related to service delivery, marketing, and platform improvement.</p>
              <p>You agree not to submit content that is:</p>
              <ul className="list-disc list-inside">
                <li>False, misleading, or deceptive</li>
                <li>Defamatory, obscene, or abusive</li>
                <li>Infringing on intellectual property or personal rights of others</li>
              </ul>
              <p>We may remove or disable content that violates these Terms or applicable laws.</p>

              <h2 className="font-bold mt-8">8. Data Protection and Privacy</h2>
              <p>We collect and use personal data in accordance with Singapore’s Personal Data Protection Act (PDPA) and our Privacy Policy.</p>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside">
                <li>Access, correct, or request deletion of your personal data</li>
                <li>Withdraw consent to data usage at any time</li>
              </ul>
              <p>Data may be shared with third-party services only as required to deliver the Services.</p>

              <h2 className="font-bold mt-8">9. Prohibited Conduct</h2>
              <ul className="list-disc list-inside">
                <li>Use the Services for unlawful, fraudulent, or harmful activities</li>
                <li>Tamper with platform infrastructure or disrupt other users</li>
                <li>Misuse platform messaging or marketing features</li>
                <li>Infringe on Adtro’s or others’ intellectual property</li>
                <li>Impersonate individuals or misrepresent your affiliation</li>
              </ul>
              <p>We may investigate and take action against misuse, including suspension or legal remedies.</p>

              <h2 className="font-bold mt-8">10. Intellectual Property</h2>
              <p>All materials on the Platform — including trademarks, software, UI elements, text, video templates, and documentation — are owned or licensed by Adtro Media.</p>
              <p>You may not copy, distribute, reverse engineer, or derive works without written permission, except as expressly permitted.</p>

              <h2 className="font-bold mt-8">11. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law:</p>
              <ul className="list-disc list-inside">
                <li>The Services are provided “as is” without warranties of any kind.</li>
                <li>We are not liable for indirect, incidental, or consequential damages (e.g., lost sales, business disruption).</li>
                <li>Adtro disclaims liability for issues caused by user error, unauthorized access, or third-party platforms.</li>
                <li>Total liability is limited to the amount you paid to Adtro for the affected service, if any.</li>
              </ul>

              <h2 className="font-bold mt-8">12. Termination</h2>
              <p>We may suspend or terminate your account if you violate these Terms or misuse the Services.</p>
              <p>Upon termination:</p>
              <ul className="list-disc list-inside">
                <li>Access to your account and data may be revoked.</li>
                <li>Content you submitted may be retained for legal or operational purposes.</li>
                <li>Refunds are handled in accordance with our Cancellation Policy (if applicable).</li>
              </ul>

              <h2 className="font-bold mt-8">13. Dispute Resolution</h2>
              <p>These Terms are governed by the laws of Singapore.</p>
              <p>Any dispute will be resolved by binding arbitration administered by the Singapore International Arbitration Centre (SIAC). The arbitration will be held in English in Singapore.</p>

              <h2 className="font-bold mt-8">14. Changes to the Terms</h2>
              <p>We may revise these Terms at any time. If changes are material, we will notify you at least 7 days in advance via email or an in-platform notice.</p>
              <p>By continuing to use the Services after the effective date, you agree to the revised Terms.</p>

              <h2 className="font-bold mt-8">15. Contact Us</h2>
              <p>For questions or concerns about these Terms, please contact:</p>
              <p className="mt-2">Adtro Media Pte. Ltd.</p>
              <p>Email: <a className="text-[var(--accent-colour)] underline" href="mailto:business@adtromedia.com">business@adtromedia.com</a></p>
              <p>Address: 51 Goldhill Plaza, #07-07, Singapore 308900</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
