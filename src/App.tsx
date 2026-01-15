import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ImageCarousel } from "./components/ImageCarousel";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackgroundSlideshow } from "./components/BackgroundSlideshow";
import { Gallery } from "./components/Gallery";

export default function App() {
  const [galleryCategory, setGalleryCategory] = useState<string | null>(null);

  const handleGalleryClick = (category: string) => {
    setGalleryCategory(category);
  };

  const handleGalleryClose = () => {
    setGalleryCategory(null);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundSlideshow />
      <Header onGalleryClick={handleGalleryClick} />
      <Hero />
      <ImageCarousel />
      <Services />
      <Contact />
      <Footer />
      
      {/* Gallery Modal */}
      {galleryCategory && (
        <Gallery category={galleryCategory} onClose={handleGalleryClose} />
      )}
    </div>
  );
}
