import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Wrench, PenTool, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
const Services = () => {
  useScrollToTop();
  const services = [{
    icon: <Building className="h-12 w-12" />,
    title: "Land Development & Plotting",
    description: "Strategic land development and plotting services for residential and commercial projects with proper infrastructure.",
    features: ["Site Planning", "Infrastructure Development", "Utility Installation", "Land Plotting"],
    gradient: "gradient-hero"
  }, {
    icon: <Home className="h-12 w-12" />,
    title: "Premium Residential & Mixed-Use Developments",
    description: "Luxury residential construction and mixed-use developments that combine living, retail, and office spaces.",
    features: ["Luxury Apartments", "Mixed-Use Complexes", "Premium Amenities", "Smart Infrastructure"],
    gradient: "gradient-warm"
  }, {
    icon: <Wrench className="h-12 w-12" />,
    title: "Government Contracts & Infrastructure",
    description: "Large-scale infrastructure projects and government contracts executed with precision and compliance.",
    features: ["Public Infrastructure", "Road Construction", "Municipal Projects", "Compliance Management"],
    gradient: "gradient-sunset"
  }, {
    icon: <Sparkles className="h-12 w-12" />,
    title: "Turnkey Solutions",
    description: "Complete end-to-end construction solutions from planning to handover with full project management.",
    features: ["Complete Project Management", "Quality Assurance", "Timely Delivery", "Post-Construction Support"],
    gradient: "gradient-warm"
  }];
  const ctaItems = ["Start Your Dream Project", "Get a Free Consultation", "View Our Signature Projects", "Discover the Auranex Difference"];
  return <div className="min-h-screen bg-background">
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
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-slate-950">
                Construction Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              From land development to turnkey solutions, we deliver comprehensive construction services 
              that transform concepts into reality through expert execution.
            </p>
            <Link to="/contact">
              
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-premium transition-premium border-0 shadow-lg overflow-hidden">
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
                      {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project receives our complete attention through our systematic, quality-focused approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            step: "01",
            title: "Listen & Plan",
            description: "We understand your requirements and develop comprehensive execution plans."
          }, {
            step: "02",
            title: "Execute & Monitor",
            description: "Our expert teams execute projects with continuous quality monitoring and progress tracking."
          }, {
            step: "03",
            title: "Deliver & Support",
            description: "Quality construction delivered on time with comprehensive post-completion support."
          }].map((process, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-premium">
                  {process.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>)}
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
                <Link to="/contact">
                  <Button variant="warm" size="lg" className="group" onClick={() => {
                  setTimeout(() => {
                    const formElement = document.getElementById('contact-form');
                    if (formElement) {
                      formElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }, 100);
                }}>
                    Get Quote Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/projects">
                  
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Services;