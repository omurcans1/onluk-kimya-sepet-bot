import React from 'react';

const About = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-kimya-gray via-white to-blue-100">
    <section className="relative py-20 flex-1">
      <div className="absolute inset-0 bg-kimya-blue opacity-80 z-0" style={{clipPath: 'ellipse(80% 60% at 50% 0%)'}} />
      <div className="container-wrapper max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold tracking-widest text-white shadow-md border border-white/30 animate-fade-in">Kurumsal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg animate-fade-in">Hakkımızda</h1>
          <p className="text-lg mb-8 text-white/90 animate-fade-in delay-100">
            Onluk Kimya, endüstriyel kimyasallar ve temizlik ürünleri alanında yenilikçi, güvenilir ve sürdürülebilir çözümler sunmak amacıyla kurulmuştur. Sektördeki uzun yıllara dayanan tecrübemiz ve uzman kadromuz ile müşterilerimizin ihtiyaçlarına en uygun ürünleri, yüksek kalite standartlarında ve rekabetçi fiyatlarla sunuyoruz.
          </p>
        </div>
        <div className="bg-white/90 rounded-xl shadow-xl p-8 md:p-12 space-y-6 animate-slide-up">
          <div>
            <h2 className="text-2xl font-bold text-kimya-blue mb-2">Misyonumuz</h2>
            <p>
              Endüstriyel tesislerden tekstil fabrikalarına, gıda işletmelerinden otomotiv sektörüne kadar geniş bir yelpazede, güvenli ve etkili kimyasal ürünlerle iş ortaklarımızın verimliliğini artırmak ve sürdürülebilir üretime katkı sağlamaktır.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-kimya-blue mb-2">Vizyonumuz</h2>
            <p>
              Türkiye’nin ve bölgenin lider endüstriyel kimyasal tedarikçisi olmak; yenilikçi ürünlerimiz, hızlı lojistik ağımız ve müşteri odaklı hizmet anlayışımız ile sektörde fark yaratmaktır.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-kimya-blue mb-2">Değerlerimiz</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><b>Kalite ve Güven:</b> Tüm ürünlerimiz ulusal ve uluslararası standartlara uygun olarak üretilir ve test edilir.</li>
              <li><b>Müşteri Memnuniyeti:</b> Her zaman çözüm odaklı, hızlı ve şeffaf iletişim ile müşteri memnuniyetini ön planda tutarız.</li>
              <li><b>Sürdürülebilirlik:</b> Çevreye duyarlı üretim ve tedarik zinciri yönetimi ile sürdürülebilir bir gelecek için çalışırız.</li>
              <li><b>Yenilikçilik:</b> Ar-Ge yatırımlarımız ve sürekli gelişim anlayışımız ile sektöre değer katarız.</li>
            </ul>
          </div>
          <div className="text-center mt-6">
            <span className="inline-block bg-kimya-blue text-white px-6 py-3 rounded-full font-semibold shadow-md animate-bounce-slow">Güvenilir Kimya, Sürdürülebilir Gelecek</span>
          </div>
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

export default About;