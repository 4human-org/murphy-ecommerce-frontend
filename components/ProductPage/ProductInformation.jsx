"use client";

import { useState } from "react";
import Tab from "./Tab";
import {getCart} from "@/utils/CartManagement";

const ProductInformation = ({
  id,
  name,
  sourcing,
  price,
  imageUrl,
  categories,
  description,
  stock,
}) => {
  // Quantity for how many items the user wants to add to the cart
  const [quantity, setQuantity] = useState(0);

  // Tab data for product information, replace content with future product data api information
  const tabs = [
    { id: 1, label: "Description", content: `${description}  1` },
    { id: 2, label: "Sourcing", content: `${sourcing}  2` },
  ];

  // Sets default tab to description
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // On click function that changes the active tab
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  function addToCart(productId, quantity) {

    if (typeof window !== 'undefined') {

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({productId, quantity});
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      console.log('Item added to cart');
      console.log(getCart())
    }
  }

  // Renders tab data based on active tab
  const renderTabs = () => {
    return (
      <div className=" mb-8 rounded py-4">
        <div className="flex">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
        </div>
        <div className="mt-2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "text-l w-3/4" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col rounded border-solid p-6 pt-16">
      <h2 className="mb-6 text-nowrap text-4xl font-bold">{name}</h2>
      <div className="mb-10 text-2xl">${price}</div>
      {renderTabs()}
      <div className="align-center flex">
        <div className="mx-5 space-x-12 text-2xl">
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
          className="text-l ml-10 rounded bg-indigo-500 px-6 py-3 font-bold text-white"
          onClick={() => addToCart(id, quantity )}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductInformation;
