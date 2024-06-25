import Image from "next/image";
import React from "react";

import sec1 from "../../../public/icons/a-sec1-covapay.mp4";
import sec2 from "../../../public/icons/a-sec2-covapay.mp4";
import sec3 from "../../../public/icons/a-sec3-covapay.mp4";
import b from "../../../public/icons/b.jpg";
import b2 from "../../../public/icons/b2.jpg";

const Features = () => {
  return (
    <div>
      <div className="grid sm:flex h-auto pt-10 sm:pt-16">
        <div className="flex-[20%]">
          <h2 className="text-[18px] sm:text-[30px] sticky top-10 font-[500] sm:pr-16 items-center">
            Features
          </h2>
        </div>
        <div className="flex-[80%]">
          <div className="flex items-center pt-10 gap-5">
            <div>
              <video
                src={sec1}
                alt="covalogo"
                className="w-full text-[#4535c3] h-full rounded-[20px]"
                autoPlay
                loop
                muted
              />
            </div>
            <div>
              <Image
                src={b}
                alt="covalogo"
                className="w-full text-[#4535c3] h-full rounded-[20px]"
              />
            </div>
          </div>

          <div className="grid sm:flex gap-4 items-center py-5 sm:p-5">
            <div>
              <h2 className="font-[600] text-[14px] sm:text-[16px]">
                Bank Transfer
              </h2>
              <p className="text-[12px] sm:text-[14px]">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Customers can make payments to the small business bank account
                using their own bank mobile app or internet banking platform.
              </p>
            </div>
            <div>
              <h2 className="font-[600] text-[14px] sm:text-[16px]">
                Bank Transfer
              </h2>
              <p className=" text-[12px] sm:text-[14px]">
                Customers can make payments to the small business bank account
                using their own bank mobile app or internet banking platform.
              </p>
            </div>
            <div>
              <h2 className="font-[600] text-[14px] sm:text-[16px]">
                Bank Transfer
              </h2>
              <p className=" text-[12px] sm:text-[14px]">
                Customers can make payments to the small business bank account
                using their own bank mobile app or internet banking platform.
              </p>
            </div>
          </div>

          <div className="relative">
            <video
              src={sec2}
              alt="covalogo"
              className="w-full h-full border-none no-underline rounded-[10px] sm:rounded-[20px]"
              autoPlay
              loop
              muted
            />
            <section className="absolute top-0 bg-white left-0 w-1/2 rounded-[10px] sm:rounded-2xl h-[80%] sm:h-[90%] m-5 lg:m-10 text-black p-5 lg:p-10 flex flex-col">
              <h2 className="text-[18px] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-[3.5rem] font-[600] text-left mb-0 xl:leading-[4rem]">
                Say Goodbye to Paperwork:
              </h2>

              <div className="mt-5 md:mt-16 lg:mt-36 xl:mt-64">
                <p className="text-[8px] sm:text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] xl:text-[1.5rem] text-left">
                  Effortlessly track and manage your expenses with Covapay
                  user-friendly expense tracking system. Use Covapay reporting
                  tools to gain valuable insights and drive growth
                </p>
              </div>
            </section>
          </div>

          <div className="flex items-center pt-16 lg:pt-24 gap-5 relative">
            <div>
              <video
                src={sec3}
                alt="covalogo"
                className="w-full h-auto rounded-[10px] sm:rounded-[20px]"
                autoPlay
                loop
                muted
              />
            </div>
            <div className="relative">
              <Image
                src={b2}
                alt="covalogo"
                className="w-full h-auto rounded-[10px] sm:rounded-[20px]"
              />
              <section className="absolute top-0 left-0 rounded-[10px] sm:rounded-2xl h-[90%] text-black p-5 lg:p-10">
                <h2 className="text-[18px] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-[3.5rem] font-[600] sm:max-w-[70%] text-left mb-0 xl:leading-[4rem]">
                  Stay in the Loop:
                </h2>

                <div className="mt-10 md:mt-40 xl:mt-[400px]">
                  <p className=" text-[9px] sm:text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] xl: text-left  ">
                    Harness the power of Covapay reporting tools. Generate
                    detailed reports that reveal trends, opportunities, and
                    areas for improvement. Use these insights to fuel your
                    business expansion
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
