import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="py-6 bg-background border-t border-border">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
      <p>© 2025 Shivakriti Tech. Crafted in India.</p>
      <div className="flex gap-8">
        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
        <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        <Link to="/sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
      </div>
    </div>
  </footer>
);
