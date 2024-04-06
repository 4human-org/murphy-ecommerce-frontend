"use client";
import { useEffect, useState } from "react";
import data from "DummyData";
export default function RecentDonations() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // This useEffect() is for local testing production database
  // useEffect(() => {
  //   if (products.length === 0) {
  //     fetch("http://localhost:3030/[userID.product_history]")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProducts(data);
  //         console.log(data);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }
  // }, []);

  // This useEffect is for local testing on dummy data only
  useEffect(() => {
    setProducts(data);
  }, []);

  // Generate the table
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((product, index) => (
      <tr key={index}>
        <td className="px-6 py-4">{product.name}</td>
        <td className="px-6 py-4">{product.quantity}</td>
        <td className="px-6 py-4">{product.total}</td>
      </tr>
    ));

  // Generate pagination buttons
  const buttons = [
    ...Array(Math.ceil(products.length / itemsPerPage)).keys(),
  ].map((number) => (
    <button className="px-2" key={number} onClick={() => paginate(number + 1)}>
      {number + 1}
    </button>
  ));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="h-6 w-3/5 table-auto overflow-y-auto">
        <thead>
          <tr className="h-10 w-full border-b border-gray-300 bg-gray-200 text-left text-sm font-semibold uppercase text-black">
            <th colSpan="5" className="px-6">
              Recent Donations
            </th>
          </tr>
          <tr className="h-8 w-full border-b border-gray-300 bg-gray-200 text-left text-xs font-semibold uppercase text-gray-500">
            <th className="px-6">Product</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-200">
          {currentItems}
        </tbody>
      </table>
      <div className="m-2 flex flex-row ">{buttons}</div>
    </div>
  );
}
