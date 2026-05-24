import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import NotFound from './NotFound';

interface BlogPostType {
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

const BlogPost: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/blog.txt');
        const text = await response.text();
        const parsedPosts: BlogPostType[] = text.split('BLOG START').filter(s => s.trim()).map(postText => {
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
        const foundPost = parsedPosts.find((p) => p.id === parseInt(id || ''));
        setPost(foundPost || null);
      } catch (error) {
        console.error("Failed to fetch or parse blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Helmet>
        <title>{post.title} - Shivakriti Tech Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>
      <main className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <article>
            <div className="mb-8">
              <span className="text-primary font-semibold">{post.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight my-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <img src="/shivakriti_logo.png" alt="Shivakriti" className="w-6 h-6 rounded-full" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-2xl aspect-video mb-8" />

            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 leading-relaxed">
              <p className="lead text-xl">{post.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: post.fullContent.replace(/\n/g, '<br />') }} />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
