import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, ArrowRight, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Skyline Luxury Residences",
      location: "Downtown District",
      type: "Residential Complex",
      area: "2.5 Acres",
      year: "2024",
      status: "Completed",
      image: "photo-1527576539890-dfa815648363",
      description: "A modern residential complex featuring luxury amenities and sustainable design principles.",
      tags: ["Luxury Living", "Sustainable", "Modern Architecture"]
    },
    {
      id: 2,
      title: "Metropolitan Business Center", 
      location: "Financial District",
      type: "Commercial Complex",
      area: "1.8 Acres",
      year: "2024",
      status: "Under Construction",
      image: "photo-1488972685288-c3fd157d7c7a",
      description: "State-of-the-art commercial space designed for the modern business landscape.",
      tags: ["Commercial", "Smart Building", "Premium Offices"]
    },
    {
      id: 3,
      title: "Elegant Villas Collection",
      location: "Hillside Community",
      type: "Luxury Villas",
      area: "5 Units",
      year: "2023",
      status: "Completed",
      image: "photo-1487958449943-2429e8be8625",
      description: "Exclusive collection of luxury villas with panoramic views and premium finishes.",
      tags: ["Luxury Villas", "Exclusive", "Premium Design"]
    },
    {
      id: 4,
      title: "Innovation Hub Complex",
      location: "Tech District",
      type: "Mixed-Use Development",
      area: "3.2 Acres",
      year: "2024",
      status: "Planning Phase",
      image: "photo-1496307653780-42ee777d4833",
      description: "Revolutionary mixed-use development combining workspace, retail, and residential.",
      tags: ["Mixed-Use", "Innovation", "Future-Ready"]
    },
    {
      id: 5,
      title: "Heritage Restoration Project",
      location: "Historic Quarter",
      type: "Renovation",
      area: "Historic Building",
      year: "2023",
      status: "Completed",
      image: "photo-1431576901776-e539bd916ba2",
      description: "Careful restoration of heritage architecture with modern luxury amenities.",
      tags: ["Heritage", "Restoration", "Historic Preservation"]
    },
    {
      id: 6,
      title: "Green Valley Residences",
      location: "Suburban District",
      type: "Eco-Friendly Housing",
      area: "4.1 Acres",
      year: "2024",
      status: "Under Construction",
      image: "photo-1459767129954-1b1c1f9b9ace",
      description: "Sustainable living community with eco-friendly design and green technologies.",
      tags: ["Eco-Friendly", "Sustainable", "Green Technology"]
    }
  ];

  const getStatusBadge = (status: string): "default" | "destructive" | "outline" | "secondary" => {
    const variants: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
      "Completed": "default",
      "Under Construction": "secondary", 
      "Planning Phase": "outline"
    };
    return variants[status] || "outline";
  };

  return (
    <div className="min-h-screen bg-background">
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
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Explore our collection of architectural masterpieces that showcase innovation, 
              luxury, and exceptional craftsmanship.
            </p>
            <Button variant="premium" size="lg" className="group">
              View All Projects
              <Eye className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-premium transition-premium border-0 shadow-lg overflow-hidden">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={getStatusBadge(project.status)}
                      className="shadow-md"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-premium">
                    <div className="absolute bottom-4 left-4">
                      <Button variant="warm" size="sm" className="group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-premium">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Ruler className="h-4 w-4 text-secondary" />
                      <span>{project.area} • {project.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero text-white shadow-premium border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-12">
                  <Badge variant="outline" className="mb-4 border-white/30 text-white">
                    Featured Project
                  </Badge>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                    Skyline Luxury Residences
                  </h2>
                  <p className="text-xl opacity-95 mb-8 leading-relaxed">
                    Our flagship residential project that redefined luxury living in the city. 
                    This architectural masterpiece combines sustainable design with premium amenities, 
                    setting new standards for modern residential construction.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "50+ Luxury Apartments",
                      "Rooftop Garden & Pool",
                      "Smart Home Technology",
                      "LEED Gold Certified"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="warm" size="lg" className="group">
                    Explore This Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80"
                    alt="Skyline Luxury Residences"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
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
          <Button variant="premium" size="lg" className="group">
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;