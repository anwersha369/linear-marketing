import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface GalleryProps {
  category: string;
  onClose: () => void;
}

// Gallery images organized by category
const galleryData: Record<string, Array<{ url: string; title: string }>> = {
  "Solar": [
    { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276", title: "Solar Panel Installation 1" },
    { url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d", title: "Solar Panel Installation 2" },
    { url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d", title: "Solar Panel Installation 3" },
    { url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e", title: "Solar Panel Installation 4" },
    { url: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a", title: "Solar Panel Installation 5" },
    { url: "https://images.unsplash.com/photo-1592833159056-c8c4c94bb7d3", title: "Solar Panel Installation 6" },
  ],
  "Inverter and Battery": [
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", title: "Inverter System 1" },
    { url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7", title: "Battery Backup 1" },
    { url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4", title: "Power Inverter 1" },
    { url: "https://images.unsplash.com/photo-1609139003121-5b421f0ecd9f", title: "Battery Installation 1" },
    { url: "https://images.unsplash.com/photo-1585435465961-f5d9c8d7a2c4", title: "Inverter Setup 1" },
    { url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04", title: "Battery System 1" },
  ],
  "Doors": [
    { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", title: "Premium Door 1" },
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", title: "Wooden Door 1" },
    { url: "https://images.unsplash.com/photo-1614649024145-7f847b1c803f", title: "Modern Door 1" },
    { url: "https://images.unsplash.com/photo-1534237886190-ced735ca4b73", title: "Door Design 1" },
    { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6", title: "Interior Door 1" },
    { url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", title: "Door Installation 1" },
  ],
  "Interior designing": [
    { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", title: "Modern Interior 1" },
    { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", title: "Living Room Design 1" },
    { url: "https://images.unsplash.com/photo-1615873968403-89e068629265", title: "Interior Design 1" },
    { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace", title: "Modern Living Space 1" },
    { url: "https://images.unsplash.com/photo-1600210492493-0946911123ea", title: "Interior Decor 1" },
    { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", title: "Home Interior 1" },
  ],
  "False Ceiling": [
    { url: "https://images.unsplash.com/photo-1561208885-a4a5a0ccc359", title: "False Ceiling Design 1" },
    { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", title: "Gypsum Ceiling 1" },
    { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", title: "Ceiling Design 1" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", title: "Modern Ceiling 1" },
    { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", title: "False Ceiling Installation 1" },
    { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea", title: "Ceiling Work 1" },
  ],
  "Kitchen Cupboards & Modular Kitchen": [
    { url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1", title: "Modular Kitchen 1" },
    { url: "https://images.unsplash.com/photo-1556911220-bff31c812dba", title: "Kitchen Design 1" },
    { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136", title: "Kitchen Cabinets 1" },
    { url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d", title: "Modern Kitchen 1" },
    { url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a", title: "Kitchen Cupboards 1" },
    { url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4", title: "Kitchen Interior 1" },
  ],
  "Aluminum Fabrication and Aluminum windows": [
    { url: "https://images.unsplash.com/photo-1621905252472-b5be7f8a1565", title: "Aluminum Window 1" },
    { url: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12", title: "Aluminum Fabrication 1" },
    { url: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54", title: "Window Installation 1" },
    { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", title: "Aluminum Work 1" },
    { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea", title: "Modern Windows 1" },
    { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", title: "Aluminum Doors 1" },
  ],
  "AC Sales & Services": [
    { url: "https://images.unsplash.com/photo-1631545804659-28faa1a6e09c", title: "AC Installation 1" },
    { url: "https://images.unsplash.com/photo-1634554291960-41c8c7e6d1e6", title: "Air Conditioner 1" },
    { url: "https://images.unsplash.com/photo-1585953894988-1fddef3f8e4e", title: "AC Service 1" },
    { url: "https://images.unsplash.com/photo-1620735692151-26a7e0739d05", title: "AC Maintenance 1" },
    { url: "https://images.unsplash.com/photo-1635274857992-dc0d85c80e1a", title: "AC Unit 1" },
    { url: "https://images.unsplash.com/photo-1628744404012-454a5c57e00c", title: "Air Conditioning 1" },
  ],
};

export function Gallery({ category, onClose }: GalleryProps) {
  const images = galleryData[category] || [];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl mb-2">{category}</h2>
              <p className="text-gray-400 text-sm">Browse our collection of {category.toLowerCase()} projects</p>
            </div>
            <Button
              onClick={onClose}
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer bg-gray-900 border-gray-800">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{image.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No images available for this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
