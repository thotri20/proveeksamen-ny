"use client";

import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Basket from '../components/Basket';
import CookieConsent from '../components/CookieConsent';
import Cookies from 'js-cookie';

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

  // Load basket from cookies when the component mounts
  useEffect(() => {
    const savedBasket = Cookies.get('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  // Save basket to cookies whenever it changes
  useEffect(() => {
    Cookies.set('basket', JSON.stringify(basket), { expires: 7 });
  }, [basket]);

  const handleAddToBasket = (product: { title: string; price: number }) => {
    setBasket([...basket, product]);
  };

  const handleRemoveFromBasket = (title: string) => {
    const index = basket.findIndex(item => item.title === title);
    if (index !== -1) {
      const newBasket = [...basket];
      newBasket.splice(index, 1);
      setBasket(newBasket);
    }
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
      <Basket items={basket} onRemoveFromBasket={handleRemoveFromBasket} />
      <CookieConsent />
    </div>
  );
};

export default Home;
