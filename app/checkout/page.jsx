"use client"
import { useEffect, useState } from "react"
import {getCart} from "../../utils/cartFunctions.js"
import OrderSummary from "components/CartPage/OrderSummary"
import getOrderSummaryPrice from "utils/CalcOrderSummary.js";

export default function Page() {
    const [cart, setCart] = useState([])
    const [checkoutPrice, setCheckoutPrice] = useState(
        getOrderSummaryPrice(cart).toFixed(2),
      );
    const [shippingAddress, setShippingAddress] = useState({
        line1: "John Doe",
        line2: "123 Main Avenue",
        line3: "Manhatthan, NY XXXXX-XXXX",
    })

    useEffect(() => {
        const savedCart = getCart()
        setCart(savedCart)
    }, [])

    useEffect(() => {
        setCheckoutPrice(getOrderSummaryPrice(cart).toFixed(2));
      }, [cart]);


    const elements = cart.map((cartItem) => {
        console.log(cartItem);
        const { productName, price, imageURL, quantity, productId} = cartItem
        return (
          <div className="mx-2 my-1 flex max-h-36 rounded-2xl text-sm font-medium text-neutral-900 hover:bg-gray-50">
            <img
              src={
                imageURL
                  ? imageURL
                  : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
              }
              className="h-auto w-36 rounded-2xl object-cover object-center p-2.5 "
            />
            <div className="flex grow flex-col justify-center p-4">
              <div className="flex justify-between">
                <h3 className="text-base font-semibold">{productName}</h3>
                <span className="flex items-center font-semibold">${price}</span>
              </div>
              <div>
                Quantity: {quantity}  
              </div>
            </div>
          </div>
        )
    })

    return (
        <div className="px-40 py-20 flex flex-row justify-between">
            <div className="flex flex-col w-full mr-20">
                <div className="bg-gray-100 flex flex-col p-10 rounded-md my-2">
                    <strong className="text-3xl">
                        1 — Shipping Address
                    </strong>
                    <div className="flex justify-between">
                        <div className="text-center pt-5">
                            <p>{shippingAddress.line1}</p>
                            <p>{shippingAddress.line2}</p>
                            <p>{shippingAddress.line3}</p>
                        </div>
                        <button className="bg-gray-200 px-10 rounded-full">
                            Change Shipping Address
                        </button>
                    </div>
                </div>
                <hr/>
                <div className="bg-gray-100 p-10 flex flex-col rounded-md my-2">
                    <strong className="text-3xl">
                        2 — Payment Method
                    </strong>
                    <div className="pt-5">
                        <p>Payment Method 1</p>
                        <p>Payment Method 2</p>
                        <p>Payment Method 3</p>
                    </div>
                </div>
                <hr/>
                <div className="bg-gray-100 p-10 rounded-md my-2">
                    <strong className="text-3xl">
                        3 — Review Items and Shipping
                    </strong>
                    <div className="pt-5 flex flex-col">
                        {elements}
                    </div>
                </div>
                <hr/>
                <button className="bg-blue-200 rounded-md py-6 text-xl">
                    Place Order
                </button>
            </div>
            <OrderSummary
                checkoutList={cart}
                checkoutPrice={checkoutPrice}
            />
        </div>  
    )
}