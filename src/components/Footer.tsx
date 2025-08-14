import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Land Development & Plotting",
    "Premium Residential Projects",
    "Mixed-Use Developments", 
    "Government Contracts",
    "Infrastructure Projects",
    "Turnkey Solutions"
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/auranex_realty?igsh=MWJtenF4OGdicmcxZw%3D%3D&utm_source=qr" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/auranex-realty/" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/312ff991-ddfc-4d46-958b-58fdea8391dd.png" 
                alt="Auranex Realty Logo" 
                className="h-12 w-12"
              />
              <div className="font-display font-bold text-xl text-white">
                Auranex Realty
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Excellence in construction execution, delivering luxury spaces with 
              precision, integrity, and unmatched craftsmanship.
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Disha Vaibhav Complex, Aurangapura, Chh. Sambhajinagar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>auranexrealty@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Connect With Us</h3>
            <p className="text-white/70 text-sm mb-6">
              Follow us on social media for the latest updates on our projects and construction insights.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors group"
                  aria-label={social.name}
                >
                  <div className="text-white/70 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 2025 Auranex Realty. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>

        {/* Taglines */}
        <div className="mt-8 text-center">
          <p className="text-primary font-medium">
            "Luxury rooted in trust, crafted for the modern world"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;