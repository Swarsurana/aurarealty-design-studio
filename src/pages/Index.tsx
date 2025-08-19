import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Users, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
const Index = () => {
  useScrollToTop();
  const features = [{
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Visionary Design",
    description: "Architectural excellence that breaks norms and sets new standards for luxury construction."
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "People-First Approach",
    description: "We listen before we build, ensuring every project reflects our clients' dreams."
  }, {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Our Process",
    description: "Every project receives our undivided attention and premium craftsmanship."
  }, {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Luxury Standards",
    description: "Premium materials, innovative technology, and unmatched attention to detail."
  }];
  const testimonials = [{
    quote: "Auranex transformed our vision into an architectural masterpiece. Their attention to detail is unmatched.",
    author: "Priya Sharma",
    role: "Luxury Villa Owner"
  }, {
    quote: "Our process and transparency throughout the project was exceptional. Highly recommended.",
    author: "Rajesh Gupta",
    role: "Commercial Developer"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Why Choose Auranex
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary md:text-foreground mb-4">
              The Auranex Difference
            </h2>
            <p className="text-xl text-slate-900 md:text-muted-foreground max-w-2xl mx-auto">
              We don't just build structures – we craft legacies that define luxury and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => <Card key={index} className="group hover:shadow-elegant transition-premium border-0 shadow-lg text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-premium">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-primary md:text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-900 md:text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                About Auranex
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary md:text-foreground mb-6">
                Crafted with Soul,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-slate-950">
                  Designed to Inspire
                </span>
              </h2>
              <div className="space-y-4 text-lg text-slate-900 md:text-muted-foreground mb-8">
                <p>
                  Auranex Realty represents excellence in construction execution, bringing architectural visions 
                  to life through expert project management and uncompromising quality standards.
                </p>
                <p>
                  We specialize in delivering luxury spaces that exceed expectations, with a commitment 
                  to precision, integrity, and putting our clients' dreams first.
                </p>
              </div>
              <Link to="/about">
                <Button variant="premium" size="lg" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="gradient-hero p-4 sm:p-6 text-white text-center border-0">
                  <Users className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-3 opacity-90" />
                  <h4 className="font-semibold text-sm sm:text-base">Client-Focused</h4>
                  <p className="text-xs sm:text-sm opacity-80">Your vision, our execution</p>
                </Card>
                <Card className="gradient-warm p-4 sm:p-6 text-white text-center border-0">
                  <Award className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-3 opacity-90" />
                  <h4 className="font-semibold text-sm sm:text-base">Quality First</h4>
                  <p className="text-xs sm:text-sm opacity-80">Premium standards always</p>
                </Card>
              </div>
                <Card className="gradient-hero p-4 sm:p-6 text-white text-center border-0">
                  <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-3 opacity-90" />
                  <h4 className="font-semibold text-sm sm:text-base mb-2">Our Process</h4>
                  <p className="text-xs sm:text-sm opacity-90">Transparency, precision, and excellence in every step</p>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary md:text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-slate-900 md:text-muted-foreground max-w-2xl mx-auto mb-8">
              From residential luxury to commercial excellence, we deliver end-to-end construction services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[{
            title: "Land Development & Plotting",
            description: "Strategic land development and plotting services for residential and commercial projects.",
            gradient: "gradient-hero",
            icon: <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          }, {
            title: "Premium Residential Projects",
            description: "Luxury residential construction with premium finishes and modern amenities.",
            gradient: "gradient-warm",
            icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          }, {
            title: "Government Contracts",
            description: "Large-scale infrastructure projects executed with precision and compliance.",
            gradient: "gradient-sunset",
            icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          }].map((service, index) => <Card key={index} className="group hover:shadow-premium transition-premium border-0 shadow-lg overflow-hidden">
                <div className={`${service.gradient} h-16 sm:h-24 flex items-center justify-center`}>
                  {service.icon}
                </div>
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-primary md:text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-900 md:text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Client Testimonials
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary md:text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-4 sm:p-8">
                  <blockquote className="text-base sm:text-lg text-slate-900 md:text-muted-foreground italic mb-4 sm:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary md:text-foreground text-sm sm:text-base">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-slate-800 md:text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-sophisticated text-white shadow-premium border-0">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Build Your Dream?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl opacity-95 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Let's transform your vision into an architectural masterpiece. 
                Get started with a free consultation today.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button variant="warm" size="lg" className="group">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Index;