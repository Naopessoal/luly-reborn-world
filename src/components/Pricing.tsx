
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="comprar" className="py-16 baby-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leve a Luly para casa</h2>
          <div className="w-24 h-1 bg-luly-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Faça seu pedido agora e receba a Luly com todo carinho e cuidado que ela merece.
            Temos condições especiais para você.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end mb-6">
              <div className="text-center md:text-left">
                <span className="block text-sm text-gray-500 mb-1">Preço especial</span>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-4xl font-bold">R$ 127,77</span>
                  <span className="ml-2 text-gray-500 line-through text-sm">R$ 150,00</span>
                </div>
              </div>
              <span className="bg-luly-cta/10 text-luly-cta text-xs font-semibold px-3 py-1 rounded-full md:ml-auto mt-2 md:mt-0">
                15% OFF
              </span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-luly-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Em até 4x sem juros de R$ 31,94</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-luly-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Boneca reborn artesanal</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-luly-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Roupinha rosa com manta</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-luly-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Mamadeira personalizada</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-luly-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Frete grátis para todo Brasil</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-luly-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Garantia de 30 dias</span>
              </div>
            </div>

            <Link to="/cart">
              <Button 
                className="w-full bg-luly-cta hover:bg-luly-cta/80 text-white font-medium py-6 text-lg rounded-full button-bounce"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
            </Link>

            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento seguro e processamento rápido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
