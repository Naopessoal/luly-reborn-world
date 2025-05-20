
import { Check } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Toque suave",
      description: "Pele macia ao toque que se assemelha a um bebê real."
    },
    {
      title: "Olhos que fecham",
      description: "Olhos realistas que se fecham quando deitada."
    },
    {
      title: "Acompanha manta e mamadeira",
      description: "Kit completo com acessórios personalizados."
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sobre a Luly</h2>
          <div className="w-24 h-1 bg-luly-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-6">
              A <span className="font-semibold text-luly-accent-dark">Luly</span> é uma bebê reborn feita com todo carinho por artesãos experientes. Cada detalhe foi cuidadosamente trabalhado para proporcionar uma experiência realista e emocionante.
            </p>
            
            <p className="text-lg mb-6">
              Produzida com materiais de alta qualidade, nossa boneca reborn possui um toque macio que imita a pele delicada de um bebê de verdade. Seu cabelo é implantado fio a fio, dando uma aparência ainda mais natural.
            </p>

            <p className="text-lg">
              Cada Luly é única, com características personalizadas que a tornam especial. É o presente perfeito para quem ama bonecas realistas ou busca um objeto terapêutico de companhia.
            </p>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex p-4 bg-luly-gray rounded-xl">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-luly-peach flex items-center justify-center">
                    <Check className="h-6 w-6 text-luly-accent-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
