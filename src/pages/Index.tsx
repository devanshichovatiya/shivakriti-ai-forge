import { SmokeCursor } from '@/components/SmokeCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <SmokeCursor />
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
