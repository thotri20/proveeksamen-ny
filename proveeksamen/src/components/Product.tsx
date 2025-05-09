// components/Product.tsx
import { useState } from 'react';

interface ProductProps {
  image: string;
  title: string;
  price: number;
  description: string;
  onAddToBasket: () => void;
}

const Product: React.FC<ProductProps> = ({ image, title, price, description, onAddToBasket }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-lg text-gray-700">${price.toFixed(2)}</p>
      <button
        className="mt-2 text-blue-500"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && <p className="mt-2 text-gray-600">{description}</p>}
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        onClick={onAddToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
