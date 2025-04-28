
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CartItem from '@/components/CartItem';
import AIBotChat from '@/components/AIBotChat';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();
  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-white border-b">
        <div className="container-wrapper py-3">
          <Link to="/" className="flex items-center text-gray-500 hover:text-kimya-blue">
            <ArrowLeft size={16} className="mr-1" /> Alışverişe Devam Et
          </Link>
        </div>
      </div>
      
      <div className="flex-grow bg-kimya-gray py-8">
        <div className="container-wrapper">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Sepetim</h1>
          
          {isEmpty ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-20 h-20 bg-kimya-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Sepetiniz Boş</h2>
              <p className="text-gray-500 mb-6">
                Sepetinizde henüz ürün bulunmuyor. Ürün eklemek için alışverişe başlayın.
              </p>
              <Link to="/products/hammadde">
                <Button>Alışverişe Başla</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 bg-kimya-blue text-white font-medium flex justify-between">
                    <span>Ürün</span>
                    <span>Toplam</span>
                  </div>
                  
                  {cartItems.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                  
                  <div className="p-4 flex justify-between">
                    <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-600">
                      Sepeti Temizle
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="font-bold text-lg mb-4">Sipariş Özeti</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ara Toplam</span>
                      <span>{totalPrice.toLocaleString('tr-TR')} ₺</span>
                    </div>
                    
                    <div className="flex justify-between text-green-600">
                      <span>İndirim</span>
                      <span>- {(totalPrice * 0.05).toLocaleString('tr-TR')} ₺</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-bold text-lg">
                      <span>Genel Toplam</span>
                      <span>{(totalPrice * 0.95).toLocaleString('tr-TR')} ₺</span>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 text-sm text-green-700 flex items-start">
                      <Check className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                      <span>Sepetinize özel %5 indirim uygulandı!</span>
                    </div>
                  </div>
                </div>
                
                <AIBotChat />
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-blue-800 mb-1">Satış Temsilcimiz</h3>
                  <p className="text-gray-600 text-sm">
                    Kimyager, yapay zeka destekli satış temsilcimizdir ve sepetinizdeki ürünlerle ilgili sorularınızı yanıtlayabilir, 
                    size özel indirimler sunabilir. Lütfen sorularınız için sohbet penceresini kullanın.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container-wrapper">
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Onluk Kimya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
