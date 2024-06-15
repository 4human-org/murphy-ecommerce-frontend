"use client";
import AllProducts from "../../../../components/AdminDashboard/AllProducts";
import AddProductForm from "../../../../components/AdminDashboard/AddProductForm";

export default function Page() {
  return (
    <div className="flex flex-col">
      <AddProductForm />
      <AllProducts />
    </div>
  );
}
