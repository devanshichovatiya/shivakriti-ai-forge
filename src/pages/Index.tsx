import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.hash) {
      const element = document.getElementById(location.state.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Helmet>
        <title>Shivakriti Tech - AI Solutions & Custom Software Development</title>
        <meta name="description" content="Shivakriti Tech delivers bespoke AI solutions, including Generative AI and Chatbot Development, Cloud Architecture, IoT, and custom software. Based in Vadodara, India." />
        <meta name="keywords" content="Shivakriti, Shivakriti Tech, Shivakriti technology, shivakriti.in, AI Solutions, Generative AI, Chatbot Development, Cloud Computing, IoT, Edge Computing, Enterprise Security, Data Science, Custom Software Development, Vadodara, India, tech company" />
        <meta property="og:title" content="Shivakriti Tech - AI, Cloud, & Custom Software Solutions" />
        <meta property="og:description" content="Shivakriti Tech provides expert AI, Cloud, and Custom Software services to drive business growth and innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shivakriti.in" />
        <meta property="og:image" content="https://www.shivakriti.in/hero_sec_img.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ShivavkritiTech" />
        <meta name="twitter:title" content="Shivakriti Tech - AI, Cloud, & Custom Software Solutions" />
        <meta name="twitter:description" content="Shivakriti Tech provides expert AI, Cloud, and Custom Software services to drive business growth and innovation." />
        <meta name="twitter:image" content="https://www.shivakriti.in/hero_sec_img.png" />
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
