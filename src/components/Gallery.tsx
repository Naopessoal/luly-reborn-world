
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Placeholder images - replace with actual baby doll images
  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="detalhes" className="py-16 bg-luly-pink/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Conheça a Luly</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como cada detalhe da Luly foi cuidadosamente desenvolvido para proporcionar uma experiência realista e afetuosa.
          </p>
          <div className="w-24 h-1 bg-luly-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img 
              src={images[currentIndex]} 
              alt={`Boneca reborn Luly - Imagem ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="bg-white/70 hover:bg-white text-black rounded-full h-10 w-10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="bg-white/70 hover:bg-white text-black rounded-full h-10 w-10"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Indicator dots */}
            <div className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      currentIndex === index ? 'bg-luly-cta' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Thumbnail previews */}
          <div className="hidden md:flex mt-4 space-x-2 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-lg overflow-hidden border-2 ${
                  currentIndex === index ? 'border-luly-accent' : 'border-transparent'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
