import { useEffect } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
const Contact = () => {
  useScrollToTop();
  useEffect(() => {
    // Scroll to form when page loads (with a slight delay to ensure page is rendered)
    const timer = setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const contactInfo = [{
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: "auranexrealty@gmail.com",
    description: "Send us your project details"
  }, {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: "+91 8530253991",
    description: "Speak with our consultants"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    details: "Disha Vaibhav Complex, Aurangapura, Chh. Sambhajinagar",
    description: "Schedule an office visit",
    link: "https://share.google/49bMd1n2X4WXezVb4"
  }, {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    details: "Mon - Sat: 9:00 AM - 6:00 PM",
    description: "We're here to help"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-slate-950">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your vision into reality? Connect with our team of experts 
              and start your journey to architectural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours 
                  with a personalized response to your inquiry.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to connect with our team. We're here to answer your questions 
                  and guide you through every step of your project.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => <Card key={index} className="group hover:shadow-elegant transition-premium border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 gradient-hero rounded-lg text-white group-hover:scale-110 transition-premium">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary font-medium mb-1 hover:underline block"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-primary font-medium mb-1">
                              {info.details}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {/* CTA Cards */}
              <div className="mt-8 space-y-4">
                <Card className="gradient-sophisticated text-white shadow-elegant border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-display text-xl font-bold mb-2">
                      Contact Form
                    </h3>
                    <p className="mb-4 opacity-90">
                      Have a question or want to discuss a project? Send us a message.
                    </p>
                    <Button 
                      variant="warm" 
                      size="sm"
                      onClick={() => {
                        const formElement = document.getElementById('contact-form');
                        if (formElement) {
                          formElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                    >
                      Inquire Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
            question: "What is the typical project timeline?",
            answer: "Project timelines vary based on scope, but residential projects typically take 6-12 months, while commercial projects may take 12-18 months."
          }, {
            question: "Do you provide design services?",
            answer: "Yes, we offer comprehensive architectural design and consultation services as part of our full-service construction approach."
          }, {
            question: "What areas do you serve?",
            answer: "We serve in all areas and are equipped to handle projects across multiple locations with our expert team and proven project management capabilities."
          }, {
            question: "Do you handle permits and approvals?",
            answer: "Absolutely. We manage all necessary permits, approvals, and regulatory compliance as part of our project management service."
          }, {
            question: "What is your pricing structure?",
            answer: "Our pricing is competitive and transparent. We provide detailed quotes based on project scope, materials, and timeline. Contact us for a personalized estimate."
          }, {
            question: "Do you offer maintenance services?",
            answer: "Yes, we provide post-construction maintenance and support services to ensure your property remains in excellent condition for years to come."
          }].map((faq, index) => <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Contact;