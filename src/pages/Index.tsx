import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import ForBrands from "@/components/sections/ForBrands";
import ForInfluencers from "@/components/sections/ForInfluencers";

const Index = () => {
  useEffect(() => {
    document.title = "HiveSphere — Influencer Campaigns with Trust and Simplicity";
  }, []);

  return (
    <main className="pt-20">
      <Hero />
      <ForBrands />
      <ForInfluencers />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;