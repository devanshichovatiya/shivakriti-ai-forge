import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      if (isHomePage) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `/#${id}`);
        }
      } else {
        navigate('/', { state: { hash: id } });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl glass rounded-full px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex justify-between items-center transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">

          <Link to="/" className="flex items-center gap-3 group cursor-pointer ml-2">
            <div className="relative w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-full overflow-hidden shadow-inner transform group-hover:rotate-12 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-accent opacity-100 group-hover:scale-110 transition-transform"></div>
              <img src="/shivakriti_logo.png" alt="Logo" className="relative z-10 w-9 h-9 object-contain" />
            </div>
            <span className="text-lg font-bold text-foreground tracking-wide group-hover:gradient-text transition-all">
              Shivakriti Tech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-background/20 rounded-full px-2 py-1 border border-border mr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-5 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/#contact"
              onClick={(e) => handleLinkClick(e, '/#contact')}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-primary via-accent to-accent text-foreground text-sm font-bold rounded-full overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <ArrowRight size={14} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-foreground/10 rounded-full transition-colors mr-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center px-12 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-4xl font-bold text-foreground tracking-tight hover:gradient-text transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleLinkClick(e, '/#contact')}
            className="text-4xl font-bold text-foreground tracking-tight hover:gradient-text transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
