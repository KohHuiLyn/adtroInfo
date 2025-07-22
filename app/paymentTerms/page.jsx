"use client"

import Navbar from "@/components/navbar"

export default function PaymentTermsPage() {
  return (
    <main>
      <Navbar />
      <div className="section">
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
          <div className="text-[#1f1d42] text-left text-sm leading-relaxed">
            <h1 className="section-heading mb-4">Payment Terms</h1>
            <p className="text-sm text-gray-600 italic mb-6"><strong>Last Updated: 22nd July 2025</strong></p>

            <p>
              These Payment Terms ("Terms") govern all payments made or received through Adtro Media Pte. Ltd. ("Adtro," "we," "us," or "our") via the Adtro Media platform (the "Platform"), including subscriptions, transactions, and billing. These Terms supplement our Terms of Service and Privacy Policy. By using the Platform, you agree to these Payment Terms.
            </p>

            <h2 className="font-bold mt-6">1. Key Definitions</h2>
            <ul className="list-disc list-inside">
              <li><strong>Platform:</strong> The web and mobile services provided by Adtro Media for livestreaming, CRM, campaigns, and e-commerce.</li>
              <li><strong>Sellers:</strong> Users who sell products via livestreaming using Adtro tools or personal social media accounts.</li>
              <li><strong>Companies:</strong> Businesses that use the Platform to sell products, engage influencers, or run campaigns.</li>
              <li><strong>Stripe:</strong> Our third-party payment processor for secure billing and subscription handling.</li>
              <li><strong>Subscription Fee:</strong> A recurring monthly or annual fee paid for access to Adtro's platform features.</li>
            </ul>

            <h2 className="font-bold mt-6">2. Subscriptions & Billing</h2>

            <p className="font-bold mt-4">2.1 Subscription Plans</p>
            <ul className="list-disc list-inside">
              <li>Access to core features (e.g., multistreaming, CRM, analytics, campaign tools) requires a valid paid subscription. Plan details, inclusions, and prices are displayed at the time of purchase.</li>
              <li>Subscriptions are billed in advance, and fees are generally non-refundable unless otherwise stated.</li>
              <li>Annual plans may include discounts or bonus features.</li>
            </ul>

            <p className="font-bold mt-4">2.2 Payment Processing</p>
            <ul className="list-disc list-inside">
              <li>Payments are securely processed via Stripe. You agree to:</li>
              <ul className="list-disc list-inside ml-6">
                <li>Provide a valid payment method.</li>
                <li>Authorize Adtro to charge recurring subscription fees.</li>
                <li>Ensure payment information is kept current.</li>
              </ul>
            </ul>

            <p className="font-bold mt-4">2.3 Renewal and Cancellation</p>
            <ul className="list-disc list-inside">
              <li>Subscriptions automatically renew unless canceled at least 5 days prior to the renewal date.</li>
              <li>Cancellations take effect at the end of the current billing period. No partial refunds are provided for unused time.</li>
            </ul>

            <p className="font-bold mt-4">2.4 Failed Payments</p>
            <ul className="list-disc list-inside">
              <li>If a payment fails, you will be notified and granted a 7-day grace period. Failure to resolve the payment issue within that time may result in account suspension or limited feature access.</li>
            </ul>

            <h2 className="font-bold mt-6">3. Sales and Partner Payment Responsibility</h2>

            <p className="font-bold mt-4">3.1 Seller–Company Transactions</p>
            <ul className="list-disc list-inside">
              <li>Adtro facilitates connections between Sellers and Companies for livestream selling and promotional campaigns. However:</li>
              <li>Adtro is not a party to commission or sales payment arrangements between Sellers and Companies.</li>
              <li>Each party is responsible for honoring its financial agreements, including commissions, fees, and payouts.</li>
            </ul>

            <p className="font-bold mt-4">3.2 Social Media Streams & External Payments</p>
            <ul className="list-disc list-inside">
              <li>If a Seller live streams from their personal social media account and receives direct payments (e.g., via TikTok Shop, Facebook Pay, Shopee Live):</li>
              <li>The Seller is solely responsible for fulfilling their obligations to the Company.</li>
              <li>Adtro is not responsible for the flow of funds or tracking of external commissions.</li>
            </ul>

            <p className="font-bold mt-4">3.3 Third-Party Partnerships (e.g., AIKO)</p>
            <ul className="list-disc list-inside">
              <li>When Sellers or Companies engage with services offered via a partner agency (such as AIKO):</li>
              <li>Payments to or from such partners are governed by their own terms and invoices.</li>
              <li>Adtro is not responsible for managing or enforcing external compensation terms unless explicitly stated in writing.</li>
            </ul>

            <h2 className="font-bold mt-6">4. Refunds and Returns</h2>

            <p className="font-bold mt-4">4.1 Subscription Refunds</p>
            <ul className="list-disc list-inside">
              <li>Subscription fees are non-refundable, except:</li>
              <ul className="list-disc list-inside ml-6">
                <li>In cases of billing errors caused by Adtro.</li>
                <li>Where a service was not provided as described.</li>
              </ul>
            </ul>

            <p className="font-bold mt-4">4.2 Product Sale Refunds</p>
            <ul className="list-disc list-inside">
              <li>All refunds, exchanges, or disputes related to product orders are handled between the Seller and the Buyer (Company or customer). Adtro does not process or mediate product returns or customer service matters.</li>
            </ul>

            <h2 className="font-bold mt-6">5. Taxes and Compliance</h2>

            <p className="font-bold mt-4">5.1 Tax Responsibility</p>
            <ul className="list-disc list-inside">
              <li>Sellers and Companies are responsible for determining and fulfilling their own tax obligations, including GST, VAT, and income tax.</li>
              <li>Adtro does not collect or remit taxes on behalf of users.</li>
            </ul>

            <p className="font-bold mt-4">5.2 Regulatory Compliance</p>
            <ul className="list-disc list-inside">
              <li>All users must comply with applicable laws, including e-commerce regulations, consumer protection laws, and payment reporting rules in their jurisdiction.</li>
            </ul>

            <h2 className="font-bold mt-6">6. Payment Methods</h2>

            <p className="font-bold mt-4">6.1 Accepted Methods</p>
            <ul className="list-disc list-inside">
              <li>We accept the following through Stripe:</li>
              <li>Major credit and debit cards</li>
              <li>Other payment options supported by Stripe in your region</li>
            </ul>

            <p className="font-bold mt-4">6.2 Security</p>
            <ul className="list-disc list-inside">
              <li>All transactions are processed through PCI DSS–compliant systems. Adtro does not store your full payment information on our servers.</li>
            </ul>

            <h2 className="font-bold mt-6">7. Liability and Platform Role</h2>

            <p className="font-bold mt-4">7.1 Role of Adtro</p>
            <ul className="list-disc list-inside">
              <li>Adtro provides tools and a platform for Sellers and Companies to operate — but:</li>
              <li>We do not guarantee payment between users.</li>
              <li>We are not liable for contract breaches, delayed payments, or revenue-sharing disputes.</li>
            </ul>

            <p className="font-bold mt-4">7.2 Limitation of Liability</p>
            <ul className="list-disc list-inside">
              <li>To the maximum extent permitted by law:</li>
              <li>Adtro is not liable for indirect, incidental, or consequential damages.</li>
              <li>Our total liability is limited to the fees paid to us for the relevant service in question.</li>
            </ul>

            <h2 className="font-bold mt-6">8. Disputes and Chargebacks</h2>

            <p className="font-bold mt-4">8.1 Resolution</p>
            <ul className="list-disc list-inside">
              <li>Adtro offers a Resolution Center for issues related to platform usage (e.g., subscription access, billing bugs).</li>
              <li>Disputes between Sellers and Companies over commissions or payouts must be resolved directly.</li>
            </ul>

            <p className="font-bold mt-4">8.2 Chargebacks</p>
            <ul className="list-disc list-inside">
              <li>If you initiate a chargeback without first contacting support or attempting resolution, your account may be suspended or flagged.</li>
            </ul>

            <h2 className="font-bold mt-6">9. Currency and Conversion</h2>
            <ul className="list-disc list-inside">
              <li>All payments are processed in Singapore Dollars (SGD).</li>
              <li>If you are paying in another currency, your final charge may reflect currency conversion fees determined by Stripe or your financial institution.</li>
            </ul>

            <h2 className="font-bold mt-6">10. Modifications</h2>
            <p>We may update these Payment Terms from time to time to reflect operational changes, legal requirements, or new features. Updates will be posted publicly, and continued use of the Services constitutes acceptance of the revised Terms.</p>

            <h2 className="font-bold mt-6">11. Contact Information</h2>
            <p>For billing or payment-related inquiries, contact:</p>
            <p className="mt-2">Adtro Media Pte. Ltd.</p>
            <p>Email: <a href="mailto:business@adtromedia.com" className="underline text-[var(--accent-colour)]">business@adtromedia.com</a></p>
            <p>Address: 51 Goldhill Plaza, #07-07, Singapore 308900</p>
          </div>
        </div>
      </div>
    </main>
  )
}
