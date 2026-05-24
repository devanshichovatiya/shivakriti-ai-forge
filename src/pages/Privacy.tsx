
import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy: FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Helmet>
        <title>Privacy Policy - Shivakriti</title>
        <meta name="description" content="Privacy Policy for Shivakriti" />
      </Helmet>
      <main className="container mx-auto px-6 md:px-12 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6">
          <p>Last updated: 2025</p>

          <h2 className="text-2xl font-semibold pt-4">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Privacy Principles</h3>
              <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Security</h3>
              <p>We implement industry-leading security measures to protect your information.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p>We clearly explain what data we collect and how we use it.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Privacy by Design</h3>
              <p>Privacy considerations are built into every aspect of our services.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">User Control</h3>
              <p>You have control over your data and can manage your privacy preferences.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold pt-4">Privacy Policy Details</h2>
          <p>
            This Privacy Policy describes how Shivakriti collects, uses, and protects your personal information when you use our services.
          </p>

          <h3 className="text-xl font-semibold pt-2">1. Information We Collect</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Information:</strong> We collect information you provide directly, such as name, email address, phone number, and company details when you create an account or contact us.</li>
            <li><strong>Usage Data:</strong> We automatically collect information about how you use our services, including IP addresses, browser type, pages visited, and interaction patterns.</li>
            <li><strong>Technical Data:</strong> We collect device information, operating system details, and technical specifications to ensure optimal service performance.</li>
            <li><strong>Communication Data:</strong> When you communicate with us, we may retain records of those communications for support and improvement purposes.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">2. How We Use Your Information</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI automation, chatbot, and digital communication services.</li>
            <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical support, and resolve any issues you may encounter.</li>
            <li><strong>Communication:</strong> To send you service updates, security alerts, and marketing communications.</li>
            <li><strong>Analytics:</strong> To analyze usage patterns and improve our services, develop new features, and enhance user experience.</li>
            <li><strong>Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">3. Information Sharing and Disclosure</h3>
           <ul className="list-disc list-inside space-y-2">
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our services.</li>
            <li><strong>Business Transfers:</strong> Information may be transferred in connection with mergers, acquisitions, or sale of business assets.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or government request.</li>
            <li><strong>Consent:</strong> We may share information with your explicit consent for specific purposes.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>


          <h3 className="text-xl font-semibold pt-2">4. Data Security</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Encryption:</strong> All data transmissions are protected using industry-standard SSL/TLS encryption.</li>
            <li><strong>Access Controls:</strong> We implement strict access controls and authentication measures for our systems.</li>
            <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments.</li>
            <li><strong>Employee Training:</strong> Our staff receives regular training on data protection and security best practices.</li>
            <li><strong>Incident Response:</strong> We have procedures in place to respond quickly to any security incidents.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">5. Data Retention</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Account Data:</strong> We retain your account information for as long as your account is active or as needed to provide services.</li>
            <li><strong>Usage Data:</strong> Technical and usage data is typically retained for up to 24 months for analytics and improvement purposes.</li>
            <li><strong>Communication Records:</strong> Customer support communications are retained for up to 7 years for reference and training purposes.</li>
            <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations or resolve disputes.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">6. Your Privacy Rights</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can request correction of any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to legal and contractual obligations.</li>
            <li><strong>Portability:</strong> You can request your data in a portable format for transfer to another service provider.</li>
            <li><strong>Opt-out:</strong> You can opt-out of marketing communications at any time through your account settings or unsubscribe links.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">7. Cookies and Tracking Technologies</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Essential Cookies:</strong> We use cookies necessary for the operation of our services, such as authentication and security.</li>
            <li><strong>Analytics Cookies:</strong> We use analytics tools to understand how our services are used and to improve user experience.</li>
            <li><strong>Preference Cookies:</strong> We store your preferences and settings to personalize your experience.</li>
            <li><strong>Marketing Cookies:</strong> With your consent, we may use cookies for marketing and advertising purposes.</li>
          </ul>
          <p>You can control cookie preferences through your browser settings.</p>

          <h3 className="text-xl font-semibold pt-2">8. International Data Transfers</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Our services may involve transferring your data to countries outside your jurisdiction.</li>
            <li>We ensure appropriate safeguards are in place for international data transfers.</li>
            <li>We comply with applicable data protection laws regarding cross-border data transfers.</li>
            <li>Standard contractual clauses and adequacy decisions guide our international data handling practices.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">Exercise Your Rights</h2>
          <p>To exercise your privacy rights or manage your data preferences:</p>
          <ul className="list-none space-y-2">
            <li><strong>Email:</strong> contact@shivakriti.in</li>
            <li><strong>Account Settings:</strong> Manage preferences in your dashboard</li>
            <li><strong>Data Subject Requests:</strong> Submit requests through our privacy portal</li>
          </ul>
          
          <h2 className="text-2xl font-semibold pt-4">Security Concerns</h2>
          <p>If you have security concerns or notice suspicious activity:</p>
          <ul className="list-none space-y-2">
              <li><strong>Security Team:</strong> contact@shivakriti.in</li>
              <li><strong>Emergency:</strong> +91 9426782442</li>
              <li><strong>Report Incidents:</strong> Use our security incident reporting form</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
