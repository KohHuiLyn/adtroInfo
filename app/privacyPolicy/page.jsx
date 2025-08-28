"use client"

import Navbar from "@/components/navbar"

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <div className="section">
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
          <div className="text-[#1f1d42] text-left text-sm leading-relaxed">
            <h1 className="section-heading mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-600 italic mb-6"><strong>Last Updated: 22nd July 2025</strong></p>

            <p>
              Adtro Media Pte. Ltd. ("Adtro," "we," "our," or "us") is committed to protecting and respecting your privacy in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore. This Privacy Policy outlines:
            </p>
            <ul className="list-disc list-inside my-3">
              <li>The personal data we collect</li>
              <li>How we use, store, and share your data</li>
              <li>Your rights under PDPA and how to exercise them</li>
            </ul>
            <p>
              By using our website, applications, and services (collectively, the “Services”), including livestreaming integrations, talent campaigns, CRM tools, and product fulfillment, you consent to this Privacy Policy. If you do not agree, please discontinue use of the Platform and Services.
            </p>

            <h2 className="font-bold mt-6">1. Information We Collect</h2>

            <p className="mt-2 font-semibold">a. Information You Provide</p>
            <ul className="list-disc list-inside">
              <li>Name, email, phone number, address, and payment details</li>
              <li>Content you upload (e.g. images, videos, livestreams)</li>
              <li>Delivery recipient details (name, address, contact)</li>
            </ul>

            <p className="mt-2 font-semibold">b. Transaction Information</p>
            <ul className="list-disc list-inside">
              <li>Order history and payment records</li>
              <li>Processed securely through Stripe or other PCI DSS–compliant providers</li>
              <li>Stored to support order tracking, analytics, and reporting</li>
            </ul>

            <p className="mt-2 font-semibold">c. Automatically Collected Data</p>
            <ul className="list-disc list-inside">
              <li>IP address, browser type, device model, OS, and site usage behavior</li>
            </ul>

            <p className="mt-2 font-semibold">d. Aggregated & Anonymized Data</p>
            <ul className="list-disc list-inside">
              <li>Used for product improvement, campaign analysis, and internal reports</li>
            </ul>

            <p className="mt-2 font-semibold">e. Communication Logs</p>
            <ul className="list-disc list-inside">
              <li>Emails, chat messages, and CRM interactions recorded for support and security</li>
            </ul>

            <h2 className="font-bold mt-6">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside">
              <li>Provide and operate the Platform (e.g. manage accounts, enable livestreaming and CRM functions)</li>
              <li>Process transactions and deliveries</li>
              <li>Match brands with creators or suppliers</li>
              <li>Send product updates, service notifications, and promotional materials (with opt-out options)</li>
              <li>Analyze usage to improve features and campaign success</li>
              <li>Detect and prevent fraud, security risks, and illegal activity</li>
              <li>Comply with laws and regulatory obligations</li>
            </ul>

            <h2 className="font-bold mt-6">3. How We Share Your Information</h2>
            <p>We do not sell your personal data. We may share it only as necessary with:</p>
            <ul className="list-disc list-inside">
              <li>Service providers (e.g. Stripe, Twilio, J&T Express) for payment, messaging, and logistics</li>
              <li>Marketing partners, only if you opt-in to receive targeted campaigns</li>
              <li>Social media platforms, if you authorize content sharing (e.g. live video streaming to Instagram or YouTube)</li>
              <li>Analytics providers using only aggregated and anonymized data</li>
              <li>Authorities or regulators, when legally required</li>
              <li>Business transferees, in the case of merger, acquisition, or restructuring</li>
            </ul>

            <h2 className="font-bold mt-6">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies to personalize your experience and collect analytics. Types include:</p>
            <ul className="list-disc list-inside">
              <li>Essential cookies: Enable core functionality</li>
              <li>Analytics cookies: Track site usage</li>
              <li>Advertising cookies: Serve personalized promotions</li>
            </ul>
            <p>
              You can manage cookie preferences via your browser or our [Cookie Settings] (insert link). For full details, see our [Cookies Policy] (insert link).
            </p>

            <h2 className="font-bold mt-6">5. Data Retention</h2>
            <p>We retain data only as long as necessary for the purposes outlined:</p>
            <ul className="list-disc list-inside">
              <li>Order/transaction history: Up to 5 years for accounting and compliance</li>
              <li>Delivery records: 1 year, to resolve disputes or verify delivery</li>
              <li>CRM conversations and logs: Up to 1 year for support and monitoring</li>
              <li>Anonymized usage data: Retained indefinitely for research and product development</li>
            </ul>
            <p>After expiration, we securely delete or anonymize the data.</p>

            <h2 className="font-bold mt-6">6. Data Security</h2>
            <p>We implement technical and organizational measures to protect your data, including:</p>
            <ul className="list-disc list-inside">
              <li>Encryption during transmission</li>
              <li>Secure servers and access controls</li>
              <li>Regular system audits and backups</li>
            </ul>
            <p>If a data breach occurs, we will notify you and the authorities in accordance with PDPA.</p>

            <h2 className="font-bold mt-6">7. Your Rights Under PDPA</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate or outdated information</li>
              <li>Withdraw consent to data processing (where applicable)</li>
            </ul>
            <p>To make a request, contact us at <a href="mailto:business@adtromedia.com" className="underline text-[var(--accent-colour)]">business@adtromedia.com</a>. We will respond within 30 calendar days.</p>

            <h2 className="font-bold mt-6">8. Children’s Privacy</h2>
            <p>Our services are not intended for children under 13 years old. We do not knowingly collect data from minors. If a parent or guardian believes a child has submitted data, please contact us and we will promptly delete it.</p>

            <h2 className="font-bold mt-6">9. International Transfers</h2>
            <p>If your personal data is transferred outside Singapore, we ensure it remains protected through:</p>
            <ul className="list-disc list-inside">
              <li>Contractual clauses</li>
              <li>Industry best practices</li>
              <li>Alignment with PDPA standards and applicable cross-border regulations</li>
            </ul>

            <h2 className="font-bold mt-6">10. User Data Deletion Requests</h2>
            <p>To delete your account and associated data:</p>
            <ul className="list-disc list-inside">
              <li>Submit a request via our [User Data Deletion Portal] (insert link)</li>
              <li>Or email <a href="mailto:business@adtromedia.com" className="underline text-[var(--accent-colour)]">business@adtromedia.com</a> with the subject "Account Deletion Request", including your name and registered email</li>
            </ul>
            <p>Upon verification, we will delete your data within 30 days and confirm completion</p>
            <p><strong>Note:</strong> Transaction records may be retained for legal and financial obligations.</p>

            <h2 className="font-bold mt-6">11. Your Privacy Controls</h2>
            <p>You may:</p>
            <ul className="list-disc list-inside">
              <li>Adjust cookie settings via [Cookie Settings] (insert link)</li>
              <li>Unsubscribe from emails via links in our messages</li>
              <li>Request a data copy by emailing <a href="mailto:business@adtromedia.com" className="underline text-[var(--accent-colour)]">business@adtromedia.com</a></li>
              <li>Request account deletion per Section 10</li>
            </ul>
            <h2 className="font-bold mt-6">12. YouTube API Services</h2>
            <p>
              Our Services use YouTube API Services to enable livestreaming, analytics, and account integrations. 
              By using features of our Platform that interact with YouTube, you agree to be bound by the {" "}
              <a 
                href="https://www.youtube.com/t/terms" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--accent-colour)] underline"
              >
                YouTube Terms of Service
              </a>.
            </p>
            <p>
              In addition, Google’s Privacy Policy applies to YouTube API Services. You can review it here: {"  "}
              <a 
                href="http://www.google.com/policies/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--accent-colour)] underline"
              >
                http://www.google.com/policies/privacy
              </a>.
            </p>
            <p>
              You may revoke our access to your YouTube data at any time via your  {" "}
              <a 
                href="https://security.google.com/settings/security/permissions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--accent-colour)] underline"
              >
                Google security settings
              </a>.
            </p>

            <h2 className="font-bold mt-6">13. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted here, and material updates will be communicated via email or in-app notification. Your continued use after updates implies acceptance.</p>

            <h2 className="font-bold mt-6">14. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out to:</p>
            <p className="mt-2">Adtro Media Pte. Ltd.</p>
            <p>Email: <a href="mailto:business@adtromedia.com" className="underline text-[var(--accent-colour)]">business@adtromedia.com</a></p>
            <p>Address: 51 Goldhill Plaza, #07-07, Singapore 308900</p>
          </div>
        </div>
      </div>
    </main>
  )
}
