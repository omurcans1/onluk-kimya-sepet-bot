import React from 'react';

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-kimya-gray via-white to-blue-100">
    <section className="relative py-20 flex-1">
      <div className="absolute inset-0 bg-kimya-blue opacity-80 z-0" style={{clipPath: 'ellipse(80% 60% at 50% 0%)'}} />
      <div className="container-wrapper max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold tracking-widest text-white shadow-md border border-white/30 animate-fade-in mb-4">İletişim</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg animate-fade-in">Bize Ulaşın</h1>
          <p className="text-lg text-white/90 animate-fade-in delay-100 max-w-xl">
            Her türlü soru, görüş ve iş birliği talepleriniz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 bg-white/90 rounded-xl shadow-xl p-8 md:p-12 animate-slide-up">
          {/* İletişim Bilgileri */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h2 className="text-lg font-bold text-kimya-blue mb-1">Adres</h2>
              <p className="text-gray-700">Organize Sanayi Bölgesi, 34. Cadde No: 10<br />Ankara, Türkiye</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-kimya-blue mb-1">Telefon</h2>
              <a href="tel:+903121234567" className="text-blue-700 hover:underline font-semibold">+90 312 123 45 67</a>
            </div>
            <div>
              <h2 className="text-lg font-bold text-kimya-blue mb-1">E-posta</h2>
              <a href="mailto:info@onlukkimya.com" className="text-blue-700 hover:underline font-semibold">info@onlukkimya.com</a>
            </div>
          </div>
          {/* İletişim Formu */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-kimya-blue mb-1">Adınız Soyadınız</label>
              <input type="text" required className="w-full px-4 py-2 rounded-lg border border-kimya-blue focus:ring-2 focus:ring-blue-300 outline-none" placeholder="Adınız Soyadınız" />
            </div>
            <div>
              <label className="block text-sm font-medium text-kimya-blue mb-1">E-posta</label>
              <input type="email" required className="w-full px-4 py-2 rounded-lg border border-kimya-blue focus:ring-2 focus:ring-blue-300 outline-none" placeholder="E-posta adresiniz" />
            </div>
            <div>
              <label className="block text-sm font-medium text-kimya-blue mb-1">Mesajınız</label>
              <textarea required rows={4} className="w-full px-4 py-2 rounded-lg border border-kimya-blue focus:ring-2 focus:ring-blue-300 outline-none" placeholder="Mesajınızı yazın..." />
            </div>
            <button type="submit" className="w-full bg-kimya-blue text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-900 transition-all">Gönder</button>
          </form>
        </div>
      </div>
    </section>
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container-wrapper text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Onluk Kimya. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  </div>
);

export default Contact;
