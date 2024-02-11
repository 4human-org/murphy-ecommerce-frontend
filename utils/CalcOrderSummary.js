export default function getOrderSummaryPrice(cartItems) {
  let total = 0;

  for (const item of cartItems) {
    const { quantity, price } = item;

    total += quantity * price;
  }

  return total;
}
