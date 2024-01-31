import { Divide } from "lucide-react";
import Image from "next/image";
import CategorySection from "@/components/CategorySection.jsx";

export default function Home() {
  return (
    <main className="flex-col flex w-screen overflow-x-hidden scroll-smooth mt-12">
      <CategorySection sectionHeader="Recommended Items" />
      <CategorySection sectionHeader="Popular Items" />
    </main>
  );
}
