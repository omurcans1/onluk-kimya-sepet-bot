
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Shield, Award, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Header from '@/components/Header';

const Index = () => {
  const featuredProducts = products.slice(0, 4); // İlk 4 ürün

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-kimya-blue text-white py-16">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Endüstriyel Kimyasallar<br />10'luk Bidonlarla
              </h1>
              <p className="text-lg opacity-90">
                Onluk Kimya olarak, endüstriyel alandaki ihtiyaçlarınıza yönelik hammadde ve temizlik ürünlerini uygun fiyatlarla sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products/hammadde">
                  <Button size="lg" className="bg-white text-kimya-blue hover:bg-kimya-gray">
                    Hammaddeler
                  </Button>
                </Link>
                <Link to="/products/temizlik">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kimya-blue">
                    Temizlik Kimyasalları
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-kimya-blue rounded-full opacity-20"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1616661317531-a0d8a7dd98d6?q=80&w=1974&auto=format&fit=crop" 
                  alt="Endüstriyel Kimyasallar" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-kimya-blue rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Neden Biz Section */}
      <section className="py-16 bg-white">
        <div className="container-wrapper">
          <h2 className="section-title text-center mb-12">Neden Onluk Kimya?</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-kimya-gray">
              <div className="bg-kimya-blue bg-opacity-10 p-4 rounded-full mb-4">
                <Beaker className="h-8 w-8 text-kimya-blue" />
              </div>
              <h3 className="font-bold text-lg mb-2">Kaliteli Ürünler</h3>
              <p className="text-gray-600">En yüksek standartlarda üretilmiş endüstriyel kimyasallar</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-kimya-gray">
              <div className="bg-kimya-blue bg-opacity-10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-kimya-blue" />
              </div>
              <h3 className="font-bold text-lg mb-2">Güvenli Ambalaj</h3>
              <p className="text-gray-600">Dayanıklı ve güvenli 10 litrelik HDPE bidonlar</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-kimya-gray">
              <div className="bg-kimya-blue bg-opacity-10 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-kimya-blue" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sertifikalı Ürünler</h3>
              <p className="text-gray-600">TSE ve ISO standartlarına uygun üretim</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-kimya-gray">
              <div className="bg-kimya-blue bg-opacity-10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-kimya-blue" />
              </div>
              <h3 className="font-bold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Türkiye'nin her yerine güvenli ve hızlı kargo</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Öne Çıkan Ürünler */}
      <section className="py-16 bg-kimya-gray">
        <div className="container-wrapper">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Öne Çıkan Ürünler</h2>
            <Link to="/products/hammadde" className="text-kimya-blue hover:underline flex items-center font-medium">
              Tüm ürünleri gör <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-wrapper">
          <div className="bg-kimya-blue rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Özel Teklifler İçin İletişime Geçin</h2>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Toplu alımlarda özel fiyat avantajlarından yararlanmak veya ürünlerimiz hakkında detaylı bilgi almak için müşteri temsilcilerimizle iletişime geçin.
            </p>
            <Button size="lg" className="bg-white text-kimya-blue hover:bg-kimya-gray">
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center mr-2">
                  <span className="text-kimya-blue font-bold text-lg">10</span>
                </div>
                <span className="font-bold text-xl">Onluk Kimya</span>
              </div>
              <p className="text-gray-400 text-sm">
                Endüstriyel kimyasallar ve temizlik ürünleri sektöründe hizmet veren Onluk Kimya, tüm ürünlerini 10 litrelik bidonlarda sunmaktadır.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Ürünler</h3>
              <ul className="space-y-2">
                <li><Link to="/products/hammadde" className="text-gray-400 hover:text-white">Endüstriyel Hammaddeler</Link></li>
                <li><Link to="/products/temizlik" className="text-gray-400 hover:text-white">Temizlik Kimyasalları</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Kurumsal</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">İletişim</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">İletişim</h3>
              <address className="text-gray-400 not-italic">
                <p className="mb-2">Organize Sanayi Bölgesi, 34. Cadde No: 10</p>
                <p className="mb-2">Ankara, Türkiye</p>
                <p>+90 312 123 45 67</p>
                <p>info@onlukkimya.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Onluk Kimya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
