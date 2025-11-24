import { Bot, Sparkles, Globe, Terminal, Database, Network, ArrowRight } from 'lucide-react';

export const Services = () => {
  const services = [
    { title: "Intelligent Automation", desc: "Reduce operational overhead with self-healing workflows.", icon: Bot },
    { title: "Generative AI", desc: "Custom LLM integration for enterprise knowledge bases.", icon: Sparkles },
    { title: "Web Platforms", desc: "High-performance React & Next.js architectures.", icon: Globe },
    { title: "Software Engineering", desc: "Scalable backend systems built for millions of users.", icon: Terminal },
    { title: "Cloud Infrastructure", desc: "AWS/GCP solutions designed for resilience.", icon: Database },
    { title: "IoT Connectivity", desc: "Smart device networks and edge computing.", icon: Network },
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">Capabilities.</h2>
            <p className="text-xl text-muted-foreground font-light">We don't just build software; we craft digital assets that appreciate in value.</p>
          </div>
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-2 text-foreground border-b border-border pb-1 hover:border-foreground transition-all"
          >
            View Case Studies <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-background p-10 hover:bg-card transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-8 text-foreground group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
