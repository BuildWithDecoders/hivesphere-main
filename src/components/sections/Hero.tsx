import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-hero-minimal">
      <div className="absolute inset-0 minimal-grid opacity-30"></div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[90vh] items-center">
          {/* Left: Text Content */}
          <div className="pt-20 lg:pt-0 text-center lg:text-left">
            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] bg-gradient-to-br from-primary to-accent/70 bg-clip-text text-transparent">
              Run influencer campaigns with trust and simplicity.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hivesphere helps Nigerian brands connect with verified influencers, launch campaigns, and track results—all in one place. No stress, no guesswork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-minimal-lg hover-lift-minimal">
                <Link to="/register?role=brand">Start a Campaign</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-border/50 text-foreground hover:bg-muted/50 backdrop-blur-sm">
                <Link to="/register?role=influencer">Join as Influencer</Link>
              </Button>
            </div>
          </div>

          {/* Right: Visual Showcase */}
          <div className="hidden lg:flex items-center justify-center relative h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50"></div>
            
            {/* Influencer Card */}
            <div className="dashboard-card w-72 p-4 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-300 z-10">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" />
                  <AvatarFallback>CO</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Chioma Okeke</h4>
                  <p className="text-sm text-muted-foreground">@chioma_styles</p>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <Badge variant="secondary">Fashion</Badge>
                <Badge variant="outline">Lifestyle</Badge>
              </div>
              <div className="flex justify-between text-sm border-t pt-3">
                <div className="flex items-center gap-1"><Users className="w-4 h-4 text-muted-foreground" /> 45K</div>
                <div className="flex items-center gap-1"><Heart className="w-4 h-4 text-muted-foreground" /> 5.8%</div>
              </div>
            </div>

            {/* Brand Campaign Card */}
            <div className="dashboard-card w-72 p-4 transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300 absolute -bottom-8 right-0">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=face" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Naija Drinks Co.</h4>
                  <p className="text-sm text-muted-foreground">New Campaign</p>
                </div>
              </div>
              <h5 className="font-medium mb-2">Summer Refresh Launch</h5>
              <div className="text-sm border-t pt-3">
                <span className="text-muted-foreground">Budget: </span>
                <span className="font-semibold text-primary">₦150,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;