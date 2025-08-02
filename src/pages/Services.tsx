import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Wrench, PenTool, Sparkles, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Residential & Commercial Construction",
      description: "Complete construction solutions from foundation to finishing, delivering spaces that exceed expectations.",
      features: ["Modern Architecture", "Smart Home Integration", "Sustainable Materials", "Premium Finishes"],
      gradient: "gradient-hero"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Luxury Villa Development",
      description: "Bespoke villa designs that redefine luxury living with personalized attention to every detail.",
      features: ["Custom Design", "Premium Amenities", "Landscaping", "Interior Styling"],
      gradient: "gradient-gold"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Real Estate Project Management",
      description: "End-to-end project oversight ensuring timely delivery and quality excellence.",
      features: ["Timeline Management", "Quality Control", "Vendor Coordination", "Progress Reporting"],
      gradient: "gradient-sunset"
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: "Architectural Design & Consultation",
      description: "Innovative design solutions that blend aesthetics with functionality for maximum impact.",
      features: ["3D Visualization", "Space Planning", "Design Consultation", "Permit Assistance"],
      gradient: "gradient-sophisticated"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Renovation & Space Makeovers",
      description: "Transform existing spaces into modern masterpieces with our renovation expertise.",
      features: ["Space Optimization", "Modern Upgrades", "Energy Efficiency", "Value Enhancement"],
      gradient: "gradient-hero"
    }
  ];

  const ctaItems = [
    "Start Your Dream Project",
    "Get a Free Consultation", 
    "View Our Signature Projects",
    "Discover the Auranex Difference"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Our Services
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Construction Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              From concept to completion, we deliver exceptional construction and design services 
              that transform visions into architectural masterpieces.
            </p>
            <Button variant="premium" size="lg" className="group">
              Explore Our Capabilities
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-premium transition-premium border-0 shadow-lg overflow-hidden">
                <CardHeader className={`${service.gradient} text-white p-8`}>
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:scale-110 transition-premium">
                      {service.icon}
                    </div>
                    <CardTitle className="font-display text-2xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Boutique Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project gets our full attention through our refined, client-focused approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Listen & Understand",
                description: "We start by understanding your vision, needs, and aspirations for the perfect space."
              },
              {
                step: "02", 
                title: "Design & Plan",
                description: "Our architects create detailed plans that bring your dreams to life with precision."
              },
              {
                step: "03",
                title: "Build & Deliver",
                description: "Expert construction teams execute every detail with luxury-grade quality and craftsmanship."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-premium">
                  {process.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
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
                Ready to Begin Your Project?
              </h2>
              <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into a luxury reality. 
                Schedule a consultation with our design experts today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {ctaItems.map((cta, index) => (
                  <Button key={index} variant="gold" size="lg" className="group">
                    {cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;