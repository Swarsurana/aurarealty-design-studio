import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
const Projects = () => {
  useScrollToTop();
  // Currently no active projects - all upcoming opportunities

  const getStatusBadge = (status: string): "default" | "destructive" | "outline" | "secondary" => {
    const variants: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
      "Upcoming": "secondary"
    };
    return variants[status] || "outline";
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Our Portfolio
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Signature{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-slate-950">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Explore our collection of architectural masterpieces that showcase innovation, 
              luxury, and exceptional craftsmanship.
            </p>
            <Link to="/contact">
              
            </Link>
          </div>
        </div>
      </section>

      {/* No Current Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Card className="max-w-3xl mx-auto gradient-sophisticated text-white shadow-premium border-0 overflow-hidden">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                    Projects Coming Soon
                  </h2>
                  <p className="text-xl opacity-95 mb-8 leading-relaxed">
                    We are currently in the process of finalizing several exciting projects. 
                    This section will be updated soon with our upcoming developments. Stay tuned for luxury construction projects that will redefine excellence.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold mb-1">Any Location</h3>
                      <p className="text-sm opacity-80">We work across regions</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <Ruler className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <h3 className="font-semibold mb-1">Any Scale</h3>
                      <p className="text-sm opacity-80">From villas to complexes</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <Eye className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold mb-1">Your Vision</h3>
                      <p className="text-sm opacity-80">We execute your dreams</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to="/contact">
                      
                    </Link>
                    <Link to="/contact">
                      
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Projects Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Future Projects
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We're Ready to Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From luxury residences to commercial complexes, we're equipped to handle projects of any scale and complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            title: "Luxury Residences",
            description: "Premium residential complexes with world-class amenities",
            icon: <MapPin className="h-8 w-8 text-primary" />
          }, {
            title: "Commercial Complexes",
            description: "Modern office spaces and retail developments",
            icon: <Ruler className="h-8 w-8 text-primary" />
          }, {
            title: "Infrastructure Projects",
            description: "Government contracts and public infrastructure",
            icon: <Calendar className="h-8 w-8 text-accent" />
          }, {
            title: "Mixed-Use Developments",
            description: "Integrated living, working, and entertainment spaces",
            icon: <Eye className="h-8 w-8 text-primary" />
          }].map((item, index) => <Card key={index} className="group hover:shadow-premium transition-premium border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-premium">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same excellence and attention to detail.
          </p>
          <Link to="/contact#contact-form">
            <Button variant="premium" size="lg" className="group">
              Inquire Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Projects;