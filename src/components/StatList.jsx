import React from "react";
import { BsFillPeopleFill, BsHandThumbsUp } from "react-icons/bs";
export default function StatList() {
  return (
    <section className="my-16 container max-w-8xl  mx-auto ">
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="w-[288px] h-[290px]  flex flex-col items-center justify-center bg-color-white rounded-[20px] shadow-primary">
          <div className="bg-color-green-100 inline-block p-4 rounded-xl">
            <BsFillPeopleFill className="w-6 h-6" />
          </div>
          <div className="space-y-1 mt-5 text-center">
            <h2 className="text-3xl font-semibold ">240452</h2>
            <p>Followers</p>
          </div>
        </div>
        <div className="w-[288px] h-[290px]  flex flex-col items-center justify-center bg-color-white rounded-[20px] shadow-primary">
          <div className="bg-color-green-100 inline-block p-4 rounded-xl">
            <BsHandThumbsUp className="w-6 h-6" />
          </div>
          <div className="space-y-1 mt-5 text-center">
            <h2 className="text-3xl font-semibold ">240452</h2>
            <p>Followers</p>
          </div>
        </div>
        <div className="w-[288px] h-[290px]  flex flex-col items-center justify-center bg-color-white rounded-[20px] shadow-primary">
          <div className="bg-color-green-100 inline-block p-4 rounded-xl">
            <BsHandThumbsUp className="w-6 h-6" />
          </div>
          <div className="space-y-1 mt-5 text-center">
            <h2 className="text-3xl font-semibold ">6300</h2>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="w-[288px] h-[290px]  flex flex-col items-center justify-center bg-color-white rounded-[20px] shadow-primary">
          <div className="bg-color-green-100 inline-block p-4 rounded-xl">
            <BsFillPeopleFill className="w-6 h-6" />
          </div>
          <div className="space-y-1 mt-5 text-center">
            <h2 className="text-3xl font-semibold ">Projects</h2>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
