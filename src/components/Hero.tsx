
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/lovable-uploads/91cf2a7b-b48a-4c2b-9538-28bcd070af79.png",
    "/lovable-uploads/973b5710-7164-4e2a-86a9-5cf0f76d0b3e.png",
    "/lovable-uploads/e2d01f3b-cf98-4f2b-a9f5-298e99d6b56f.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden baby-gradient">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        {/* Hero text */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Conheça a boneca que parece um bebê de verdade!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Feita à mão com muito carinho e realismo.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <a href="#comprar">
              <Button className="bg-luly-cta hover:bg-luly-cta/80 transition-colors text-white font-medium px-8 py-6 text-lg rounded-full button-bounce w-full md:w-auto">
                Quero Meu Bebê 👶
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Hero images - carousel effect */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-md">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-luly-pink/50 blur-3xl transform -translate-y-4"></div>
                <img 
                  src={image} 
                  alt={`Boneca Reborn Luly - Imagem ${index + 1}`} 
                  className={`relative z-10 rounded-2xl shadow-lg w-full ${
                    currentImage === index ? "animate-float" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
