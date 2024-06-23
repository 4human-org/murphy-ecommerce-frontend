"use client";
import Link from "next/link";
// next/link signifies to Next.JS to pre-render the page it links to
// which helps speed up loading times for those pages
import {
  Instagram,
  Facebook,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";

// footer , nav, and small elements for semantic HTML and accessibility
export default function Footer() {
  const imgUrl = "/logo.webp";

  return (
    <footer className="h-fill bottom-0 flex w-screen flex-col bg-neutral-100/75 text-center">
      <nav className="md:flex md:flex-col md:space-y-4 md:p-4">
        <ul className="m-auto flex flex-wrap place-content-center p-6 md:flex-row md:space-x-10 md:p-4">
          <Link href="/about" target="_blank">
            <li id="about" className="m-2">
              About
            </li>
          </Link>
          <Link href="/contact" target="_blank">
            <li id="contact" className="m-2">
              Contact
            </li>
          </Link>
          <Link href="/faq" target="_blank">
            <li id="faq" className="m-2">
              FAQs
            </li>
          </Link>
          <Link href="/accessibility" target="_blank">
            <li id="accessibility" className="m-2">
              Accessibility
            </li>
          </Link>
          <Link href="/partners" target="_blank">
            <li id="partners" className="m-2">
              Partners
            </li>
          </Link>
          <Link href="/terms-of-use" target="_blank">
            <li id="terms-of-use" className="m-2">
              Terms of Use
            </li>
          </Link>
          <Link href="/privacy-policy" target="_blank">
            <li id="privacy-policy" className="m-2">
              Privacy Policy
            </li>
          </Link>
        </ul>
        <ul className="flex flex-wrap place-content-center space-x-10 p-4">
          <Link href="http://www.murphycharity.org/" target="_blank">
            <li id="website" className="m-2">
              {" "}
              <img className="h-6 rounded-full" src={imgUrl} />{" "}
            </li>
          </Link>
          <Link
            href="https://instagram.com/murphycharity_?igshid=MTI1ZDU5ODQ3Yw=="
            target="_blank"
          >
            <li id="instagram" className="m-2">
              {" "}
              <Instagram />{" "}
            </li>
          </Link>
          <Link
            href="https://www.facebook.com/murphycharityuganda/"
            target="_blank"
          >
            <li id="facebook" className="m-2">
              {" "}
              <Facebook />{" "}
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/in/murphy-charitable-foundation-uganda-70948b255/"
            target="_blank"
          >
            <li id="linkedin_profile" className="m-2">
              {" "}
              LinkedIn{" "}
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/company/murphy-charitable-foundation-uganda/"
            target="_blank"
          >
            <li id="linkedin_page" className="m-2">
              {" "}
              <Linkedin />{" "}
            </li>
          </Link>
          <Link
            href="https://www.tiktok.com/@murphycharity_?_t=8dUTaiyws1a&_r=1"
            target="_blank"
          >
            <li id="tiktok" className="m-2">
              {" "}
              <Music2 />{" "}
            </li>
          </Link>
          <Link href="https://twitter.com/murphycharity" target="_blank">
            <li id="twitter" className="m-2">
              {" "}
              <Twitter />{" "}
            </li>
          </Link>
          <Link href="https://www.youtube.com/@murphycharity" target="_blank">
            <li id="youtube" className="m-2">
              {" "}
              <Youtube />{" "}
            </li>
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
