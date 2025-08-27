import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const ForBrands = () => {
  const features = [
    "Create a campaign in minutes with your goals, budget, and deliverables.",
    "Get matched with the right influencers for your brand.",
    "Track who’s onboarded and what’s been delivered.",
    "Use simple agreements to ensure accountability."
  ];

  return (
    <section id="for-brands" className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                For Brands
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-minimal">
              Structure your influencer marketing.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-light">
              Stop relying on random DMs. With Hivesphere, you can:
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-minimal">
              <Link to="/register?role=brand">Launch a Campaign Today</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center p-8 futuristic-border relative overflow-hidden">
               <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl"></div>
               <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl"></div>
               
               {/* Mock UI Card */}
               <div className="relative w-full h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-minimal-lg hover-lift-minimal">
                 <h4 className="font-semibold text-sm mb-3">Campaign Analytics</h4>
                 <div className="space-y-3">
                   <div className="flex items-center justify-between p-2 bg-background/50 rounded-md">
                     <div className="flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-green-500" />
                       <span className="text-xs">Reach</span>
                     </div>
                     <span className="text-xs font-medium">125K</span>
                   </div>
                   <div className="flex items-center justify-between p-2 bg-background/50 rounded-md">
                     <div className="flex items-center gap-2">
                       <Users className="w-4 h-4 text-blue-500" />
                       <span className="text-xs">Engagements</span>
                     </div>
                     <span className="text-xs font-medium">8.2K</span>
                   </div>
                   <div className="flex items-center justify-between p-2 bg-background/50 rounded-md">
                     <div className="flex items-center gap-2">
                       <DollarSign className="w-4 h-4 text-primary" />
                       <span className="text-xs">ROI</span>
                     </div>
                     <span className="text-xs font-medium text-green-600">250%</span>
                   </div>
                 </div>
                 <div className="w-full h-16 bg-muted/30 rounded-md mt-4 flex items-center justify-center">
                   <p className="text-xs text-muted-foreground">[Chart Placeholder]</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrands;