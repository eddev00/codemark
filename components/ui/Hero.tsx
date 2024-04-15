import React from "react";
import { Input } from "./input";
import { Button } from "@/components/ui/button";

import icon from "@/public/Frame.png";
import icon1 from "@/public/Frame-1.png";
import icon2 from "@/public/Frame-2.png";
import icon3 from "@/public/Frame-3.png";
import icon4 from "@/public/Frame-4.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" px-[6%] flex justify-around my-auto gap-10 ">
      {/* left side */}
      <div className="flex flex-col  gap-4 max-w-[50%] h-full">
        <span className="text-[56px] font-bold">
          Store, Edit & Manage your blocks of code easier
        </span>
        <span className=" text-[18px]">Perfect for Students & Coders</span>
        <div className="flex bg-[#2B2B2B]  rounded-r-3xl max-w-[65%] border-secondary border-[1px] mt-auto rounded-l-xl h-12">
          <Input
            className=" bg-transparent border-transparent text-white text-opacity-50   font-[16px] h-12 px-[24px] py-[13px]"
            placeholder="Email address"
          />
          <Button
            type="submit"
            className=" bg-secondary rounded-3xl px-[24px] py-[13px] font-[18px] h-12 hover:bg-white hover:text-secondary"
          >
            Sign Up
          </Button>
        </div>
      </div>
      {/* right side */}

      <div className=" flex flex-col  gap-6  max-w-[480px] ">
        <div className="bg-[#969696] bg-opacity-10 flex flex-col border-[#6E40C9] border-opacity-30 border-[1px] rounded-3xl p-4 flex-1 gap-4 text-[24px] h-[146px]">
          <Image src={icon4} alt="icon" />
          <span>Store your re-usable blocks of code + Notes </span>
        </div>
        <div className="flex justify-between flex-wrap gap-6">
          <div className="bg-[#969696] bg-opacity-10 flex flex-col border-[#6E40C9] border-opacity-30 border-[1px] rounded-3xl p-4 flex-1 gap-4 text-[24px] min-w-[70%] h-[146px]">
            <Image src={icon1} alt="icon" />
            <span>Store problem solutions as a student </span>
          </div>
          <div className="bg-[#969696] bg-opacity-10 flex flex-col border-[#6E40C9] border-opacity-30 border-[1px] rounded-3xl p-4 flex-1 gap-4 text-[24px] h-[146px]">
            <Image src={icon2} alt="icon" />
            <span>Easy search </span>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-6">
          <div className="bg-[#969696] bg-opacity-10 flex flex-col border-[#6E40C9] border-opacity-30 border-[1px] rounded-3xl p-4 flex-1 gap-4 text-[24px] h-[146px]">
            <Image src={icon3} alt="icon" />
            <span>Code editor & compiler</span>
          </div>
          <div className="bg-[#969696] bg-opacity-10 flex flex-col border-[#6E40C9] border-opacity-30 border-[1px] rounded-3xl p-4 flex-1 gap-4 text-[24px] min-w-[60%] h-[146px]">
            <Image src={icon4} alt="icon" />
            <span>Statistics & Insights on your code </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
