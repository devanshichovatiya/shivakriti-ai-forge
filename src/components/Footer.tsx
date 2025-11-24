export const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
      <p>© 2024 Shivakriti Tech. Crafted in India.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
      </div>
    </div>
  </footer>
);
