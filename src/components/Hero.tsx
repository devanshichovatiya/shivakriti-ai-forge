import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
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
            
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter leading-[1.1]">
              Forging <br/>
              <span className="gradient-text">Intelligence.</span>
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
            <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-border glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              {/* Simulated Glass Cards Interface */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                <div className="w-full max-w-sm p-6 rounded-2xl glass shadow-2xl transform translate-x-4 rotate-2 transition-transform hover:rotate-0 hover:translate-x-0 duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent"></div>
                    <div>
                      <div className="h-2 w-24 bg-foreground/20 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-foreground/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 w-full bg-foreground/5 rounded-xl border border-border"></div>
                  </div>
                </div>
                
                <div className="w-full max-w-sm p-6 rounded-2xl glass shadow-2xl transform -translate-x-4 -rotate-3 transition-transform hover:rotate-0 hover:translate-x-0 duration-700">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-foreground uppercase tracking-widest">Analytics</span>
                    <span className="text-emerald-400 text-xs">+24.5%</span>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 70, 45, 90, 65, 85].map((h, i) => (
                      <div 
                        key={i} 
                        style={{height: `${h}%`}} 
                        className="flex-1 bg-foreground/20 rounded-t-sm hover:bg-primary/80 transition-colors"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
