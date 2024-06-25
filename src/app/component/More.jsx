import Image from "next/image";
import React from "react";
import more from "../../../public/icons/more-feat-bg.jpg";

const More = () => {
  return (
    <div className="mb-5 lg:mb-20">
      <div className="relative mt-20">
        <Image
          src={more}
          alt="covalogo"
          className="w-full h-full rounded-[10px] md:rounded-[20px]"
        />
        <section className="absolute top-0 left-0 w-full h-full text-white p-4 sm:p-8 flex flex-col">
          <h2 className="text-[15px] sm:text-[1.45rem] md:text-[1.45rem] lg:text-[2.4rem] xl:text-[3.8rem] font-[600] text-left mb-0  lg:pl-10 max-w-[60%]">
            Your finances. Your data. No one will follow you
          </h2>
          <div className="relative flex-grow">
            <div className="flex gap-2 lg:gap-4 items-center sm:p-5 bottom-0 right-0 w-[95%] absolute">
              <div>
                <h2 className="font-[600] text-[12px] lg:text-[18px] xl:text-[25px]">
                  Compliance Ready
                </h2>
                <p className="text-[7.5px] lg:text-[13px] xl:text-[18px]">
                  Our dedicated fraud and security teams work to keep your money
                  safe
                </p>
              </div>
              <div className="border-r border-l px-2 sm:px-7">
                <h2 className="text-[12px] lg:text-[18px] xl:text-[25px]">
                  100% Safe and Secure
                </h2>
                <p className="text-[7.5px] lg:text-[13px] xl:text-[18px]">
                  We use 2-factor authentication to protect your account
                </p>
              </div>
              <div className="px-1 sm:px-2">
                <h2 className="text-[12px] lg:text-[18px] xl:text-[25px]">
                  Your Data is Protected
                </h2>
                <p className="text-[7.5px] lg:text-[13px] xl:text-[18px]">
                  We hold your money with established financial institutions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-between mt-10 lg:mt-20  mb-5 lg:mb-20">
        <h2 className="text-[20px] lg:text-[60px] font-[600] sm:leading-[65px] text-left max-w-[50%]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Modern SME's run on Covapay
        </h2>
        <h3 className="text-[11px] lg:text-[20px] p-2 sm:p-10 text-[#979ea8] max-w-[35%] tracking-[-0.08rem] sm:tracking-[-0.09rem]">
          Our customers talk about how covapay solves real life business
          problems for them
        </h3>
      </div>
    </div>
  );
};

export default More;
