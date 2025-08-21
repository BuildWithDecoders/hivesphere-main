import { Brain, Calendar, Shield, MessageCircle, BarChart3, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Matching Engine",
      description: "Our AI-powered matching engine ensures brands find influencers who truly resonate with their target audience."
    },
    {
      icon: Calendar,
      title: "Campaign Management", 
      description: "Streamlined campaign workflow from creation to completion, with built-in timeline and deliverable tracking."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with milestone-based payments and dispute resolution for peace of mind."
    },
    {
      icon: MessageCircle,
      title: "Real-Time Chat",
      description: "Direct communication between brands and influencers with file sharing and project collaboration tools."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into campaign performance, reach, engagement, and ROI tracking."
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Build trust through our review system that helps you find reliable partners for future collaborations."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="absolute inset-0 minimal-grid opacity-20"></div>
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
              Platform Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-minimal">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to run successful influencer campaigns, all in one platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-minimal p-6 rounded-xl group futuristic-border">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-light">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;