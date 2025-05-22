
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading font-bold text-2xl bg-gradient-to-r from-luly-pink to-luly-purple bg-clip-text text-transparent">
              Meu Bebê Reborn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#sobre" className="font-medium hover:text-luly-accent transition-colors">
              Sobre
            </a>
            <a href="#detalhes" className="font-medium hover:text-luly-accent transition-colors">
              Detalhes
            </a>
            <a href="#depoimentos" className="font-medium hover:text-luly-accent transition-colors">
              Depoimentos
            </a>
            <a href="#comprar" className="font-medium hover:text-luly-accent transition-colors">
              Comprar
            </a>
            <a href="https://link.bynetglobal.com.br/BebeReborn_fretegratis" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="ml-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-luly-cta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <a href="https://link.bynetglobal.com.br/BebeReborn_fretegratis" target="_blank" rel="noopener noreferrer" className="mr-2">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-luly-cta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </Button>
            </a>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-2 pb-4 border-t">
            <div className="flex flex-col space-y-4">
              <a 
                href="#sobre" 
                className="px-4 py-2 hover:bg-luly-pink/20 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#detalhes" 
                className="px-4 py-2 hover:bg-luly-pink/20 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Detalhes
              </a>
              <a 
                href="#depoimentos" 
                className="px-4 py-2 hover:bg-luly-pink/20 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#comprar" 
                className="px-4 py-2 hover:bg-luly-pink/20 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Comprar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
