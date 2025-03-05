import { baseImagePath } from "@/utils/Constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="p-4 py-10 md:py-12 bg-gray-200 mx-auto">
      <div id="footer-content" className="mx-auto max-w-screen-xl text-center">
        <a
          id="footer-title"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
          <Image
              id="logo-image"
              src={`${baseImagePath}/sovio_logo.svg`}
              alt="SOVIO Logo"
              width={40}
              height={32}
              className="w-auto"
              priority
            />
        </a>
        <p id="footer-description" className="my-6 mb-4 text-gray-700">
        Sovio builds decentralized identity solutions at population scale, enabling privacy-enhancing identities and digital credentials.

        </p>
        <span
          id="footer-rights"
          className="mt-8 text-sm text-gray-700 sm:text-center"
        >
          &copy; 2015-{new Date().getFullYear()}{" "}
          <a
            id="footer-company-link"
            href="https://ayanworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-2"
          >
            AYANWORKS TECHNOLOGY SOLUTIONS PRIVATE LIMITED &nbsp; | &nbsp;
          </a>
          All Rights Reserved. &nbsp; | &nbsp;
          <Link
          target="_blank"
            id="footer-terms-link"
            href="/terms-and-conditions"
            className="hover:underline hover:underline-offset-2"
          >
            Terms of Use
          </Link>
          &nbsp; &nbsp;
          <Link
           target="_blank"
            id="footer-privacy-link"
            href="/privacy-policy"
            className="hover:underline hover:underline-offset-2"
          >
            Privacy Policy
          </Link>
        </span>

      </div>
    </footer>
  );
};

export default Footer;
