
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
      src: "/lovable-uploads/c296e19d-903d-48bf-bdfb-8809c110c68b.png",
      alt: "Boneca Reborn Luly - Vista lateral"
    },
    {
      src: "/lovable-uploads/d1f034b5-5a80-4ce4-ac76-a9483d249183.png",
      alt: "Boneca Reborn Luly - Vista de cima"
    },
    {
      src: "/lovable-uploads/efea8e54-a3f6-4ba5-bbf5-a55cedbcf8ef.png",
      alt: "Boneca Reborn Luly - Detalhe"
    }
  ];

  return (
    <section className="py-12 bg-luly-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Conheça a Luly em Detalhes</h2>
          <div className="w-24 h-1 bg-luly-accent mx-auto rounded-full"></div>
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
