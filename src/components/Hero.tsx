import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import construction1 from "@/assets/construction-1.webp";
import construction2 from "@/assets/construction-2-new.webp";
import construction3 from "@/assets/construction-3.webp";
import construction4 from "@/assets/construction-4.webp";
import construction5 from "@/assets/construction-5.webp";
const Hero = () => {
  const slides = [{
    image: construction1,
    title: "Luxury Residential Excellence",
    subtitle: "Premium living spaces that redefine modern comfort"
  }, {
    image: construction2,
    title: "Commercial Development Leadership",
    subtitle: "Building the future of business infrastructure"
  }, {
    image: construction3,
    title: "Villa Construction Mastery",
    subtitle: "Exclusive homes crafted with precision and care"
  }, {
    image: construction4,
    title: "Mixed-Use Innovation",
    subtitle: "Integrated developments for modern communities"
  }, {
    image: construction5,
    title: "Infrastructure Excellence",
    subtitle: "Government projects delivered with expertise"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>)}
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)} className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm" aria-label="Previous slide">
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>
      
      <button onClick={nextSlide} onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)} className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm" aria-label="Next slide">
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-white/40"}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Dynamic slide content */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl text-primary font-semibold mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="text-white/90 text-base sm:text-lg">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Luxury Rooted in{" "}
            <span className="text-primary drop-shadow-lg">
              Trust
            </span>,{" "}
            <br className="hidden sm:block" />
            <span className="block sm:inline">Crafted for the{" "}</span>
            <span className="text-primary drop-shadow-lg">
              Modern World
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4">
            Excellence in construction execution, delivered with precision and integrity.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="orange" size="lg" className="group shadow-2xl" asChild>
              <Link to="/contact">
                Start Your Dream Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="sophisticated" size="lg" className="group shadow-2xl" asChild>
              
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;