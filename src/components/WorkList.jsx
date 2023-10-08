import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGraphUpArrow } from "react-icons/bs";

export default function WorkList() {
  return (
    <section className="container max-w-8xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-color-green text-xl uppercase font-medium">
          Work List
        </h2>
        <h3 className="text-color-black text-3xl font-semibold">
          We provide the Perfect Solution <br /> to your business growth
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="px-[30px] py-12">
          <div className="space-y-4">
            <div className="p-8 inline-block bg-color-green-100 rounded-[20px]">
              <BsGraphUpArrow className="w-6 h-6" />
            </div>
            <h2 className="text-color-black text-2xl font-semibold  ">
              Grow Your Business
            </h2>
            <p className="text-color-black text-lg font-normal">
              We help identify the best ways to <br /> improve your business
            </p>
          </div>

          <Link
            href={"/"}
            className="flex items-center gap-2 py-[15px] px-5 text-color-black text-lg font-normal"
          >
            Learn More <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>
        <div className="px-[30px] py-12">
          <div className="space-y-4">
            <div className="p-8 inline-block bg-color-green-100 rounded-[20px]">
              <BsGraphUpArrow className="w-6 h-6" />
            </div>
            <h2 className="text-color-black text-2xl font-semibold  ">
              Improve brand loyalty
            </h2>
            <p className="text-color-black text-lg font-normal">
              We help identify the best ways to <br /> improve your business
            </p>
          </div>

          <Link
            href={"/"}
            className="flex items-center gap-2 py-[15px] px-5 text-color-black text-lg font-normal"
          >
            Learn More <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>
        <div className="px-[30px] py-12">
          <div className="space-y-4">
            <div className="p-8 inline-block bg-color-green-100 rounded-[20px]">
              <BsGraphUpArrow className="w-6 h-6" />
            </div>
            <h2 className="text-color-black text-2xl font-semibold  ">
              Improve Business Model
            </h2>
            <p className="text-color-black text-lg font-normal">
              We help identify the best ways to <br /> improve your business
            </p>
          </div>

          <Link
            href={"/"}
            className="flex items-center gap-2 py-[15px] px-5 text-color-black text-lg font-normal"
          >
            Learn More <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
