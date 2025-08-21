import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/20 relative">
      <div className="absolute inset-0 minimal-grid opacity-15"></div>
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-minimal">Simple, Fair Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
          <Card className="relative minimal-glass hover:shadow-minimal-lg transition-all duration-300 hover:scale-[1.01] futuristic-border">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 font-semibold">For Brands</CardTitle>
              <div className="text-3xl font-bold text-primary mb-2">Start Free</div>
              <p className="text-muted-foreground text-sm font-light">Pay only when you launch campaigns</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {[
                  "Browse unlimited influencer profiles",
                  "AI-powered matching recommendations",
                  "Direct messaging with influencers", 
                  "Campaign management tools",
                  "Basic analytics dashboard",
                  "Pay-per-campaign pricing"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-accent/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-minimal">
                <Link to="/signup-brand">Start Free Trial</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border border-accent/30 hover:shadow-minimal-lg transition-all duration-300 hover:scale-[1.01] shadow-minimal futuristic-border">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-minimal">Popular</span>
            </div>
            <CardHeader className="text-center pb-8 pt-12">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="text-xl mb-4 font-semibold">For Influencers</CardTitle>
              <div className="text-3xl font-bold text-accent mb-2">Always Free</div>
              <p className="text-muted-foreground text-sm font-light">No fees, ever. Keep 100% of your earnings</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {[
                  "Create detailed influencer profile",
                  "Get discovered by top brands",
                  "Apply to open campaigns",
                  "Receive direct invitations",
                  "Secure payment processing",
                  "Build your reputation with reviews"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-accent/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 shadow-minimal">
                <Link to="/signup-influencer">Join Free Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;