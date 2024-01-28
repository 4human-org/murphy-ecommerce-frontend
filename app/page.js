import { Divide } from "lucide-react";
import Image from "next/image";
import CategoryDisplaySection from "@/components/CategoryDisplaySection";

export default function Home() {
  return (
    <main className="flex-col flex w-screen overflow-x-hidden scroll-smooth"> 
      <CategoryDisplaySection />
      <CategoryDisplaySection />
    </main>
  );
}
