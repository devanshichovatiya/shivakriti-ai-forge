import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software",
    excerpt: "Exploring how artificial intelligence is revolutionizing business operations and decision-making processes across industries.",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Cloud Architectures",
    excerpt: "Best practices for designing and implementing cloud infrastructure that grows with your business needs.",
    date: "Nov 18, 2024",
    readTime: "6 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 3,
    title: "Chatbots That Actually Understand Users",
    excerpt: "How modern NLP and contextual AI are creating conversational experiences that feel truly human.",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    category: "Conversational AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
  },
  {
    id: 4,
    title: "The Rise of Edge Computing in IoT",
    excerpt: "Understanding how edge computing is enabling real-time data processing for smart devices and IoT ecosystems.",
    date: "Nov 12, 2024",
    readTime: "7 min read",
    category: "IoT & Edge",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
  },
  {
    id: 5,
    title: "Generative AI: Beyond Text Generation",
    excerpt: "Discovering the untapped potential of generative AI in design, code, and multimedia content creation.",
    date: "Nov 10, 2024",
    readTime: "9 min read",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1676277791608-ac52e3086f5c?w=800&q=80"
  },
  {
    id: 6,
    title: "Securing Your Digital Infrastructure",
    excerpt: "Essential cybersecurity practices and frameworks for protecting modern enterprise applications.",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Conversational AI', 'IoT & Edge', 'Generative AI', 'Security'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
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
            <div className="group relative max-w-6xl mx-auto">
              <div 
                className="glass rounded-3xl overflow-hidden border border-primary/30 transition-all duration-500 transform hover:scale-[1.02]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(2deg) rotateY(-2deg)',
                }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div 
                    className="relative h-80 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105"
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

                  <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 glass rounded-full text-primary">{featuredPost.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-4xl font-bold text-foreground leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-4 w-fit">
                      Read Article <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
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
              <div
                key={post.id}
                className="group perspective-[1000px]"
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

                    <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                      Read More <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Blog;
