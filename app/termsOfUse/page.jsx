"use client"

import Navbar from "@/components/navbar"

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <div className="section">
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
          <div className="text-[#1f1d42] text-left">
            <h1 className="section-heading mb-4">Adtro Media — Terms of Service</h1>
            <p className="paragraph mb-4 text-sm text-gray-600 italic">
              <strong>Effective Date: 18 July 2025</strong>
            </p>

            <p className="paragraph mb-6">
              Welcome to Adtro Media. These Terms of Service ("Terms") govern your use of Adtro’s technology platform, products, services, and related offerings (“Services”). By accessing or using our Services, you agree to be bound by these Terms.
            </p>

            <p className="paragraph mb-6">
              If you do not agree to these Terms, you may not access or use our Services.
            </p>

            <hr className="my-8 border-t border-gray-200" />

            <div className="mb-10">
              <h2 className="section-heading mb-3">1. Overview of Services</h2>
              <p className=" space-y-2 paragraph bold">Adtro Media offers a live commerce technology platform enabling:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Livestreaming to platforms like TikTok, Facebook, Instagram, YouTube, Shopee</li>
                <li>Backend services including CRM, inventory, analytics, booking, and campaign tracking</li>
                <li>Creator network access and influencer collaboration tools</li>
                <li>Checkout support including WhatsApp-based ordering for applicable platforms</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-3">2. Eligibility</h2>
            <p className=" space-y-2 paragraph bold">You must:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Be at least 18 years old</li>
                <li>Have the legal authority to bind a company or brand if you are acting on its behalf</li>
                <li>Not be prohibited from using our Services under applicable laws</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-3">3. Accounts and Access</h2>
              <ul className="list-disc list-inside space-y-2 paragraph">
            <p className=" space-y-2 paragraph bold">You are responsible for:</p>
                <li>All activities under your account</li>
                <li>Ensuring your login credentials are secure</li>
                <li>Informing us immediately of any unauthorized access</li>
              </ul>
              <p className="paragraph mt-4">
                We reserve the right to suspend or terminate accounts for violations of these Terms.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-3">4. Subscription Plans and Payments</h2>
              
            <p className=" space-y-2 paragraph bold">We offer monthly and annual subscription plans, including:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Adtro+, Adtro Pro, and Adtro Biz</li>
                <li>AIKO-exclusive pricing for partner brands</li>
                <li>Optional onboarding and add-on services</li>
              </ul>
              <p className="paragraph mt-4">By subscribing:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>You agree to pay all fees associated with your selected plan</li>
                <li>Fees are billed in advance and are non-refundable, unless stated otherwise</li>
                <li>Annual plans include a 10% discount and are billed upfront</li>
                <li>Failure to pay may result in account suspension or termination.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-3">5. Intellectual Property</h2>
              <p className="paragraph mb-4">
                All content, code, tools, and technology provided by Adtro are owned by Adtro Media Pte. Ltd. or its licensors. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Copy, reverse engineer, or distribute our software or materials</li>
                <li>Use Adtro’s branding without written permission</li>
              </ul>
              <p className="paragraph mt-4">
                You retain ownership of your own content (e.g., livestreams, campaigns), but grant Adtro a license to use it for service delivery, analytics, and marketing purposes.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-3">6. Acceptable Use</h2>
            <p className=" space-y-2 paragraph bold">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Use the Services for unlawful, fraudulent, or abusive purposes</li>
                <li>Violate the terms of third-party platforms (e.g. TikTok, Meta, YouTube)</li>
                <li>Interfere with or disrupt our systems or other users' experience</li>
              </ul>
              <p className="paragraph mt-4">We may suspend or terminate Services for violations.</p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-3">7. Third-Party Services</h2>
              <p className="paragraph mb-4">
                Adtro may integrate with or depend on services like:
              </p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Facebook, Instagram, YouTube, TikTok, Shopee</li>
                <li>WhatsApp (for checkout)</li>
                <li>Payment platforms (e.g. Stripe)</li>
              </ul>
              <p className="paragraph mt-4">
                Your use of these platforms is subject to their respective terms. We are not liable for any issues arising from their services or outages.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">8. Data and Privacy</h2>
              <p className="paragraph mb-4">
                Our <a href="/privacyPolicy" className="text-[var(--accent-colour)] underline">Privacy Policy</a> explains how we collect, use, and protect your data.
              </p>
              <p className="paragraph">By using the Services, you consent to:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Collection of usage, behavioral, and transactional data</li>
                <li>Processing of customer data for CRM and analytics</li>
                <li>Communications related to support, updates, and marketing (with opt-out options)</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">9. Termination</h2>
              <p className="paragraph mb-4">
                You may cancel your subscription anytime via your dashboard. Cancellations take effect at the end of the current billing cycle.
              </p>
              <p className="paragraph">We may suspend or terminate your account for:</p>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Breach of these Terms</li>
                <li>Non-payment</li>
                <li>Misuse or abuse of the platform</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">10. Disclaimers and Limitations</h2>
              <ul className="list-disc list-inside space-y-2 paragraph">
                <li>Services are provided “as-is” without warranties of any kind</li>
                <li>We are not responsible for platform downtimes or losses caused by third-party services</li>
                <li>Our liability is limited to the amount paid in the past 3 months</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">11. Changes to Terms</h2>
              <p className="paragraph">
                We may update these Terms from time to time. Material changes will be notified via email or in-app. Continued use after changes implies acceptance.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="section-heading mb-6">12. Governing Law</h2>
              <p className="paragraph">
                These Terms are governed by the laws of Singapore. Any disputes shall be resolved in the courts of Singapore.
              </p>
            </div>

            <div className="bg-[var(--border-colour)] p-6 rounded-lg mb-10">
              <h2 className="section-heading mb-6">13. Contact</h2>
              <div className="bg-white p-6 rounded-md shadow-sm text-center">
                <p className="paragraph mb-2">For questions or support, contact us at:</p>
                <p className="text-[var(--accent-colour)] font-semibold text-xl">business@adtromedia.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
