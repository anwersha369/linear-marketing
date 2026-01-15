import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import doorImage from "figma:asset/7670f6f7342f56bb2af41e0672833a54a1130650.png";
import solarImage from "figma:asset/7665c092a92d3fba55c59cf047fc4cc6a83369ec.png";
import acImage from "figma:asset/73238006f01dce052e30698a260d18ca59a2cd21.png";
import batteryImage from "figma:asset/01c56ee7e49751e664ab7276e3749635c22d0000.png";

const carouselImages = [
  {
    url: doorImage,
    title: "Premium Doors",
    description: "Wide range of door solutions for every space"
  },
  {
    url: batteryImage,
    title: "Inverters & Batteries",
    description: "Reliable power backup solutions"
  },
  {
    url: solarImage,
    title: "Solar Systems",
    description: "Sustainable energy for your home and business"
  },
  {
    url: acImage,
    title: "AC Sales & Services",
    description: "Professional installation and maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxNDUyNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Interior Designing",
    description: "Transform your living spaces"
  },
  {
    url: "https://images.unsplash.com/photo-1561208885-a4a5a0ccc359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneXBzdW0lMjBjZWlsaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2MTUwNjM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "False Ceiling",
    description: "Elegant ceiling designs"
  },
  {
    url: "https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY3VwYm9hcmQlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NjE1NTUzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Kitchen Cupboards",
    description: "Custom storage solutions"
  },
  {
    url: "https://images.unsplash.com/photo-1544614940-686234a602e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjE1MDk2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Modular Kitchen",
    description: "Modern kitchen designs that inspire"
  },
  {
    url: "https://images.unsplash.com/photo-1692769554502-849f71d38e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHdpbmRvdyUyMGZhYnJpY2F0aW9ufGVufDF8fHx8MTc2MTUwOTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Aluminum Fabrication",
    description: "Quality aluminum work for windows & doors"
  }
];

export function ImageCarousel() {
  return (
    <section className="py-12 md:py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 md:mb-12 text-black">Our Services Gallery</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 md:p-2">
                  <Card className="overflow-hidden group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
                        <div className="text-white">
                          <h3 className="text-white mb-0.5 md:mb-1 text-sm md:text-base">{image.title}</h3>
                          <p className="text-xs md:text-sm text-gray-200">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>
        
        {/* Mobile swipe hint */}
        <p className="text-center mt-4 text-xs text-gray-500 md:hidden">
          Swipe to see more
        </p>
      </div>
    </section>
  );
}
