import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  featured?: boolean;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'AI & Machine Learning', 'Generative AI', 'Web Development'];

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/blog.txt');
        const text = await response.text();
        const parsedPosts: BlogPost[] = text.split('BLOG START').filter(s => s.trim()).map(postText => {
          const lines = postText.trim().split('\n');
          const metadata: any = {};
          let contentIndex = 0;
          for (let i = 0; i < lines.length; i++) {
            if (lines[i] === '---') {
              contentIndex = i + 1;
              break;
            }
            const [key, ...value] = lines[i].split(': ');
            if (key && value) {
              metadata[key.trim()] = value.join(': ').trim();
            }
          }
          const fullContent = lines.slice(contentIndex).join('\n').replace('BLOG END', '').trim();
          return {
            id: parseInt(metadata.id, 10),
            title: metadata.title,
            excerpt: metadata.excerpt,
            fullContent: fullContent,
            date: metadata.date,
            readTime: metadata.readTime,
            category: metadata.category,
            image: metadata.image,
            author: metadata.author,
            featured: metadata.featured === 'true'
          };
        });
        setBlogPosts(parsedPosts);
      } catch (error) {
        console.error("Failed to fetch or parse blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading posts...</div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 600;
          }
          .prose p {
            margin-bottom: 1em;
            line-height: 1.7;
          }
          .prose ul, .prose ol {
            margin-left: 1.5rem;
            margin-bottom: 1em;
          }
          .prose li {
            margin-bottom: 0.5em;
          }
        `}
      </style>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Helmet>
          <title>Blog - Shivakriti Tech</title>
          <meta name="description" content="Read the latest insights from the Shivakriti Tech team on AI, software development, and digital transformation." />
          <meta name="keywords" content="Shivakriti Tech, blog, AI, software development, technology, insights" />
          <meta property="og:title" content="Blog - Shivakriti Tech" />
          <meta property="og:description" content="Read the latest insights from the Shivakriti Tech team on AI, software development, and digital transformation." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://shivakriti.in/shivakriti_logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ShivavkritiTech" />
          <meta name="twitter:title" content="Blog - Shivakriti Tech" />
          <meta name="twitter:description" content="Read the latest insights from the Shivakriti Tech team on AI, software development, and digital transformation." />
          <meta name="twitter:image" content="https://shivakriti.in/shivakriti_logo.png" />
        </Helmet>
        <main>
          <>
            {/* Hero Section with 3D effect */}
            <section className="relative pt-32 pb-20 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"></div>
              </div>

              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>

                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-medium text-muted-foreground">Insights & Innovation</span>
                  </div>

                  <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-6">
                    Our <span className="gradient-text">Blog</span>
                  </h1>

                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    Exploring the intersection of technology, innovation, and human potential.
                    Deep dives into AI, software architecture, and digital transformation.
                  </p>
                </div>
              </div>
            </section>

            {/* Featured Post with 3D Card */}
            {featuredPost && (
              <section className="py-12 relative perspective-[2000px]">
                <div className="container mx-auto px-6 md:px-12">
                  {featuredPost && (
                    <Link to={`/blog/${featuredPost.id}`} className="group relative max-w-6xl mx-auto cursor-pointer">
                      <div
                        className="glass rounded-3xl overflow-hidden border border-primary/30 transition-all duration-500 transform hover:scale-[1.02]"
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: 'rotateX(2deg) rotateY(-2deg)',
                        }}
                      >
                        <div className="grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
                          <div
                            className="relative h-60 md:h-80 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105"
                            style={{
                              transformStyle: 'preserve-3d',
                              transform: 'translateZ(30px)',
                            }}
                          >
                            <img
                              src={featuredPost.image}
                              alt={featuredPost.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                            <div className="absolute top-4 left-4">
                              <span className="px-4 py-2 bg-primary text-foreground text-xs font-bold rounded-full">
                                Featured
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span className="px-3 py-1 glass rounded-full text-primary">{featuredPost.category}</span>
                              <span className="flex items-center gap-2">
                                {featuredPost.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar size={14} /> {featuredPost.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} /> {featuredPost.readTime}
                              </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                              {featuredPost.title}
                            </h2>

                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              {featuredPost.excerpt}
                            </p>

                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-4 w-fit">
                              Read Article <ArrowUpRight size={18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              </section>
            )}

            {/* Category Filter */}
            <section className="py-12">
              <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                          ? 'bg-primary text-foreground shadow-lg shadow-primary/20'
                          : 'glass text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Blog Grid with 3D Cards */}
            <section className="py-12 pb-32">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.filter(post => !post.featured).map((post, index) => (
                    <Link
                      to={`/blog/${post.id}`}
                      key={post.id}
                      className="group perspective-[1000px] cursor-pointer"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div
                        className="glass rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                        style={{
                          transformStyle: 'preserve-3d',
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        <div
                          className="relative h-52 overflow-hidden"
                          style={{
                            transformStyle: 'preserve-3d',
                            transform: 'translateZ(20px)',
                          }}
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 glass text-xs font-medium text-primary backdrop-blur-md">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-2">
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={12} /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:gradient-text transition-all">
                            {post.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                            Read More <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Newsletter CTA with 3D effect */}
            <section className="py-20 relative">
              <div className="container mx-auto px-6 md:px-12">
                <div
                  className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center border border-primary/20 transform transition-transform hover:scale-[1.02]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(1deg)',
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Tag size={28} className="text-foreground" />
                  </div>

                  <h2 className="text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Get the latest insights on AI, software development, and digital transformation delivered to your inbox.
                  </p>

                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 bg-background border border-border rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <button className="px-8 py-4 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 transition-all whitespace-nowrap">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
