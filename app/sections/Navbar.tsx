"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { baseImagePath } from "@/utils/Constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarClass = "bg-white w-full z-20 top-0 left-0 border-gray-200";
  // const menuClass =
  //   "text-gray-600 py-2 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-4 lg:px-3 lg:py-2.5 ml-4 focus:outline-none hover:bg-gray-100";
  const hamburgerMenuClass =
    "block py-2 pl-3 pr-4 border-b text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0";

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleHamburgerMenuIcon = () => {
    return (
      !isOpen && (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          ></path>
        </svg>
      )
    );
  };

  return (
    <>
    <div id="navbar-container">
    <div id="navbar-wrapper">
      <nav id="navbar" className={navbarClass}>
        <div id="navbar-content" className="w-full mx-auto flex flex-wrap items-center p-4 lg:pl-12 max-w-screen-2xl">
          <button
            id="sidebar-toggle-button"
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {handleHamburgerMenuIcon()}
          </button>
          <Link href="/" id="logo-link" className="flex items-center">
            <Image
              id="logo-image"
              src={`${baseImagePath}/sovio_logo.svg`}
              alt="SOVIO Logo"
              width={40}
              height={32}
              className="w-auto"
              priority
            />
          </Link>
          <div className="ml-auto flex space-x-4">

<Link
target="_blank"
   href="https://studio.sovio.id/"
   id="signin-link"
   className="ml-3 hover:bg-primary-400 bg-transparent ring-2 text-gray-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ring-primary-600"
 >
   Sign In
 </Link>
 <Link
 target="_blank"
   href="https://verify.sovio.id/"
   id="signup-link"
   className="bg-primary-600 hover:bg-primary-800 focus:ring-4 text-gray-900 focus:ring-primary-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ring-2 ring-primary-600"
 >
   Verification Portal
 </Link>
 </div>
          {/* TODO: Uncomment or update these links/buttons once the corresponding accounts are not created.
          <div id="desktop-menu" className="hidden lg:block ml-2">
            <Link href="/" id="pricing-link" className={menuClass}>
              Pricing
            </Link>
            <Link href="/" id="documentation-link" className={menuClass}>
              Documentation
            </Link>
            <Link href="/" id="solutions-link" className={menuClass}>
              Solutions
            </Link>
          </div>
          <div id="auth-buttons" className="flex md:order-2 ml-auto sm:mt-0 mt-4 space-x-4 justify-center items-center">
            <Link href="/" id="github-link" target="_blank" className="hidden md:block">
              <Image
                id="github-logo"
                className="text-gray-800 hover:text-gray-800"
                src={`${baseImagePath}/github_logo.svg`}
                alt="github_logo"
                width={28}
                height={20}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <Link href="/" id="twitter-link" className="hidden md:block" target="_blank">
              <Image
                id="twitter-logo"
                className="text-gray-800 hover:text-gray-800"
                src={`${baseImagePath}/twitter_logo.svg`}
                alt="twitter_logo"
                width={28}
                height={20}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
  
            <Link
              href="/"
              id="signin-link"
              className="ml-3 hover:bg-primary-400 bg-transparent ring-2 text-gray-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ring-primary-600"
            >
              Sign In
            </Link>
            <Link
              href="/"
              id="signup-link"
              className="bg-primary-600 hover:bg-primary-800 focus:ring-4 text-gray-900 focus:ring-primary-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ring-2 ring-primary-600"
            >
              Sign Up
            </Link>
          </div> */}
        </div>
      </nav>
    </div>
    <div id="sidebar-container">
      <aside
        id="default-sidebar"
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 z-30 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="default-sidebar"
      >
        <div id="sidebar-content" className="h-full px-3 py-4 overflow-y-auto bg-primary-50">
          <div id="sidebar-close-btn" className="flex justify-end">
            <svg
              id="close-icon"
              className="h-6 w-6 text-gray-500"
              onClick={closeSidebar}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div
            className="lg:hidden shadow-md fixed z-10 top-16 pr-4 font-medium border border-gray-100 rounded-lg bg-gray-50"
            id="navbar-sticky"
          >
            <ul
              id="sidebar-menu"
              className="flex flex-col justify-between py-4"
              style={{ minHeight: "calc(100vh - 4rem)" }}
            >
              <li id="sidebar-pricing-link">
                <Link href="/" className={hamburgerMenuClass}>
                  Pricing
                </Link>
              </li>
              <li id="sidebar-documentation-link">
                <Link href="/" className={hamburgerMenuClass}>
                  Documentation
                </Link>
              </li>
              <li id="sidebar-solutions-link">
                <Link href="/" className={hamburgerMenuClass}>
                  Solutions
                </Link>
              </li>
              <li id="sidebar-footer" className="mt-auto">
                <div className="flex flex-wrap items-center mx-auto justify-between">
                  <a
                    id="find-us-text"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-800 md:p-0"
                  >
                    Find us at
                  </a>
  
                  <Link href="/" target="_blank" id="sidebar-github-link" className="md:block ml-8">
                    <Image
                      id="sidebar-github-logo"
                      className="text-gray-800 hover:text-gray-800"
                      src={`${baseImagePath}/github_logo.svg`}
                      alt="github_logo"
                      width={20}
                      height={20}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </Link>
  
                  <Link href="/" className="md:block ml-2" target="_blank" id="sidebar-twitter-link">
                    <Image
                      id="sidebar-twitter-logo"
                      className="text-gray-800 hover:text-gray-800"
                      src={`${baseImagePath}/twitter_logo.svg`}
                      alt="twitter_logo"
                      width={20}
                      height={20}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
    </>
    
  
  );
};

export default Navbar;
