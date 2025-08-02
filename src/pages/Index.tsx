import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Users, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Visionary Design",
      description: "Architectural excellence that breaks norms and sets new standards for luxury construction."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "People-First Approach",
      description: "We listen before we build, ensuring every project reflects our clients' dreams."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Boutique Experience",
      description: "Every project receives our undivided attention and premium craftsmanship."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Luxury Standards",
      description: "Premium materials, innovative technology, and unmatched attention to detail."
    }
  ];

  const testimonials = [
    {
      quote: "Auranex transformed our vision into an architectural masterpiece. Their attention to detail is unmatched.",
      author: "Priya Sharma",
      role: "Luxury Villa Owner"
    },
    {
      quote: "The boutique experience and transparency throughout the project was exceptional. Highly recommended.",
      author: "Rajesh Gupta", 
      role: "Commercial Developer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Why Choose Auranex
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Auranex Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just build structures – we craft legacies that define luxury and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-premium border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-premium">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                About Auranex
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Crafted with Soul,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Designed to Inspire
                </span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  Founded by civil engineer <strong className="text-primary">Swaraj Surana</strong>, 
                  Auranex Realty is more than a construction company — it's a vision brought to life.
                </p>
                <p>
                  We're on a mission to create spaces the city has never seen before, with a deep 
                  commitment to design excellence, transparency, and putting people first.
                </p>
              </div>
              <Link to="/about">
                <Button variant="premium" size="lg" className="group">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-hero shadow-premium p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <img 
                    src="/lovable-uploads/312ff991-ddfc-4d46-958b-58fdea8391dd.png" 
                    alt="Auranex Realty Logo" 
                    className="h-32 w-32 mx-auto mb-6 opacity-90"
                  />
                  <h3 className="font-display text-2xl font-bold mb-2">A New Era of Construction</h3>
                  <p className="text-lg opacity-90">Begins Here</p>
                </div>
              </div>
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              From residential luxury to commercial excellence, we deliver end-to-end construction services.
            </p>
            <Link to="/services">
              <Button variant="premium" size="lg" className="group">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Construction",
                description: "Residential & commercial projects with premium finishes and smart technology integration.",
                gradient: "gradient-hero"
              },
              {
                title: "Architectural Design", 
                description: "Innovative design solutions that blend aesthetics with functionality for maximum impact.",
                gradient: "gradient-gold"
              },
              {
                title: "Project Management",
                description: "End-to-end oversight ensuring timely delivery and quality excellence in every detail.",
                gradient: "gradient-sunset"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-premium transition-premium border-0 shadow-lg overflow-hidden">
                <div className={`${service.gradient} h-24`}></div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-sophisticated text-white shadow-premium border-0">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Your Dream?
              </h2>
              <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into an architectural masterpiece. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="group">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="premium" size="lg" className="group">
                    View Our Projects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
