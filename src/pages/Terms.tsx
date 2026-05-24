
import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms: FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Helmet>
        <title>Terms of Service - Shivakriti</title>
        <meta name="description" content="Terms of Service for Shivakriti" />
      </Helmet>
      <main className="container mx-auto px-6 md:px-12 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="space-y-6">
          <p>Last updated: 2025</p>

          <h2 className="text-2xl font-semibold pt-4">Service Agreement</h2>
          <p>
            These Terms and Conditions ("Terms") govern your use of Shivakriti services. By using our services, you agree to these terms in full.
          </p>

          <h2 className="text-2xl font-semibold pt-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Shivakriti services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <p>
            If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-semibold pt-4">2. Service Description</h2>
          <p>
            Shivakriti provides AI automation, chatbot development, GenAI solutions, bulk SMS, RCS messaging, and related digital services.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
          </p>
          <p>
            Service availability may vary by region and is subject to technical limitations.
          </p>

          <h2 className="text-2xl font-semibold pt-4">3. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Users must provide accurate and complete information when using our services.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>Users must comply with all applicable laws and regulations when using our services.</li>
            <li>Prohibited activities include but are not limited to: spam, fraudulent activities, or any illegal use of our platforms.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">4. Payment Terms</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All fees are due and payable in advance unless otherwise specified in your service agreement.</li>
            <li>Prices are subject to change with 30 days' notice.</li>
            <li>Refunds are handled on a case-by-case basis according to our refund policy.</li>
            <li>Late payments may result in service suspension or termination.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">5. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All content, features, and functionality of Shivakriti services are owned by us and are protected by copyright, trademark, and other laws.</li>
            <li>Custom solutions developed for clients remain the property of the client upon full payment.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">6. Privacy and Data Protection</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We are committed to protecting your privacy and handling your data responsibly.</li>
            <li>Our data processing practices are detailed in our Privacy Policy.</li>
            <li>We implement industry-standard security measures to protect your information.</li>
            <li>Users have rights regarding their personal data as outlined in applicable privacy laws.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">7. Service Level Agreement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We strive to maintain 99.9% uptime for our services.</li>
            <li>Scheduled maintenance will be announced in advance when possible.</li>
            <li>Service credits may be provided for extended outages as outlined in individual service agreements.</li>
            <li>Support response times vary by service level and are specified in your agreement.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">8. Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Shivakriti shall not be liable for any indirect, incidental, special, or consequential damages.</li>
            <li>Our total liability shall not exceed the amount paid by you for the services in the 45 days preceding the claim.</li>
            <li>We do not guarantee uninterrupted or error-free service.</li>
            <li>Users are responsible for maintaining backups of their data.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">9. Termination</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Either party may terminate services with written notice as specified in the service agreement.</li>
            <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            <li>Upon termination, users have 30 days to retrieve their data before it may be deleted.</li>
            <li>Prepaid fees for unused services may be refunded at our discretion.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">10. Governing Law</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>These terms shall be governed by and construed in accordance with the laws of INDIA.</li>
            <li>Any disputes arising from these terms shall be resolved through binding arbitration.</li>
            <li>The courts of [Jurisdiction] shall have exclusive jurisdiction over any legal matters.</li>
            <li>If any provision of these terms is found unenforceable, the remainder shall remain in effect.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <ul className="list-none space-y-2">
            <li>Email: contact@shivakriti.in</li>
            <li>Phone: +91 9426782442</li>
            <li>Address: Shivakrit HQ, Vadodara,India</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
