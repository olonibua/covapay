import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";

import ctaPhone from "../../../public/icons/cta-phone.png";
import ctabg from "../../../public/icons/cta-bg.jpg";

const GetOnBoard = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Set initial state
    gsap.set(".cta-image", { autoAlpha: 0, y: 100 });

    const animateIn = () => {
      gsap.to(".cta-image", {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        ease: "power4.inOut",
      });
      // gsap.to(".cta-text", {
      //   y: 0,
      //   autoAlpha: 1,
      //   duration: 2,
      //   ease: "power4.inOut",
      //   stagger: 0.2,
      // });
    };

    const animateOut = () => {
      gsap.to(".cta-image", {
        y: 100,
        autoAlpha: 0,
        duration: 1.5,
        ease: "power4.inOut",
      });
      // gsap.to(".cta-text", {
      //   y: 100,
      //   autoAlpha: 0,
      //   duration: 1.5,
      //   ease: "power4.inOut",
      //   stagger: 0.2,
      // });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateIn();
        } else {
          animateOut();
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is in view
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="relative overflow-hidden mt-10 lg:mt-32">
        <Image
          src={ctabg}
          alt="cta background"
          className="w-full h-auto  lg:rounded-t-[20px] rounded-t-[10px]"
        />
        <section className="absolute p-3 sm:p-5 lg:p-16 top-0 text-white flex">
          <div className="flex flex-col gap-2 lg:gap-10 text-white cta-text">
            <h2 className="text-[14px]  sm:text-[25px] lg:text-[40px] xl:text-[65px] font-[600] xl:leading-[70px] max-w-[90%] tracking-[-0.09rem]">
              Get onboard to sweeter life for your business
            </h2>
            <button className="bg-white text-[#4535c3] p-2 lg:p-4 text-[10px] sm:text-[12px] lg:text-[16px] rounded-full tracking-[-0.09rem] w-[5rem] sm:w-[9rem] lg:w-[13rem]">
              Get Started
            </button>
          </div>
          <div className="cta-image">
            <Image
              src={ctaPhone}
              alt="cta phone"
              className="w-full h-auto rounded-[20px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetOnBoard;
