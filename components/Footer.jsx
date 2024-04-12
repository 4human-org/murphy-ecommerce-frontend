"use client";
import Link from "next/link";
// next/link signifies to Next.JS to pre-render the page it links to
// which helps speed up loading times for those pages
import { Instagram, Facebook, Linkedin, Music2, Twitter, Youtube } from 'lucide-react';

// footer , nav, and small elements for semantic HTML and accessibility
export default function Footer() {
  const imgUrl = "/logo.webp";

  return (
    <footer className="text-center flex flex-col bg-neutral-100/75 h-fill bottom-0 w-screen">
      <nav className="md:flex md:flex-col md:p-4 md:space-y-4">
        <ul className="p-6 md:flex md:flex-row md:p-4 md:space-x-10 md:place-content-center">
          <Link href="/#">
            <li id="about">About</li>
          </Link>
          <Link href="/#">
            <li id="contact">Contact</li>
          </Link>
          <Link href="/#">
            <li id="faq">FAQs</li>
          </Link>
          <Link href="/#">
            <li id="accessibility">Accessibility</li>
          </Link>
          <Link href="/#">
            <li id="partners">Partners</li>
          </Link>
          <Link href="/#">
            <li id="terms-of-use">Terms of Use</li>
          </Link>
          <Link href="/#">
            <li id="privacy-policy">Privacy Policy</li>
          </Link>
        </ul>
        <ul className="flex flex-row p-4 space-x-10 place-content-center">
          <Link href="http://www.murphycharity.org/">
            <li id="website"> <img className="rounded-full h-6" src={imgUrl} /> </li>
          </Link>
          <Link href="https://instagram.com/murphycharity_?igshid=MTI1ZDU5ODQ3Yw==">
            <li id="instagram"> <Instagram /> </li>
          </Link>
          <Link href="https://www.facebook.com/murphycharityuganda/">
            <li id="facebook"> <Facebook /> </li>
          </Link>
          <Link href="https://www.linkedin.com/in/murphy-charitable-foundation-uganda-70948b255/">
            <li id="linkedin_profile"> LinkedIn </li>
          </Link>
          <Link href="https://www.linkedin.com/company/murphy-charitable-foundation-uganda/">
            <li id="linkedin_page"> <Linkedin /> </li>
          </Link>
          <Link href="https://www.tiktok.com/@murphycharity_?_t=8dUTaiyws1a&_r=1">
            <li id="tiktok"> <Music2 /> </li>
          </Link>
          <Link href="https://twitter.com/murphycharity">
            <li id="twitter"> <Twitter /> </li>
          </Link>
          <Link href="https://www.youtube.com/@murphycharity">
            <li id="youtube"> <Youtube /> </li>
          </Link>
        </ul>
      </nav>
      <small id="copyright" className="p-4">
        Copyright © {(() => new Date().getFullYear())()} Murphy Charitable
        Foundation Uganda. All rights reserved.
      </small>
    </footer>
  );
}
