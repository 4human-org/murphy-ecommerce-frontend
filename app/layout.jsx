import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MURPHY CHARITABLE FOUNDATION UGANDA",
  description: "Since its establishment in 2018, Murphy Charitable Foundation Uganda has made a significant impact on the lives of over 10,000 impoverished individuals in East-Northern Uganda. Through a diverse range of programs, including pen pal initiatives, women empowerment, youth empowerment, cancer awareness, child sponsorship, entrepreneurship, community outreaches, capacity building, mentoring, and community research on poverty levels in families, our organization has worked tirelessly to serve our communities and improve their well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{overflowX: "hidden"}}>
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
