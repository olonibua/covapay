"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import covalogo from "../../../public/icons/covalog.svg";
import b2 from "../../../public/icons/b2.jpg";
import heroskew from "../../../public/icons/hero-skew.svg";
import Brands from "./Brands";
import WhyWeStarted from "./WhyWeStarted";
import Features from "./Features";
import More from "./More";
import { OurContact } from "./OurContact";
import GetOnBoard from "./GetOnBoard";
import "./MainView.css";
import Footer from "./Footer";

const MainView = () => {
  useEffect(() => {
    // Disable scrolling at the start of the animation
    document.body.classList.add("hide-scrollbar");

    const navTl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 2.5, // Duration set to 2.5 seconds
        zIndex: 50,
      },
      // onComplete: () => {
      //   // Enable scrolling after the animation is complete
      //   document.body.classList.remove("no-scroll");
      // },
    });

    // Initial visibility settings
    gsap.set(".text-section, .menu-section, .main-body", { autoAlpha: 0 });

    // Animation to scale down the image and show the text section
    navTl
      .to("#heroImage", {
        transform: "scale(0.90) translateX(5px) translateY(-10px)",
        width: "100%",
        zIndex: 0,
        marginTop: "100px",
        borderRadius: "40px",
      })
      .from(
        ".text-section",
        {
          opacity: 0,
          duration: 0.1,
          y: 600,
          autoAlpha: 0,
        },
        "-=2"
      ) // Start the text animation 2.5 seconds earlier
      .to(
        ".text-section",
        { opacity: 1, duration: 2, y: 500, autoAlpha: 1 },
        "-=2"
      )
      .from(
        ".menu-section",
        {
          opacity: 0,
          duration: 0.1,
          y: 15,
          autoAlpha: 0,
        },
        "-=2"
      ) // Start the text animation 2.5 seconds earlier
      .to(
        ".menu-section",
        { opacity: 1, duration: 2, y: 4, autoAlpha: 1 },
        "-=2"
      )
      .from(".main-body", { autoAlpha: 0, duration: 0.1 }, "-=0.1")
      .to(
        ".main-body",
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        "-=0.1"
      );
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(buttonRef.current, {
        text: {
          value: "Get Started",
          delimiter: " ",
        },
        duration: 1.5,
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative content-wrapper max-w-[400px] mx-auto sm:max-w-full">
      <section className="flex absolute top-0 right-0 left-0 menu-section  pr-5 pl-5 sm:pl-[74px] sm:pr-[74px] justify-between h-24 sm:h-36 items-center z-10">
        <Image
          src={covalogo}
          alt="covalogo"
          className=" md:w-[100px] md:h-[100px] lg:w-[180px] lg:h-[180px]"
          width={70}
          height={70}
        />
        <div className="flex gap-6 text-[10px] sm:text-[13px] mx-1 sm:mx-2 md:text-[14px] lg:text-[22px] items-center tracking-[-0.06rem]">
          <ul className="flex gap-2 sm:gap-5">
            <li>Products</li>
            <li>About us</li>
            <li>Career</li>
          </ul>
          <button className="border text-[10px] sm:text-[13px]  lg:text-[18px] w-24 md:w-40 lg:w-56 rounded-full text-[#4535c3] border-[#4535c3] p-2 sm:p-[16px] tracking-[-0.06rem]">
            Download App
          </button>
        </div>
      </section>

      <div className="relative ">
        <div className="top-0 w-full h-[90%] md:h-[60%] flex items-center justify-center ">
          <Image
            src={heroskew}
            alt="heroskew"
            id="heroImage"
            className="lg:w-full hidden lg:block lg:h-auto top-0 absolute left-0 right-0 z-10"
          />
          <Image
            src={b2}
            alt="heroskew"
            id="heroImage"
            className="w-full h-[50vh] rounded-[10px] md:rounded-[20px]  lg:hidden md:h-auto top-0 absolute left-0 right-0 z-10"
          />
          <section className="text-center z-0 absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity text-section">
            <h2 className="text-[25px] sm:text-[2rem] w-[300px] sm:w-full md:text-[3rem] lg:text-[3.4rem] xl:text-[4.5rem] lg:leading-[5rem] font-[500] text-[#140035] ">
              Simplify Your Payment Experience with us
            </h2>
            <button
              ref={buttonRef}
              className="bg-[#4535c3] mt-4 sm:mt-6 text-white rounded-full w-36 sm:w-52 text-lg sm:text-lg tracking-[-0.05rem] smtracking-[-0.13rem] p-3 sm:p-4"
            >
              Get Started
            </button>
          </section>
        </div>
      </div>

      <section className="main-body mt-[100vh] sm:mt-[30vh] md:mt-[120vh] items-center pr-5 pl-5 sm:pl-[74px] sm:pr-[74px]">
        <Brands />
        <WhyWeStarted />
        <Features />
        <More />

        <OurContact />

        <GetOnBoard />
      </section>
      <Footer />
    </div>
  );
};

export default MainView;
