
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  // Endüstriyel Hammaddeler Kategorisi
  {
    id: "h1",
    name: "Sodyum Hidroksit (NaOH)",
    category: "hammadde",
    description: "Endüstriyel saflıkta sodyum hidroksit (kostik soda), 10L bidon içerisinde.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1887&auto=format&fit=crop",
    details: {
      density: "2.13 g/cm³",
      purity: "%98",
      packaging: "10L HDPE bidon",
      applications: ["Sabun ve deterjan üretimi", "Kağıt hamuru işleme", "pH düzenleme", "Tekstil endüstrisi"],
    },
  },
  {
    id: "h2",
    name: "Sülfürik Asit (H2SO4)",
    category: "hammadde",
    description: "Endüstriyel saflıkta sülfürik asit çözeltisi, yüksek konsantrasyon.",
    price: 950,
    image: "https://images.unsplash.com/photo-1616338667827-5c94ca0c79da?q=80&w=1936&auto=format&fit=crop",
    details: {
      density: "1.84 g/cm³",
      purity: "%96",
      packaging: "10L asit dayanımlı bidon",
      applications: ["Akü üretimi", "Mineral işleme", "Metal temizleme", "Gübre üretimi"],
    },
  },
  {
    id: "h3",
    name: "Metanol (CH3OH)",
    category: "hammadde",
    description: "Yüksek saflıkta metil alkol, endüstriyel kullanım için.",
    price: 850,
    image: "https://plus.unsplash.com/premium_photo-1676325102583-0609fbc8a18b?q=80&w=1974&auto=format&fit=crop",
    details: {
      density: "0.792 g/cm³",
      purity: "%99.8",
      packaging: "10L güvenlik kapaklı bidon",
      applications: ["Çözücü olarak", "Yakıt katkısı", "Kimyasal sentez", "Biyodizel üretimi"],
    },
  },
  {
    id: "h4",
    name: "Hidroklorik Asit (HCl)",
    category: "hammadde",
    description: "Endüstriyel saflıkta hidroklorik asit çözeltisi.",
    price: 780,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
    details: {
      density: "1.2 g/cm³",
      purity: "%37",
      packaging: "10L asit dayanımlı bidon",
      applications: ["Metal yüzey işleme", "pH düzenleme", "Su arıtma", "Gıda işleme"],
    },
  },
  {
    id: "h5",
    name: "Etil Asetat (C4H8O2)",
    category: "hammadde",
    description: "Yüksek saflıkta etil asetat çözücüsü, laboratuvar ve endüstriyel kullanım için.",
    price: 1050,
    image: "https://images.unsplash.com/photo-1535932561002-564589fd2f2d?q=80&w=1964&auto=format&fit=crop",
    details: {
      density: "0.902 g/cm³",
      purity: "%99.5",
      packaging: "10L alev almaz bidon",
      applications: ["Boya çözücüsü", "Vernik üretimi", "Laboratuvar reaktifi", "Parfümeri"],
    },
  },
  {
    id: "h6",
    name: "Formaldehit (CH2O)",
    category: "hammadde",
    description: "Stabilize edilmiş formaldehit çözeltisi, %37 konsantrasyonda.",
    price: 890,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1969&auto=format&fit=crop",
    details: {
      density: "1.09 g/cm³",
      purity: "%37",
      packaging: "10L HDPE bidon",
      applications: ["Reçine üretimi", "Kimyasal sentez", "Dezenfektan üretimi", "Tekstil endüstrisi"],
    },
  },

  // Temizlik Kimyasalları Kategorisi
  {
    id: "t1",
    name: "Endüstriyel Yağ Çözücü",
    category: "temizlik",
    description: "Güçlü formüllü alkali bazlı yağ ve gres çözücü, endüstriyel temizlik için idealdir.",
    price: 680,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    details: {
      density: "1.05 g/cm³",
      purity: "Konsantre formül",
      packaging: "10L HDPE bidon",
      applications: ["Makine temizliği", "Zemin temizliği", "Ağır sanayi", "Gıda işleme alanları"],
    },
  },
  {
    id: "t2",
    name: "Köpük Kontrolü Ajanı",
    category: "temizlik",
    description: "Endüstriyel proseslerde köpük oluşumunu kontrol eden silikon bazlı ajan.",
    price: 1450,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1974&auto=format&fit=crop",
    details: {
      density: "0.98 g/cm³",
      purity: "%100",
      packaging: "10L bidon",
      applications: ["Tekstil işleme", "Kağıt üretimi", "Endüstriyel yıkama", "Atık su arıtma"],
    },
  },
  {
    id: "t3",
    name: "Alkali Temizlik Çözeltisi",
    category: "temizlik",
    description: "Yüksek alkali içeren güçlü temizlik çözeltisi.",
    price: 720,
    image: "https://plus.unsplash.com/premium_photo-1681276697325-55ec0401f08c?q=80&w=1974&auto=format&fit=crop",
    details: {
      density: "1.12 g/cm³",
      purity: "Konsantre formül",
      packaging: "10L HDPE bidon",
      applications: ["CIP sistemleri", "Gıda işleme ekipmanları", "Pastörizatörler", "Tank temizliği"],
    },
  },
  {
    id: "t4",
    name: "Kireç ve Pas Sökücü",
    category: "temizlik",
    description: "Asit bazlı güçlü kireç, pas ve mineral birikinti sökücü.",
    price: 830,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop",
    details: {
      density: "1.10 g/cm³",
      purity: "Konsantre formül",
      packaging: "10L asit dayanımlı bidon",
      applications: ["Isı değiştirici temizliği", "Buhar kazanları", "Su sistemleri", "Metal yüzey temizliği"],
    },
  },
  {
    id: "t5",
    name: "Endüstriyel Dezenfektan",
    category: "temizlik",
    description: "Kuaterner amonyum bileşikleri içeren geniş spektrumlu dezenfektan.",
    price: 950,
    image: "https://plus.unsplash.com/premium_photo-1661781048862-e9467e8e522e?q=80&w=1974&auto=format&fit=crop",
    details: {
      density: "1.01 g/cm³",
      purity: "%30 aktif madde",
      packaging: "10L HDPE bidon",
      applications: ["Gıda üretim alanları", "Sağlık tesisleri", "İlaç üretim alanları", "Genel sanitasyon"],
    },
  },
  {
    id: "t6",
    name: "Solvent Bazlı Temizleyici",
    category: "temizlik",
    description: "Hızlı kuruyan, iz bırakmayan solvent bazlı yüzey temizleyici.",
    price: 1150,
    image: "https://images.unsplash.com/photo-1598387200977-03a27442d71f?q=80&w=1976&auto=format&fit=crop",
    details: {
      density: "0.89 g/cm³",
      purity: "%99.9",
      packaging: "10L metal bidon",
      applications: ["Elektronik parça temizliği", "Hassas mekanik parçalar", "Baskı devre temizliği", "Optik ekipman"],
    },
  },
];

// Ürünleri kategorilerine göre filtreleme yardımcı fonksiyonu
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

// Bir ürünü ID'sine göre bulma yardımcı fonksiyonu
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
