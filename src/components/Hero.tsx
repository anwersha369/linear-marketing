import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";
import solarImage from "figma:asset/ae36bd4022326a212921d1fc10e39ff29778f820.png";
import doorsImage from "figma:asset/d7f3e8679b939cf17ace78f1fab4b07a419e0413.png";
import batteryImage from "figma:asset/01c56ee7e49751e664ab7276e3749635c22d0000.png";

const heroImages = [
  {
    src: solarImage,
    alt: "Solar Panel Installation"
  },
  {
    src: doorsImage,
    alt: "Premium Doors Collection"
  },
  {
    src: batteryImage,
    alt: "Amaron Batteries"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4 sm:mb-6">
            Transform Your Space with Linear Marketing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            From doors to solar systems, AC services to modular kitchens, we provide comprehensive solutions for all your home and business needs across Kerala.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a href="tel:9744400089" className="w-full sm:w-auto">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 w-full sm:w-auto">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </Button>
            </a>
            
            <a
              href="https://maps.app.goo.gl/kb2dGYyWCqpqfGEPA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-yellow-500 hover:bg-yellow-500/20 w-full sm:w-auto">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
