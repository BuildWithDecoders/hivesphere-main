import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ForInfluencers = () => {
  const features = [
    "Build a profile that shows your niche and audience reach.",
    "Apply to campaigns that match your style.",
    "Secure gigs with clear agreements and proof of payment."
  ];

  return (
    <section id="for-influencers" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <div className="aspect-square bg-card rounded-2xl flex items-center justify-center p-8 futuristic-border relative overflow-hidden">
               <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl"></div>
               <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"></div>
               <div className="relative w-full h-full border border-border/50 rounded-lg p-4 backdrop-blur-sm">
                 <p className="text-6xl opacity-60">✨</p>
                 <p className="text-sm text-muted-foreground mt-4">Creator Opportunities</p>
               </div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                For Influencers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-minimal">
              Get discovered. Get paid. Grow your influence.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-light">
              Join a growing network of influencers ready to work with top Nigerian brands. With Hivesphere, you can:
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-minimal">
              <Link to="/register?role=influencer">Create Your Influencer Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInfluencers;