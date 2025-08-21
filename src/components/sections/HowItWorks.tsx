import { UserPlus, Search, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Register as a brand or influencer in minutes with our simple onboarding process."
    },
    {
      icon: Search,
      title: "Discover & Connect", 
      description: "AI-powered matching engine to find perfect partners that align with your goals."
    },
    {
      icon: TrendingUp,
      title: "Collaborate & Grow",
      description: "Manage campaigns, track results, and build lasting partnerships that drive growth."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-minimal">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Get started in three simple steps and watch your brand grow with the right influencer partnerships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-border"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="mb-6 flex justify-center relative">
                  <div className="w-16 h-16 bg-card backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border/50 shadow-minimal relative z-10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs shadow-minimal">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;