import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", x + "%");
      el.style.setProperty("--spot-y", y + "%");
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-hero-minimal min-h-[90vh] flex items-center">
      <div ref={ref} className="spotlight-minimal" />
      <div className="absolute inset-0 minimal-grid opacity-30"></div>
      <div className="container py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">
                Nigeria's Leading Influencer Platform
              </span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
              Where Brands Meet the Right Influencers
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed max-w-2xl font-light">
              Connect, Collaborate, and Grow your brand with verified influencers — all in one seamless platform.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button asChild size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-minimal-lg hover-lift-minimal">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-border/50 text-foreground hover:bg-muted/50 backdrop-blur-sm">
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                <span>1000+ Active Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                <span>500+ Brands Trust Us</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="aspect-square bg-card/50 rounded-2xl backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-minimal-lg futuristic-border">
                <div className="text-6xl opacity-60">🤝</div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
