import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, Loader2, Wand2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Errors {
  name?: string;
  email?: string;
  mobile?: string;
  msg?: string;
}

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [company, setCompany] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  
  const isFormValid = Object.keys(errors).length === 0 && name && email && mobile && msg;

  const validate = () => {
    const newErrors: Errors = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!mobile) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!/^\+?\d{10,15}$/.test(mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number with country code.';
    }
    if (!msg) newErrors.msg = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const refineMessage = async () => {
    if (!msg) return;
    setLoading(true);
    
    toast({
      title: "AI Enhancement",
      description: "This feature requires an API key to be configured.",
    });
    
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields correctly.",
        variant: "destructive",
      });
      return;
    }
    setSending(true);

    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ") || "";

    const serviceID = "service_mq578uf";
    const templateID = "template_32lf5tb";
    const userID = "HVsF94nSsVJp3CSni";

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: mobile,
      company: company || "Not provided",
      projectType: "General Inquiry",
      message: msg,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you shortly.",
        });

        setName("");
        setEmail("");
        setMobile("");
        setCompany("");
        setMsg("");
        setErrors({});
      })
      .catch(() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your inquiry.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setSending(false);
      });
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^\d+]/g, '');
    setMobile(sanitizedValue);
    if (errors.mobile) {
      setErrors({ ...errors, mobile: undefined });
    }
  };
  const handleInputChange = (setter: (value: string) => void, field: keyof Errors) => 
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(e.target.value);

    // Clear error for that field when user edits it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
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
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-foreground transition-colors">
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
                    href="https://www.linkedin.com/in/shivakriti-tech-9763b9387" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all"
                  >
                    <Linkedin size={20}/>
                  </a>
                  <a 
                    href="https://www.instagram.com/shivakriti.tech/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all"
                  >
                    <Instagram size={20}/>
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange(setName, 'name')}
                    onBlur={validate}
                    className={`bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground w-full`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={handleInputChange(setEmail, 'email')}
                    onBlur={validate}
                    className={`bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground w-full`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={handleMobileChange}
                    onBlur={validate}
                    className={`bg-background border ${errors.mobile ? 'border-red-500' : 'border-border'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground w-full`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
                <input 
                  type="text" 
                  placeholder="Company" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                />
              </div>
              <div className="relative">
                <textarea 
                  rows={4} 
                  value={msg} 
                  onChange={handleInputChange(setMsg, 'msg')}
                  onBlur={validate}
                  placeholder="How can we help you?" 
                  className={`w-full bg-background border ${errors.msg ? 'border-red-500' : 'border-border'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground`}
                ></textarea>
                 {errors.msg && <p className="text-red-500 text-xs mt-1">{errors.msg}</p>}
                <button 
                  type="button" 
                  onClick={refineMessage}
                  disabled={loading || !msg}
                  className="absolute bottom-4 right-4 text-xs glass hover:bg-foreground/10 text-primary px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-0"
                >
                  {loading ? <Loader2 size={12} className="animate-spin"/> : <><Wand2 size={12}/> Refine with AI</>}
                </button>
              </div>
              <button 
                type="submit" 
                disabled={!isFormValid || sending}
                className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-muted-foreground transition-all flex justify-center items-center gap-2 disabled:bg-muted disabled:cursor-not-allowed"
              >
                {sending ? <Loader2 size={20} className="animate-spin" /> : <>Send Inquiry <ArrowUpRight size={20} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
