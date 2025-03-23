"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative">
          <div className="min-w-max inline-flex relative">
            <Link href="/" className="relative flex items-center gap-3">
              <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
                <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45" />
                <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45" />
                <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45" />
                <span className="absolute w-2 h-2 rounded-full bg-gray-900 dark:bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="inline-flex text-lg font-semibold text-gray-900 dark:text-white">
                Taekwondo Academy
              </div>
            </Link>
          </div>
          <div
            onClick={() => {
              closeNavbar();
            }}
            aria-hidden="true"
            className={`
                    fixed inset-0 bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl
                    ${openNavbar ? "flex lg:hidden" : "hidden"}
                `}
          />
          <div
            className={`
                    flex  overflow-hidden duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-x border-x-gray-100 dark:border-x-gray-900 lg:border-x-0
                    ${
                      openNavbar
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0  translate-y-10 lg:visible lg:opacity-100  lg:-translate-y-0"
                    }
                `}
          >
            <ul className="border-t border-gray-100 dark:border-gray-900 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-8 text-lg text-gray-700 dark:text-gray-300 w-full lg:justify-center lg:items-center">
              <li>
                <Link
                  href="/"
                  className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-max flex items-center gap-x-3">
            <button className="outline-none flex relative text-gray-700 dark:text-gray-300 rounded-full p-2 lg:p-3 border border-gray-100 dark:border-gray-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:flex hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <span className="sr-only">switch theme</span>
            </button>
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="lg:hidden lg:invisible  outline-none w-7 h-auto flex flex-col relative"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`
              w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ease-linear
              ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
            `}
              />
              <span
                className={`
              w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 origin-center  mt-1  transition-all duration-300 ease-linear
              ${openNavbar ? "scale-x-0 opacity-0" : ""}
            `}
              />
              <span
                className={`
              w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 mt-1 transition-all duration-300 ease-linear
              ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
            `}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 lg:pt-36">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-gray-900 dark:text-white"
            >
              Martial Art{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                Taekwondo
              </span>{" "}
              is the Best Ever.
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              repellat perspiciatis aspernatur quis voluptatum porro incidunt,
              libero sequi quos eos velit
            </p>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 dark:border-gray-900  lg:border-0 px-6 lg:px-0">
                  <Link
                    href="/sign-in"
                    className="flex justify-center items-center w-full sm:w-max md:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                  >
                    <span className="relative z-10 text-white">
                      Get Started
                    </span>
                  </Link>
                </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/images/taekwondo.png"
              alt="Hero image"
              width={2350}
              height={2359}
              priority={true}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </section>
    </>
  );
}
