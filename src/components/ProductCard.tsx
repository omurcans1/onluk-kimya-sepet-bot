import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors duration-200"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">Ürün açıklaması buraya gelecek veya kaldırılacak.</p> {/* Açıklama eklenebilir veya bu satır kaldırılabilir */}
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-xl text-gray-900">{product.price.toLocaleString('tr-TR')} ₺</span>
          <Button
            size="sm"
            variant="outline"
            className="h-9 px-4"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Sepete Ekle
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
