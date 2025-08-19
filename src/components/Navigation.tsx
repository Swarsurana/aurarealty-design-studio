import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/312ff991-ddfc-4d46-958b-58fdea8391dd.png" 
              alt="Auranex Realty Logo" 
              className="h-12 w-12 transition-smooth hover:scale-105"
            />
            <div className="font-display font-bold text-xl text-primary">
              Auranex Realty
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-smooth hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="premium" 
              size="sm" 
              onClick={() => {
                if (location.pathname === '/contact') {
                  const formElement = document.getElementById('contact-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  window.location.href = '/contact';
                }
              }}
            >
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2 shadow-elegant">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="premium" 
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    if (location.pathname === '/contact') {
                      const formElement = document.getElementById('contact-form');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                >
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;