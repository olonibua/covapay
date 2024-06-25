import Image from "next/image";
import React from "react";

import leftPane from "../../../public/icons/leftPane-sub.jpg";
import rightPane from "../../../public/icons/rightPane-bg.jpg";

export const OurContact = () => {
  return (
    <>
      <div className="flex gap-3 lg:gap-8 items-center justify-center">
        <div className="gap-2 sm:gap-5 relative">
          <h2 className="font-[600] text-[#4535c3] xl:leading-[4.5rem] mb-2 lg:mb-8 text-[15px] sm:text-[1.45rem] lg:text-[2.45rem] xl:text-[70px] max-w-[60%]">
            Our Contacts
          </h2>
          <div class="relative flex justify-center items-center">
            <Image
              src={leftPane}
              alt="covalogo"
              className="w-full h-auto rounded-[10px] lg:rounded-[20px]"
            />
            <div class="justify-center flex flex-col sm:top-16 xl:top-20 items-center gap-2 lg:gap-10 absolute w-full">
              <button class="rounded-full lg:w-[12.4rem] text-[9px] lg:text-[18px] tracking-[-0.11rem] p-2 lg:p-4 bg-white opacity-50 flex justify-center">
                Support@Covapay
              </button>
              <button class="rounded-full lg:w-[12.4rem] text-[9px] lg:text-[18px] tracking-[-0.11rem] p-2 lg:p-4 bg-white opacity-50 flex justify-center">
                Twitter Covapay
              </button>
              <button class="rounded-full tracking-[-0.11rem] text-[9px] lg:text-[18px] lg:w-[12.4rem] p-2 lg:p-4 bg-white opacity-50 flex justify-center">
                Instagram Trycovapay
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={rightPane}
            alt="covalogo"
            className="w-full h-auto rounded-[10px] lg:rounded-[20px]"
          />
          <section className="absolute p-3 sm:p-5 xl:p-16 xl:pl-24 xl:pr-24 top-0 text-white">
            <div className="flex justify-between">
              <h2 className="text-[16px] sm:text-[25px] lg:text-[45px] xl:text-[60px] max-w-[50%] leading-tight font-[600] tracking-[-0.09rem]">
                Everything you need to know
              </h2>
              <h3 className="mt-1 sm:mt-8  sm:text-[12px] xl:mt-28 text-[8px] lg:text-[13px] xl:text-[20px] max-w-[40%]">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We answered questions so you don't have to ask them
              </h3>
            </div>
            <div className="text-[10px] sm:text-[12px] lg:text-[18px] xl:text-[26px] mt-2 lg:mt-5">
              <h2 className="border-b border-blue-300 tracking-[-0.09rem] py-1 sm:py-4 xl:py-8">
                Who can sign up on Covapay?
              </h2>
              <h2 className="border-b border-blue-300 tracking-[-0.09rem] py-1 sm:py-4 xl:py-8">
                Can you register my business with covapay
              </h2>
              <h2 className="border-b border-blue-300 tracking-[-0.09rem] py-1 sm:py-4 xl:py-8">
                Who can sign up on Covapay?
              </h2>
              <h2 className="border-b border-blue-300 tracking-[-0.09rem] py-1 sm:py-4 xl:py-8">
                Who can sign up on Covapay?
              </h2>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
