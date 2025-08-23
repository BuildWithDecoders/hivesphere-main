import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ForBrands = () => {
  const features = [
    "Create a campaign in minutes with your goals, budget, and deliverables.",
    "Get matched with the right influencers for your brand.",
    "Track who’s onboarded and what’s been delivered.",
    "Use simple agreements to ensure accountability."
  ];

  return (
    <section id="for-brands" className="py-16 md:py-24 bg-background">
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
            <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center p-8 futuristic-border">
               <div className="text-6xl opacity-60">📈</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrands;