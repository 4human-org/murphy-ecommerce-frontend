"use client";

import { useEffect, useState } from "react";
import {getCart} from "../../utils/cartFunctions.js"
import CartItem from "./CartItem.jsx";
import CartPageBody from "./CartPageBody.jsx";
import EmptyCart from "./EmptyCart.jsx";

export default function CartPage() {
  const [checkoutList, setCheckoutList] = useState([]);

  const [cartItemAmount, setCartItemAmount] = useState(checkoutList.length);
  const itemText = cartItemAmount > 1 ? "ITEMS" : "ITEM";

  const products = checkoutList.map((product) => {
    return <CartItem
      key={product.productId}
      product={product}
      setCheckoutList={setCheckoutList}
    />
  });

  useEffect(() => {
    const savedList = getCart()
    setCheckoutList(savedList)
  }, [])

  useEffect(() => {
    setCartItemAmount(checkoutList.length);
  }, [checkoutList]);

  return cartItemAmount === 0 ? (
    <EmptyCart />
  ) : (
    <CartPageBody
      cartItemAmount={cartItemAmount}
      itemText={itemText}
      products={products}
      checkoutList={checkoutList}
    />
  );
}
