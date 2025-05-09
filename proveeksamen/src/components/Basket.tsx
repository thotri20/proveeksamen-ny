"use client"
interface BasketItem {
  title: string;
  price: number;
}

interface BasketProps {
  items: BasketItem[];
  onRemoveFromBasket: (title: string) => void;
}

const Basket: React.FC<BasketProps> = ({ items, onRemoveFromBasket }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border p-4 rounded-lg shadow-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Basket</h2>
      {items.length === 0 ? (
        <p className="text-gray-700">Your basket is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
              <button
                className="ml-4 bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => onRemoveFromBasket(item.title)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-lg font-bold mt-2">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Basket;
