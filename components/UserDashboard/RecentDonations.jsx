"use client";

import { useEffect, useState } from "react";
import DummyData from "../../utils/DummyData.js";

export default function RecentDonations() {

    const products = [
        { name: 'Product 1', quantity: 5, total: 130.0 },
        { name: 'Product 2', quantity: 5, total: 130.0 },
        { name: 'Product 3', quantity: 12, total: 130.0 },
      ];

      return (
        <div className="pl-80">
        <table className="table-auto w-2/5 h-6 overflow-y-auto">
        <thead>
          <tr className="h-10 w-full text-sm font-semibold text-left text-black uppercase bg-gray-200 border-b border-gray-300">
            <th colSpan="5" className="px-6">Recent Donations</th>
          </tr>
          <tr className="h-8 w-full text-xs font-semibold text-left text-gray-500 uppercase bg-gray-200 border-b border-gray-300">
            <th className="px-6">Product</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Total</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">{product.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      );
       
}