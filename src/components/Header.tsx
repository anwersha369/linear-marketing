import { Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logoImage from "figma:asset/fdf31ec9018329d4f5816cf8bfc9792725258806.png";

interface HeaderProps {
  onGalleryClick: (category: string) => void;
}

export function Header({ onGalleryClick }: HeaderProps) {
  const galleryCategories = [
    "Solar",
    "Inverter and Battery",
    "Doors",
    "Interior designing",
    "False Ceiling",
    "Kitchen Cupboards & Modular Kitchen",
    "Aluminum Fabrication and Aluminum windows",
    "AC Sales & Services",
  ];
  
  return (
    <header className="bg-white border-b-4 border-yellow-500 sticky top-0 z-50 shadow-md">
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-3 md:gap-4">
            <a href="tel:9744400089" className="hover:text-yellow-400 transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span>9744400089</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href="mailto:contact.linearmarketing@zohomail.com" 
              className="hover:text-yellow-400 transition-colors hidden sm:flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span>contact.linearmarketing@zohomail.com</span>
            </a>
          </div>
          <div className="text-yellow-400">
            Serving all across Kerala
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img src={logoImage} alt="Linear Marketing Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <div>
              <h1 className="text-xl md:text-2xl text-black">Linear Marketing</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Complete Home & Business Solutions</p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
                Gallery
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 md:w-80">
              {galleryCategories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => onGalleryClick(category)}
                  className="cursor-pointer"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}