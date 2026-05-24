
import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, FileText, FileBadge, Shield, Book } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Sitemap: FC = () => {
  const pages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Blog", path: "/blog", icon: FileText },
    { name: "Privacy Policy", path: "/privacy", icon: Shield },
    { name: "Terms of Service", path: "/terms", icon: FileBadge },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sitemap - Shivakriti</title>
        <meta name="description" content="Sitemap for Shivakriti" />
      </Helmet>
      <div className="container mx-auto px-6 md:px-12 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Book size={40} />
          Sitemap
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page) => (
            <Link key={page.name} to={page.path} className="group">
              <div className="p-6 border border-border rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <page.icon size={24} className="text-primary" />
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{page.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
