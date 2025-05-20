
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    paymentMethod: 'creditCard'
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.address || !formData.phone || !formData.email) {
      toast({
        title: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would submit the order to a backend
    toast({
      title: "Pedido enviado com sucesso!",
      description: "Você receberá instruções de pagamento por e-mail em breve.",
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-heading font-bold text-xl md:text-2xl bg-gradient-to-r from-luly-pink to-luly-purple bg-clip-text text-transparent">
              Meu Bebê Reborn
            </span>
          </Link>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Seu Carrinho Encantado</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Informações para envio</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome completo <span className="text-luly-cta">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luly-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Endereço completo <span className="text-luly-cta">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luly-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone / WhatsApp <span className="text-luly-cta">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luly-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail (para envio de rastreio) <span className="text-luly-cta">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luly-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Formas de pagamento</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="creditCard"
                          name="paymentMethod"
                          value="creditCard"
                          checked={formData.paymentMethod === 'creditCard'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-luly-accent"
                        />
                        <label htmlFor="creditCard" className="ml-2">
                          Cartão de crédito (em até 3x sem juros)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="pix"
                          name="paymentMethod"
                          value="pix"
                          checked={formData.paymentMethod === 'pix'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-luly-accent"
                        />
                        <label htmlFor="pix" className="ml-2">
                          Pix (5% de desconto)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="bankSlip"
                          name="paymentMethod"
                          value="bankSlip"
                          checked={formData.paymentMethod === 'bankSlip'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-luly-accent"
                        />
                        <label htmlFor="bankSlip" className="ml-2">
                          Boleto bancário
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    type="submit"
                    className="w-full bg-luly-cta hover:bg-luly-cta/80 text-white font-medium py-6 text-lg rounded-full button-bounce"
                  >
                    Finalizar Compra
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Ao finalizar sua compra, você concorda com nossos termos e condições.
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6">Resumo do pedido</h2>
              
              <div className="flex items-center space-x-4 pb-6 border-b">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-luly-pink/20">
                  <img src="/placeholder.svg" alt="Boneca Reborn Luly" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium">Boneca Reborn Luly</h3>
                  <p className="text-sm text-gray-500">
                    Roupinha rosa com manta e mamadeira personalizada
                  </p>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>R$ 127,77</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-4 border-t mt-4">
                  <span>Total</span>
                  <span>R$ 127,77</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-luly-gray rounded-xl text-sm">
                <p className="font-medium mb-2">Importante:</p>
                <p>Após o pagamento, você receberá atualizações por e-mail e WhatsApp.</p>
              </div>
              
              <div className="mt-6 flex flex-col space-y-3">
                <a 
                  href="https://wa.me/551996845708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-green-600 hover:text-green-700 transition-colors"
                >
                  <WhatsApp className="h-4 w-4 mr-2" />
                  <span>Dúvidas? Fale no WhatsApp</span>
                </a>
                
                <div className="flex items-center justify-center text-gray-500 text-xs">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  <span>Compra segura com criptografia SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-luly-purple/10 py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Meu Bebê Reborn. Todos os direitos reservados.</p>
          <p className="mt-2">💝 Produzido artesanalmente com amor</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
