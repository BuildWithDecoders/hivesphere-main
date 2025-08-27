import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Fashola",
      role: "Marketing Director, Lagos Fashion House",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      content: "HiveSphere helped us find authentic micro-influencers who perfectly aligned with our brand values. Our engagement rates increased by 150%."
    },
    {
      name: "Chioma Okeke",
      role: "Beauty Influencer, 45K followers",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "The platform makes it so easy to connect with brands that actually value creators. Fair payments and transparent communication every time."
    },
    {
      name: "Emeka Nnadi",
      role: "Founder, Tech Startup Abuja",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      content: "We launched our app through HiveSphere's network of tech influencers. The ROI was incredible - 300% better than traditional advertising."
    },
    {
      name: "Aisha Bello",
      role: "Food Blogger, 22K followers",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
      content: "Finding paid collaborations used to be a hassle. HiveSphere streamlined the entire process, from discovery to payment. Highly recommended!"
    },
    {
      name: "Tunde Adekunle",
      role: "CEO, Naija Drinks Co.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=face",
      content: "The quality of influencers on HiveSphere is top-notch. We saw a significant lift in brand mentions and sales after just one campaign."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative">
      <div className="absolute inset-0 minimal-grid opacity-15"></div>
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-minimal">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Join thousands of brands and influencers who have found success through our platform.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
                <div className="h-full">
                  <Card className="h-full flex flex-col justify-between minimal-glass futuristic-border shadow-minimal hover-lift-minimal">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-accent/30 mb-4" />
                      <p className="text-foreground/90 mb-6 font-light">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 border-2 border-border/50">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm font-light">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-[-50px]" />
          <CarouselNext className="mr-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;