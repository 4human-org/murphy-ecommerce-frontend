'use client'

import { useState } from 'react';
import Tab from './Tab';

// Dummy text for description, sourcing, and social impact information
const lorem_ipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ProductInformation = ({ productInformation }) => {
  const { productName, price } = productInformation;
  // Quantity for how many items the user wants to add to the cart
  const [quantity, setQuantity] = useState(0);

  // Tab data for product information, replace content with future product data api information
  const tabs = [
    { id: 1, label: 'Description', content: `${lorem_ipsum}  1` },
    { id: 2, label: 'Sourcing', content: `${lorem_ipsum}  2` },
    { id: 3, label: 'Social Impact', content: `${lorem_ipsum}  3` },
  ];

  // Sets default tab to description
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // On click function that changes the active tab
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Will need global state or push to database to effectively add to cart so current functionality is not implemented
  const addToCart = () => {};

  // Renders tab data based on active tab
  const renderTabs = () => {
    return (
      <div className=' rounded py-4 mb-8'>
        <div className='flex'>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
        </div>
        <div className='mt-2'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? 'text-l w-3/4' : 'hidden'}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='border-solid rounded flex flex-col p-6 pt-16'>
      <h2 className='text-4xl text-nowrap font-bold mb-6'>{productName}</h2>
      <div className='text-2xl mb-10'>${price}</div>
      {renderTabs()}
      <div className='flex align-center'>
        <div className='space-x-12 text-2xl mx-5'>
          <span>
            <button
              onClick={() => {
                if (quantity == 0) return;
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
          </span>
          <span>{quantity}</span>
          <span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </span>
        </div>

        <button
          className='ml-10 bg-indigo-500 px-6 py-3 text-white rounded text-l font-bold'
          onClick={addToCart()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductInformation;
