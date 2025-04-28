
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
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
    >
      <div className="relative pb-[80%] bg-kimya-gray">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-kimya-blue">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">10L Bidon</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{product.price.toLocaleString('tr-TR')} ₺</span>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-8 gap-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Sepete Ekle</span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
