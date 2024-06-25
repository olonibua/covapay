import React from "react";
import covalogo from "../../../public/icons/covalog.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0a142f] p-5 lg:p-28 lg:pr-52 lg:pl-52">
        <div className="grid sm:flex ">
          <div className="">
            <Image
              src={covalogo}
              alt="covalogo"
              className=" text-[#4535c3] sm:w-[180px] sm:h-[180px]"
              width={80}
              height={80}
            />
          </div>

          <section className="flex text-[8px] sm:text-[16px] lg:ml-60 mt-5 sm:mt-0 text-[white] font-[600] gap-3 lg:gap-20">
            <ul className="flex flex-col gap-3 lg:gap-10">
              <li>Sobre Nosotros</li>
              <li>Sobre Nosotros</li>
              <li>Soluciones</li>
              <li>Insights</li>
            </ul>
            <ul className="flex flex-col gap-3 lg:gap-10 ">
              <li>Categorías</li>
              <li>Contratar Talento</li>
              <li>Desarrollar Talento</li>
              <li>Herramientas de Gamificación</li>
            </ul>
            <ul className="flex flex-col gap-3 lg:gap-10 mt-5 lg:mt-16">
              <li>Competencias Digitales</li>
              <li>Competencias Comerciales</li>
              <li>Liderazgo</li>
            </ul>
          </section>
        </div>

        <div className="border-t mt-4 lg:mt-10 pt-2  sm:pt-5 flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={covalogo}
              alt="covalogo"
              className=" text-[#4535c3] lg:w-[50px] lg:h-[50px] "
              width={25}
              height={25}
            />
            <Image
              src={covalogo}
              alt="covalogo"
              className=" text-[#4535c3] lg:w-[50px] lg:h-[50px] "
              width={25}
              height={25}
            />
            <Image
              src={covalogo}
              alt="covalogo"
              className=" text-[#4535c3] lg:w-[50px] lg:h-[50px] "
              width={25}
              height={25}
            />
          </div>
          <div className="text-[8px] sm:text-[12px] lg:text-[16px] text-white tracking-[-0.11rem] font-[600] gap-4 flex items-center">
            <h2>Política de Privacidad</h2>
            <h2>Política de Privacidad</h2>
            <h2>Política de Privacidad</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
