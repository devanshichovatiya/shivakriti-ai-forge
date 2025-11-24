import { Code2, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Modern office workspace with technology" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 p-8 bg-background border border-border rounded-xl shadow-2xl">
              <div className="text-4xl font-bold text-foreground mb-1">5+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Years Excellence</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold text-foreground tracking-tight">The Shivakriti Philosophy.</h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                In an era of rapid commoditization, <span className="text-foreground">quality is the only differentiator</span>. 
                Shivakriti Tech was founded on the principle that technology should be as beautiful as it is functional.
              </p>
              <p>
                From Vadodara to the global stage, we deliver engineering precision wrapped in world-class aesthetics. 
                Whether it's Generative AI or complex ERP systems, we bring a level of craft that is rare in the industry.
              </p>
            </div>
            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground">
                <Code2 size={16} className="text-primary"/> Clean Code
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground">
                <Zap size={16} className="text-primary"/> High Velocity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
