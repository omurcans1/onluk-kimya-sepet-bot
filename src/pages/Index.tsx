import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Shield, Award, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 6) return 'İyi geceler';
  if (hour < 12) return 'Günaydın';
  if (hour < 18) return 'İyi günler';
  return 'İyi akşamlar';
};

const stats = [
  { label: 'Toplam Ürün', value: products.length },
  { label: 'Mutlu Müşteri', value: 1200 },
  { label: 'Tamamlanan Sipariş', value: 3500 },
  { label: 'Yıllık Deneyim', value: 8 },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4); // İlk 4 ürün
  const greeting = useMemo(getGreeting, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kimya-blue via-blue-900 to-blue-400 text-white py-20 relative overflow-hidden animate-fade-in">
        {/* Parlayan efektler */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-20 rounded-full blur-3xl z-0" />
        <div className="container-wrapper relative z-10">
          <div className="mb-4 text-lg font-semibold animate-slide-in-left">{greeting}, Onluk Kimya'ya hoş geldiniz!</div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text animate-fade-in">
                Endüstriyel Kimyasallar<br />10'luk Bidonlarla
              </h1>
              <p className="text-lg opacity-90 animate-fade-in delay-100">
                Onluk Kimya olarak, endüstriyel alandaki ihtiyaçlarınıza yönelik hammadde ve temizlik ürünlerini uygun fiyatlarla sunuyoruz.
              </p>
            </div>
            {/* 3D Atom Figürü */}
            <div className="relative flex justify-center items-center h-96 animate-slide-up">
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-72 drop-shadow-2xl">
                <circle cx="160" cy="160" r="40" fill="#4A90E2" className="animate-pulse" />
                <ellipse cx="160" cy="160" rx="100" ry="40" stroke="#fff" strokeWidth="4" fill="none" className="opacity-80 animate-spin-slow" />
                <ellipse cx="160" cy="160" rx="40" ry="100" stroke="#fff" strokeWidth="4" fill="none" className="opacity-60 animate-spin-reverse" />
                <ellipse cx="160" cy="160" rx="80" ry="20" stroke="#4A90E2" strokeWidth="2" fill="none" className="opacity-50 animate-spin-slow" />
                <circle cx="260" cy="160" r="8" fill="#fff" className="animate-pulse" />
                <circle cx="60" cy="160" r="8" fill="#fff" className="animate-pulse delay-200" />
                <circle cx="160" cy="60" r="8" fill="#fff" className="animate-pulse delay-400" />
                <circle cx="160" cy="260" r="8" fill="#fff" className="animate-pulse delay-600" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Animasyonlu İstatistikler */}
      <section className="bg-white py-8 border-b border-kimya-gray animate-fade-in">
        <div className="container-wrapper grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-kimya-blue animate-bounce-slow">{stat.value.toLocaleString()}</span>
              <span className="text-gray-700 mt-2 text-base md:text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-16 bg-gradient-to-br from-white via-kimya-gray/60 to-kimya-blue/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none animate-gradient-move opacity-30" style={{background: 'radial-gradient(circle at 60% 40%, #3b82f6 0%, transparent 70%)'}} />
        <div className="container-wrapper relative z-10">
          <h2 className="section-title text-center mb-12 animate-fade-in font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-kimya-blue to-blue-400">Neden Onluk Kimya?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: <Beaker className="h-10 w-10 text-kimya-blue animate-wiggle" />, title: 'Kaliteli Ürünler', desc: 'En yüksek standartlarda üretilmiş endüstriyel kimyasallar'
            },{
              icon: <Shield className="h-10 w-10 text-kimya-blue animate-wiggle delay-100" />, title: 'Güvenli Ambalaj', desc: 'Dayanıklı ve güvenli 10 litrelik HDPE bidonlar'
            },{
              icon: <Award className="h-10 w-10 text-kimya-blue animate-wiggle delay-200" />, title: 'Sertifikalı Ürünler', desc: 'TSE ve ISO standartlarına uygun üretim'
            },{
              icon: <Truck className="h-10 w-10 text-kimya-blue animate-wiggle delay-300" />, title: 'Hızlı Teslimat', desc: 'Türkiye\'nin her yerine güvenli ve hızlı kargo'
            }].map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-7 rounded-2xl bg-white/80 shadow-xl border border-kimya-gray/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up"
                style={{animationDelay: `${i * 120}ms`}}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-extrabold text-lg mb-2 bg-gradient-to-r from-kimya-blue to-blue-400 text-transparent bg-clip-text">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Öne Çıkan Ürünler Carousel */}
      <section className="py-16 bg-kimya-gray animate-fade-in">
        <div className="container-wrapper">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Öne Çıkan Ürünler</h2>
            <Link to="/products/hammadde" className="text-kimya-blue hover:underline flex items-center font-medium">
              Tüm ürünleri gör <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          {/* Carousel */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 min-w-[700px]">
              {featuredProducts.map((product) => (
                <div key={product.id} className="transition-transform duration-300 hover:scale-105">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
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
