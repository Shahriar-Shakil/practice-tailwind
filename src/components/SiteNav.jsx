"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsJustify } from "react-icons/bs";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SiteNav() {
  const [toggler, setToggler] = useState(false);
  const handleClick = () => {
    setToggler((prev) => !prev);
  };
  return (
    <section className="relative z-50   py-[5px] mt-[15px]  ">
      <div className="container mx-auto flex justify-between px-6">
        <div className="">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold leading-normal text-black"
          >
            Design<span className="text-color-orange">AGENCY</span>
          </Link>
        </div>
        <button onClick={handleClick} className="md:hidden">
          <BsJustify className="h-6 w-6" />
        </button>
        <nav className=" hidden md:block">
          <ul
            className={classNames(
              "flex justify-center items-center space-x-[10px] lg:space-x-[30px]"
            )}
          >
            <li className=" text-black font-medium leading-normal">
              <Link className="p-[6px] lg:p-[10px] " href="/">
                Home
              </Link>
            </li>
            <li className=" text-black font-medium leading-normal">
              <Link className="p-[6px] lg:p-[10px] " href="/team">
                Team
              </Link>
            </li>
            <li className=" text-black font-medium leading-normal">
              <Link className="p-[6px] lg:p-[10px] " href="/service">
                Service
              </Link>
            </li>
            <li className=" text-black font-medium leading-normal">
              <Link className="p-[6px] lg:p-[10px] " href="/project">
                Project
              </Link>
            </li>
            <li className=" text-black font-medium leading-normal">
              <Link className="p-[6px] lg:p-[10px] " href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li className=" text-black font-medium leading-normal">
              <Link
                className="p-[6px] lg:p-[10px]  border border-color-green rounded-[10px]"
                href="/testimonials"
              >
                Login
              </Link>
            </li>
            <li className=" text-black font-medium leading-normal">
              <Link
                className="p-[6px] lg:p-[10px] text-color-white bg-color-green  rounded-[10px]"
                href="/testimonials"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
