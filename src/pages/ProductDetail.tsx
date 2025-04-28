import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Ürün Bulunamadı</h2>
            <p className="text-gray-500 mb-6">
              Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
            </p>
            <Button onClick={() => navigate(-1)}>Geri Dön</Button>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Ürün sepete eklendi",
      description: `${quantity} adet ${product.name} sepetinize eklendi.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-wrapper py-3">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-500 hover:text-kimya-blue"
          >
            <ArrowLeft size={16} className="mr-1" /> Geri
          </button>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="flex-grow bg-kimya-gray py-8">
        <div className="container-wrapper">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center"
                  style={{ maxHeight: '500px' }}
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                  <p className="text-gray-500">{product.description}</p>
                </div>
                
                <div className="p-4 bg-kimya-gray rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ambalaj:</span>
                    <span className="font-semibold">10L Bidon</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Kategori:</span>
                    <span className="font-semibold">
                      {product.category === 'hammadde' ? 'Endüstriyel Hammadde' : 'Temizlik Kimyasalı'}
                    </span>
                  </div>
                  {product.details?.density && (
                    <>
                      <Separator className="my-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Yoğunluk:</span>
                        <span className="font-semibold">{product.details.density}</span>
                      </div>
                    </>
                  )}
                  {product.details?.purity && (
                    <>
                      <Separator className="my-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Saflık:</span>
                        <span className="font-semibold">{product.details.purity}</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="border-t border-b py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Birim Fiyat</p>
                      <p className="text-2xl font-bold">{product.price.toLocaleString('tr-TR')} ₺</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleQuantityChange(1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full h-12 text-lg"
                  onClick={handleAddToCart}
                >
                  Sepete Ekle
                </Button>
                
                {/* Kullanım Alanları */}
                {product.details?.applications && product.details.applications.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Kullanım Alanları</h3>
                    <ul className="space-y-1">
                      {product.details.applications.map((app, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* SEO Açıklaması */}
                <div className="border-t pt-6 pb-2">
                  <h2 className="font-bold text-lg mb-2">Ürün Hakkında (SEO)</h2>
                  <p className="text-gray-700 mb-2">{product.seoDescription}</p>
                </div>
                
                {/* Uyarı Bilgisi */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h3 className="font-semibold text-yellow-800 mb-1">Dikkat!</h3>
                  <p className="text-gray-700 text-sm">{product.warning}</p>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="border-t p-6">
              <h2 className="font-bold text-xl mb-4">Teknik Bilgiler</h2>
              <p className="text-gray-600 mb-4">
                Tüm ürünlerimiz TSE ve ISO standartlarına uygun olarak üretilmektedir. Her 10 litrelik bidonumuzda ürün güvenlik bilgileri, 
                kullanım talimatları ve saklama koşulları detaylı şekilde belirtilmektedir.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-blue-800 mb-1">Güvenlik Bilgisi</h3>
                <p className="text-gray-600 text-sm">
                  Bu ürün, profesyonel/endüstriyel kullanım için tasarlanmıştır. Kullanım öncesi ürün güvenlik formunu inceleyiniz. 
                  Uygun ekipman ve koruyucu önlemler alınarak kullanılması tavsiye edilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
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

export default ProductDetail;
