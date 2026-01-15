import { Phone, Mail, MapPin } from "lucide-react";
import logoImage from "figma:asset/fdf31ec9018329d4f5816cf8bfc9792725258806.png";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <img src={logoImage} alt="Linear Marketing Logo" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-white text-base md:text-lg">Linear Marketing</h3>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Your trusted partner for doors, solar systems, AC services, interior designing, and complete home solutions in Puthuparamba.
            </p>
          </div>
          
          <div>
            <h4 className="text-yellow-400 mb-3 md:mb-4 text-sm md:text-base">Our Services</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
              <li>Doors & Door Fittings</li>
              <li>Solar Systems & Batteries</li>
              <li>AC Sales & Services</li>
              <li>Interior Designing</li>
              <li>Modular Kitchen</li>
              <li>Aluminum Fabrication</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow-400 mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <a 
                href="tel:9744400089"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>9744400089</span>
              </a>
              
              <a 
                href="mailto:contact.linearmarketing@zohomail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="break-all">contact.linearmarketing@zohomail.com</span>
              </a>
              
              <a
                href="https://maps.app.goo.gl/kb2dGYyWCqpqfGEPA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Ottathengu, Puthuparamba</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Linear Marketing. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href="https://www.linearmarketing.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              www.linearmarketing.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
