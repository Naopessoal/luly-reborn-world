
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const BabyCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/8310de16-fa98-4fbd-9027-570b33ec1c43.png",
      alt: "Boneca Reborn Luly - Deitada de frente"
    },
    {
      src: "/lovable-uploads/8ff5cc09-7f7c-4e0c-813d-5aaacb392201.png",
      alt: "Boneca Reborn Luly - Deitada de lado"
    },
    {
      src: "/lovable-uploads/6bfe56cf-faa0-4bec-a3d5-0a1f12eafdfe.png",
      alt: "Boneca Reborn Luly - Com acessórios"
    },
    {
      src: "/lovable-uploads/2b20d845-a0c5-420e-9fa7-cb6d52615b89.png",
      alt: "Boneca Reborn Luly - Vista detalhada"
    }
  ];

  return (
    <section className="py-12 bg-luly-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Conheça a Luly</h2>
          <div className="w-24 h-1 bg-luly-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Veja como cada detalhe da Luly foi cuidadosamente desenvolvido para 
            proporcionar uma experiência realista e afetuosa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2 md:p-6">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="rounded-lg shadow-md w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BabyCarousel;
