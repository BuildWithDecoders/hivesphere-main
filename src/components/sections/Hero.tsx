import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-hero-minimal min-h-[90vh] flex items-center">
      <div className="absolute inset-0 minimal-grid opacity-30"></div>
      <div className="container py-20 md:py-32 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
            Run influencer campaigns with trust and simplicity.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Hivesphere helps Nigerian brands connect with verified influencers, launch campaigns, and track results—all in one place. No stress, no guesswork.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-minimal-lg hover-lift-minimal">
              <Link to="/register?role=brand">Start a Campaign</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-border/50 text-foreground hover:bg-muted/50 backdrop-blur-sm">
              <Link to="/register?role=influencer">Join as Influencer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;