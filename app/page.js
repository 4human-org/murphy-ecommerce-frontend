import { Divide } from "lucide-react";
import Image from "next/image";
import CartPage from "../components/CartPage/CartPage.jsx";
import CategorySection from "../components/CategorySection/CategorySection.jsx";

export default function Home() {
  return (
    <main className="flex-col flex w-screen overflow-x-hidden scroll-smooth mt-12">
      <CartPage />
    </main>
  );
}
