import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-40 pb-10">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border glass">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Accepting New Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter leading-[1.1]">
              From Vision To<br/>
              <span className="gradient-text text-6xl">Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg font-light leading-relaxed">
              We are <span className="text-foreground font-medium">Shivakriti Tech</span>. We architect bespoke AI solutions and premium software ecosystems for forward-thinking enterprises.
            </p>

            <div className="flex flex-wrap gap-6">
              <a 
                href="#case-studies" 
                className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-muted-foreground transition-all flex items-center gap-2 group"
              >
                <Sparkles size={18} /> See Our Impact
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-foreground/5 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        <div className="w-full md:w-1/2 relative">
            {/* Premium Abstract Visual */}
            <div className="relative aspect-square md:aspect-[7/5] rounded-[3rem] overflow-hidden border border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/hero_sec_img.png"  alt="Shivakriti AI" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
