import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-10 lg:pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className=" text-center lg:text-left ">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-black text-2xl lg:text-[50px] font-bold lg:leading-[65px] ">
                  Increase Your Customers Loyalty and Satisfaction
                </h2>
              </div>
              <div className="max-w-lg mx-auto lg:mx-0">
                {" "}
                <p className="text-xl font-medium font-avenir">
                  We help businesses like yours earn more customers, brstandout
                  from competitors, make more money
                </p>
                <button className="mt-10 inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-color-green-500 hover:bg-color-green text-color-white font-semibold rounded-l-xl rounded-t-xl transition duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className=" flex flex-wrap ">
              <div className="relative w-full md:w-1/2 lg:w-2/3 h-80">
                <Image
                  className=" p-2 object-contain rounded-4xl lg:rounded-br-none"
                  src={"/image/hero-1.png"}
                  alt="img1"
                  fill={true}
                  objectFit="contain"
                />
              </div>
              <div className="relative w-full md:w-1/2 lg:w-1/3 h-80 p-2 object-cover rounded-4xl lg:rounded-bl-none">
                <Image
                  className=" p-2 object-contain rounded-4xl lg:rounded-br-none"
                  src={"/image/hero-2.png"}
                  alt="img2"
                  fill={true}
                  objectFit="contain"
                />
              </div>
              <div className="relative w-full md:w-1/2 lg:w-2/5 h-[164px] p-2 object-cover rounded-4xl lg:rounded-bl-none">
                <Image
                  className=" p-2 object-cover rounded-4xl lg:rounded-br-none"
                  src={"/image/hero-3.png"}
                  alt="img2"
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <div className="relative w-full md:w-1/2 lg:w-3/5 h-[164px] p-2 object-cover rounded-4xl lg:rounded-bl-none">
                <Image
                  className=" p-2 object-cover rounded-4xl lg:rounded-br-none"
                  src={"/image/hero-4.png"}
                  alt="img2"
                  fill={true}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
