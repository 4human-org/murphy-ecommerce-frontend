"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center flex flex-col bg-neutral-100/75 h-fill bottom-0 w-screen">
      <nav className="flex flex-col p-4 space-y-4 ">
        <ul className="flex flex-row p-4 space-x-10 place-content-center">
          <Link href="/#">
            <li id="about"></li>About
          </Link>
          <Link href="/#">
            <li id="blog">Blog</li>
          </Link>
          <Link href="/#">
            <li id="jobs">Jobs</li>
          </Link>
          <Link href="/#">
            <li id="press">Press</li>
          </Link>
          <Link href="/#">
            <li id="accessibility">Accessibility</li>
          </Link>
          <Link href="/#">
            <li id="partners">Partners</li>
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
            <li id="github">G</li>
          </Link>
          <Link href="/#">
            <li id="youtube">Y</li>
          </Link>
        </ul>
      </nav>
      <small id="copyright" className="p-4">Copyright © {(() => new Date().getFullYear())()} Murphy Charitable Foundation Uganda, 501{"(c)"}3. All rights reserved.</small>
    </footer>
  );
}
