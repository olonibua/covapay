import Image from "next/image";
import React from "react";

import one from "../../../public/icons/one.svg";
import two from "../../../public/icons/two.svg";
import three from "../../../public/icons/three.svg";
import four from "../../../public/icons/four.svg";
import five from "../../../public/icons/five.svg";

const Brands = () => {
  return (
    <>
      <section className="w-full hidden lg:block">
        <div className="flex gap-2 sm:gap-4 items-center justify-between h-16 sm:h-28 pl-1 sm:pl-20 pr-1 sm:pr-20 w-full mx-auto">
          <h3 className="text-[11px] sm:text-2xl tracking-[-0.05rem] text-gray-500">
            Trusted by the best
          </h3>
          <Image
            src={one}
            alt="one"
            width={50}
            height={50}
            className="sm:w-[110px] sm:h-[110px]"
          />
          <Image
            src={two}
            alt="one"
            width={50}
            height={50}
            className="sm:w-[110px] sm:h-[110px]"
          />
          <Image
            src={three}
            alt="one"
            width={50}
            height={50}
            className="sm:w-[110px] sm:h-[110px]"
          />
          <Image
            src={four}
            alt="one"
            width={50}
            height={50}
            className="sm:w-[110px] sm:h-[110px]"
          />
          <Image
            src={five}
            alt="one"
            width={50}
            height={50}
            className="sm:w-[110px] sm:h-[110px]"
          />
        </div>
      </section>
    </>
  );
};

export default Brands;
