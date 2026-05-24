import { Bot, Sparkles, Globe, Terminal, Rocket, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "AI-Powered Automation",
      desc: "Transform your business operations with intelligent automation that learns and adapts. We build smart workflows that reduce manual tasks by up to 80%, freeing your team to focus on what matters most.",
      icon: Bot,
      features: ["Custom AI Agents", "Smart Workflow Design", "24/7 Autonomous Operations"]
    },
    {
      title: "Generative AI Solutions",
      desc: "Harness the power of cutting-edge AI models tailored to your business. From intelligent chatbots to content generation systems, we craft AI solutions that understand your unique requirements.",
      icon: Sparkles,
      features: ["Custom LLM Integration", "AI Chatbots & Assistants", "Knowledge Base Systems"]
    },
    {
      title: "Modern Web Development",
      desc: "Launch stunning, lightning-fast web experiences that captivate users. Our team specializes in React, Next.js, and modern frameworks to build platforms that scale with your growth.",
      icon: Globe,
      features: ["React & Next.js Apps", "Responsive Design", "Performance Optimized"]
    },
    {
      title: "Custom Software Solutions",
      desc: "From concept to deployment, we engineer robust software tailored to your vision. As a new, agile team, we bring fresh perspectives and the latest technologies to every project.",
      icon: Terminal,
      features: ["Full-Stack Development", "API Development", "Cloud-Native Architecture"]
    },
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 px-3 py-1 bg-primary/10 rounded-full">
              <Rocket size={14} /> New Era of Innovation
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">What We Build.</h2>
            <p className="text-xl text-muted-foreground font-light">
              As a fresh, forward-thinking team, we combine cutting-edge AI expertise with agile development practices.
              No legacy constraints — just pure innovation tailored to your vision.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-foreground border-b border-border pb-1 hover:border-foreground hover:text-primary transition-all"
          >
            Start Your Project <ArrowRight size={16} />
          </a>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <li
              key={i}
              className="group bg-background p-10 hover:bg-card transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border flex items-center justify-center mb-8 text-foreground group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                <s.icon size={26} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((feature, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 bg-foreground/5 px-3 py-1.5 rounded-full border border-border group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {feature}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Why Choose Us Banner */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl" />
          <div className="relative p-10 md:p-16 border border-border/50 rounded-3xl backdrop-blur-sm">
            <div className="text-center mb-12">
              <span className="text-primary/80 text-sm tracking-[0.3em] uppercase font-medium">
                The Shivakriti Difference
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-foreground mt-4 tracking-tight">
                Where <span className="font-semibold ">Vision</span> Meets <span className="font-semibold ">Precision</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">Rapid Delivery</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Agile workflows that turn your ideas into reality faster than you'd expect.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">AI-First Approach</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every solution is enhanced with intelligent automation and smart capabilities.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">Quality Obsessed</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Meticulous attention to detail in every line of code we write.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
