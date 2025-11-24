import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, Loader2, Wand2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const Contact = () => {
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const refineMessage = async () => {
    if (!msg) return;
    setLoading(true);
    
    toast({
      title: "AI Enhancement",
      description: "This feature requires an API key to be configured.",
    });
    
    setLoading(false);
  };

  return (
    <section id="contact" className="py-32 bg-background relative border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tighter mb-6">Let's Build the Future.</h2>
            <p className="text-xl text-muted-foreground">Ready to elevate your digital presence? We are currently accepting select partnerships.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 glass p-12 rounded-[2.5rem]">
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground text-lg font-medium mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@shivakriti.in" 
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-foreground transition-colors">
                      <Mail size={18}/>
                    </div>
                    <span className="text-lg">contact@shivakriti.in</span>
                  </a>
                  <a 
                    href="tel:9426782442" 
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-foreground transition-colors">
                      <Phone size={18}/>
                    </div>
                    <span className="text-lg">+91 94267 82442</span>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                      <MapPin size={18}/>
                    </div>
                    <span className="text-lg">Vadodara, Gujarat, India</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border">
                <h3 className="text-foreground text-lg font-medium mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all"
                  >
                    <Linkedin size={20}/>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all"
                  >
                    <Instagram size={20}/>
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                />
              </div>
              <div className="relative">
                <textarea 
                  rows={4} 
                  value={msg} 
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="How can we help you?" 
                  className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                ></textarea>
                <button 
                  type="button" 
                  onClick={refineMessage}
                  disabled={loading || !msg}
                  className="absolute bottom-4 right-4 text-xs glass hover:bg-foreground/10 text-primary px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-0"
                >
                  {loading ? <Loader2 size={12} className="animate-spin"/> : <><Wand2 size={12}/> Refine with AI</>}
                </button>
              </div>
              <button className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-muted-foreground transition-all flex justify-center items-center gap-2">
                Send Inquiry <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
