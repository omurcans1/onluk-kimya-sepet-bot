// Yeni ürün veri yapısı: Kategoriler ve örnek ürünler
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "hijyenik-1",
    name: "Ultra Konsantre Yüzey Temizleyici",
    description: "Endüstriyel alanlar için güçlü, çevre dostu ve ekonomik yüzey temizleyici.",
    price: 299,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Ultra Konsantre Yüzey Temizleyici, endüstriyel alanlarda maksimum hijyen ve temizlik sağlar. Çevre dostu formülüyle ekonomik ve etkili bir çözüm sunar. Fabrika, depo, okul ve ofis gibi geniş alanlarda güvenle kullanılabilir.",
    warning: "Kullanım öncesi ürün etiketini dikkatlice okuyunuz. Çocukların erişemeyeceği yerde saklayınız. Göz ile temasından kaçınınız ve temas halinde bol su ile yıkayınız."
  },
  {
    id: "hijyenik-2",
    name: "Hijyenik Zemin Temizleme Solüsyonu",
    description: "Ofis, okul ve hastaneler için hızlı etki eden, kalıntı bırakmayan zemin temizleyici.",
    price: 249,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Hijyenik Zemin Temizleme Solüsyonu, ofis, okul ve hastanelerde hızlı ve kalıntı bırakmayan temizlik için idealdir. Yüzeylerde hijyen ve parlaklık sağlar, profesyonel temizlik ihtiyaçlarını karşılar.",
    warning: "Ürünü doğrudan cilt ile uzun süre temas ettirmeyiniz. Gıda maddelerinden uzak tutunuz. Göz ile temasında bol su ile yıkayınız."
  },
  {
    id: "hijyenik-3",
    name: "Çok Amaçlı Konsantre Temizleyici",
    description: "Mutfak, banyo ve tüm yüzeylerde güvenle kullanılabilen çok amaçlı temizlik ürünü.",
    price: 199,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Çok Amaçlı Konsantre Temizleyici, mutfak, banyo ve tüm yüzeylerde güvenle kullanılabilir. Güçlü formülüyle zorlu kirleri kolayca çıkarır ve hijyen sağlar.",
    warning: "Kullanım sonrası ellerinizi bol su ile yıkayınız. Çocuklardan uzak tutunuz. Göz ile temasında bol su ile yıkayınız."
  },
  {
    id: "hijyenik-4",
    name: "Konsantre Köpüklü Genel Temizleyici",
    description: "Geniş alanlarda etkili, yoğun köpüklü ve ekonomik genel temizlik ürünü.",
    price: 189,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Köpüklü Genel Temizleyici, geniş alanlarda yoğun köpük etkisiyle derinlemesine temizlik sunar. Endüstriyel ve ticari alanlarda hijyen için idealdir.",
    warning: "Ürünü doğrudan güneş ışığından koruyunuz. Cilt ile uzun süreli temastan kaçınınız. Göz ile temasında bol su ile yıkayınız."
  },
  {
    id: "hijyenik-5",
    name: "Konsantre Dezenfektanlı Çok Maksatlı Temizleyici",
    description: "Hijyen gerektiren tüm yüzeylerde güvenle kullanılabilen, dezenfektan katkılı çok amaçlı temizleyici.",
    price: 219,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Dezenfektanlı Çok Maksatlı Temizleyici, hijyen gerektiren tüm yüzeylerde etkili temizlik ve dezenfeksiyon sağlar. Çok amaçlı kullanımı ile zamandan tasarruf ettirir.",
    warning: "Ürünü başka kimyasallarla karıştırmayınız. Cilt ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  },
  {
    id: "hijyenik-6",
    name: "Konsantre Endüstriyel Bulaşık Sıvısı",
    description: "Endüstriyel mutfaklar için güçlü yağ ve kir sökücü konsantre bulaşık deterjanı.",
    price: 179,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Endüstriyel Bulaşık Sıvısı, endüstriyel mutfaklarda güçlü yağ ve kir sökücü etkisiyle hijyen sağlar. Ekonomik ve etkili temizlik için idealdir.",
    warning: "Yutulması halinde derhal doktora başvurunuz. Cilt ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  },
  {
    id: "hijyenik-7",
    name: "Konsantre Yüzey Dezenfektanı ve Mekân Parfümü",
    description: "Yüzeyleri dezenfekte ederken hoş koku bırakan, çift etkili temizlik ürünü.",
    price: 209,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Yüzey Dezenfektanı ve Mekân Parfümü, yüzeyleri dezenfekte ederken hoş bir koku bırakır. Çift etkili formülüyle temizlik ve ferahlık sağlar.",
    warning: "Alerjik reaksiyonlara karşı dikkatli kullanınız. Göz ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  },
  {
    id: "hijyenik-8",
    name: "Konsantre Beyazlatıcı",
    description: "Çamaşır ve yüzeylerde etkili, güçlü beyazlatıcı ve hijyen sağlayıcı.",
    price: 159,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Beyazlatıcı, çamaşır ve yüzeylerde güçlü beyazlatıcı ve hijyen sağlayıcı olarak kullanılır. Zorlu lekeleri kolayca çıkarır.",
    warning: "Ürünü başka temizlik ürünleriyle karıştırmayınız. Cilt ve göz ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  },
  {
    id: "hijyenik-9",
    name: "Konsantre Kireç ve Yosun Önleyici",
    description: "Kireç ve yosun oluşumunu önleyen, yüzeyleri koruyan konsantre ürün.",
    price: 169,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Kireç ve Yosun Önleyici, yüzeylerde kireç ve yosun oluşumunu önler. Uzun süreli koruma ve temizlik sağlar.",
    warning: "Kullanım sonrası yüzeyleri bol su ile durulayınız. Cilt ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  },
  {
    id: "hijyenik-10",
    name: "Paslanmaz Parlatıcı",
    description: "Paslanmaz yüzeylerde parlaklık ve koruma sağlayan özel formül.",
    price: 149,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Paslanmaz Parlatıcı, paslanmaz yüzeylerde parlaklık ve koruma sağlar. Endüstriyel ve ev kullanımı için uygundur.",
    warning: "Ürünü doğrudan sıcak yüzeylere uygulamayınız. Cilt ve göz ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  },
  {
    id: "hijyenik-11",
    name: "Konsantre Pas ve Korozyon Önleyici",
    description: "Metal yüzeylerde pas ve korozyonu önleyen, uzun ömürlü koruma sağlayan konsantre ürün.",
    price: 189,
    image: "/placeholder.jpeg",
    category: "Konsantre Hijyenik Genel Temizleyiciler",
    seoDescription: "Konsantre Pas ve Korozyon Önleyici, metal yüzeylerde pas ve korozyonu önler, uzun ömürlü koruma sağlar. Endüstriyel alanlarda güvenle kullanılabilir.",
    warning: "Ürünü başka kimyasallarla karıştırmayınız. Cilt ve göz ile temasında bol su ile yıkayınız. Çocuklardan uzak tutunuz."
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
