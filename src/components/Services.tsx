import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  DoorOpen, 
  Sun, 
  AirVent, 
  PaintBucket, 
  Utensils, 
  Factory,
  Wrench,
  Battery,
  Hammer
} from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Doors & Door Fittings",
    description: "Premium quality doors with all types of fittings including hinges, screws, and hardware accessories."
  },
  {
    icon: Battery,
    title: "Inverters & Batteries",
    description: "Reliable power backup solutions with high-quality inverters and long-lasting batteries."
  },
  {
    icon: Sun,
    title: "Solar Systems",
    description: "Complete solar panel installation and maintenance services for sustainable energy solutions."
  },
  {
    icon: AirVent,
    title: "AC Sales & Services",
    description: "Professional air conditioning sales, installation, repair, and maintenance services."
  },
  {
    icon: PaintBucket,
    title: "Interior Designing",
    description: "Creative interior design solutions to transform your living and working spaces."
  },
  {
    icon: Hammer,
    title: "False Ceiling",
    description: "Expert gypsum board installation and beautiful false ceiling designs."
  },
  {
    icon: Utensils,
    title: "Kitchen Cupboards & Modular Kitchen",
    description: "Custom-designed modular kitchens and storage solutions tailored to your needs."
  },
  {
    icon: Factory,
    title: "Aluminum Fabrication",
    description: "High-quality aluminum fabrication for windows, doors, and structural solutions."
  },
  {
    icon: Wrench,
    title: "Wall Drop Services",
    description: "Professional wall drop and partition services for efficient space management."
  }
];

export function Services() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-3 md:mb-4 text-black">Our Comprehensive Services</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            We offer a complete range of solutions for residential and commercial projects, delivering quality workmanship and exceptional customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-yellow-500/20 hover:border-yellow-500/50">
              <CardHeader>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-base md:text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
