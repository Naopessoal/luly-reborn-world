
import { MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luly-purple/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-luly-pink to-luly-purple bg-clip-text text-transparent">
                Meu Bebê Reborn
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Bonecas reborn artesanais feitas com amor para alegrar sua família ou coleção.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-600 hover:text-luly-accent-dark transition-colors">
                  Sobre a Luly
                </a>
              </li>
              <li>
                <a href="#detalhes" className="text-gray-600 hover:text-luly-accent-dark transition-colors">
                  Detalhes do Produto
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-600 hover:text-luly-accent-dark transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#comprar" className="text-gray-600 hover:text-luly-accent-dark transition-colors">
                  Como Comprar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/551996845708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>(19) 9684-5708</span>
              </a>
              <a 
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>@meu_bebe_reborn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Meu Bebê Reborn. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
