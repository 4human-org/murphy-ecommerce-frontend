"use client";

import { useEffect, useState } from "react";
import { getCart, incrementQuantity, decrementQuantity, removeFromCart } from "@/utils/CartManagement";
import CartItem from "./CartItem.jsx";
import CartPageBody from "./CartPageBody.jsx";
import EmptyCart from "./EmptyCart.jsx";

export default function CartPage() {
    const [checkoutList, setCheckoutList] = useState([]);
    const [cartItemAmount, setCartItemAmount] = useState(0);
    const itemText = cartItemAmount > 1 ? "ITEMS" : "ITEM";

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartItems = await getCart();
                const response = await fetch('http://localhost:3030/products/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(cartItems),
                });

                if (response.ok) {
                    const products = await response.json();
                    if (Array.isArray(products)) {
                        setCheckoutList(products);
                        setCartItemAmount(products.length);
                    } else {
                        console.error('Expected an array of products, but got:', products);
                    }
                } else {
                    console.error('Failed to fetch cart items:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const products = checkoutList.map((product) => (
        <CartItem
            key={product.ProductId}
            product={product}
            incrementQuantity={() => {
                incrementQuantity(product.ProductId);
            }}
            decrementQuantity={() => {
                decrementQuantity(product.ProductId);
            }}
            removeFromCart={() => {
                removeFromCart(product.ProductId);
            }}
        />
    ));

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
