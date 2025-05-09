"use client"
import { useState } from 'react';
import Product from '../components/Product';
import Basket from '../components/Basket';

const products = [
  {
    image: '/path/to/image1.jpg',
    title: 'Product 1',
    price: 29.99,
    description: 'This is a great product.',
  },
  {
    image: '/path/to/image2.jpg',
    title: 'Product 2',
    price: 49.99,
    description: 'This is another great product.',
  },
  {
    image: '/path/to/image3.jpg',
    title: 'Product 3',
    price: 19.99,
    description: 'This is yet another great product.',
  },
  // Add more products as needed
];

const Home: React.FC = () => {
  const [basket, setBasket] = useState<{ title: string; price: number }[]>([]);

  const handleAddToBasket = (product: { title: string; price: number }) => {
    setBasket([...basket, product]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Product
            key={index}
            {...product}
            onAddToBasket={() => handleAddToBasket({ title: product.title, price: product.price })}
          />
        ))}
      </div>
      <Basket items={basket} />
    </div>
  );
};

export default Home;
