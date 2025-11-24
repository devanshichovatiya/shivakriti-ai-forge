import { useState } from 'react';
import { 
  ArrowUpRight, MessageSquare, BarChart3, Briefcase, 
  ShoppingBag, GraduationCap, UserCog, Wrench, 
  Sparkles, Bot, Database 
} from 'lucide-react';

export const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('chatbots');

  const chatbotStudies = [
    {
      category: "Education",
      title: "EdTech Assistant",
      desc: "A 24/7 student companion that handles course enrollment, answers academic queries, and provides personalized learning path suggestions.",
      stat: "40% ↓ Admin Queries",
      icon: GraduationCap
    },
    {
      category: "Customer Support",
      title: "SupportAI Pro",
      desc: "Efficient assistance for user inquiries. Automated L1 support resolution, intelligently routing complex issues to human agents.",
      stat: "75% Instant Resolution",
      icon: MessageSquare
    },
    {
      category: "Sales & Marketing",
      title: "GrowthBot",
      desc: "Boost engagement through personalized interactions. Qualifies leads in real-time and schedules demos tailored to prospect behavior.",
      stat: "3x Lead Conversion",
      icon: Briefcase
    },
    {
      category: "HR Assistance",
      title: "PeopleOps Mate",
      desc: "Streamline processes for employee support. Handles onboarding, leave requests, and policy FAQs, freeing HR to focus on culture.",
      stat: "60% Faster Onboarding",
      icon: UserCog
    },
    {
      category: "Technical Support",
      title: "TechResolv",
      desc: "Resolve issues quickly and effectively. Troubleshoots common software glitches and guides users through diagnostic steps.",
      stat: "50% Lower Downtime",
      icon: Wrench
    },
    {
      category: "E-commerce",
      title: "ShopRight Bot",
      desc: "Enhance shopping experiences seamlessly. Offers personalized product recommendations and assists with checkout and order tracking.",
      stat: "25% ↑ Avg Order Value",
      icon: ShoppingBag
    }
  ];

  const aiStudies = [
    {
      category: "Predictive Analytics",
      title: "TrendForecast",
      desc: "Enhanced decision-making through data insights. Models that predict market trends and supply chain bottlenecks months in advance.",
      stat: "95% Forecast Accuracy",
      icon: BarChart3
    },
    {
      category: "Customer Service",
      title: "Intelligent Support",
      desc: "AI-driven support for improved customer experience. Sentiment analysis to prioritize urgent tickets and suggest empathetic responses.",
      stat: "4.8/5 CSAT Score",
      icon: Sparkles
    },
    {
      category: "Automation",
      title: "ProcessFlow AI",
      desc: "Streamlining operations for increased efficiency. Intelligent Document Processing (IDP) to digitize and categorize thousands of invoices.",
      stat: "90% Time Saved",
      icon: Bot
    },
    {
      category: "Data Insights",
      title: "InsightEngine",
      desc: "Transforming data into actionable strategies. Uncovering hidden patterns in user behavior to drive product innovation.",
      stat: "10x ROI",
      icon: Database
    }
  ];

  const activeData = activeTab === 'chatbots' ? chatbotStudies : aiStudies;

  return (
    <section id="case-studies" className="py-32 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">Proof of Innovation</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">Impact Stories.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of our technology driving growth across industries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="p-1 glass rounded-full inline-flex">
            <button 
              onClick={() => setActiveTab('chatbots')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'chatbots' 
                  ? 'bg-foreground text-background shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Intelligent Chatbots
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'ai' 
                  ? 'bg-foreground text-background shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Strategic AI
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeData.map((study, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-background border border-border rounded-3xl hover:border-primary/30 transition-all duration-300 hover:bg-card"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-primary" size={24} />
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-foreground transition-all">
                <study.icon size={24} />
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{study.category}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">{study.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {study.desc}
              </p>

              <div className="pt-6 border-t border-border flex items-center gap-3">
                <div className="text-2xl font-bold text-foreground">{study.stat.split(' ')[0]}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{study.stat.substring(study.stat.indexOf(' '))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
