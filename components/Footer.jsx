"use client";
import Link from "next/link";

export default function Footer() {
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
          <Link href="/#">
            <li id="facebook">F</li>
          </Link>
          <Link href="/#">
            <li id="instagram">I</li>
          </Link>
          <Link href="/#">
            <li id="twitter">X</li>
          </Link>
          <Link href="/#">
            <li id="youtube">Y</li>
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
