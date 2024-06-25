import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import whybg from "../../../public/icons/why-bg.jpg";

const WhyWeStarted = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    // Set initial state
    gsap.set(".why-text", { autoAlpha: 0, y: 50 });

    const animate = () => {
      if (!hasAnimated.current) {
        gsap.to(".why-text", {
          y: 0,
          autoAlpha: 1,
          duration: 2,
          ease: "power4.inOut",
        });
        hasAnimated.current = true; // Prevent animation from running again
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(section); // Stop observing once the animation has run
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
      <div className="relative">
        <Image
          src={whybg}
          alt="covalogo"
          className="w-full text-[#4535c3] h-auto rounded-[10px] sm:rounded-[20px]"
        />
        <section className="absolute top-0 left-0 w-full h-full text-white p-3 sm:p-10 flex flex-col">
          <h2 className="text-[18px] sm:text-[1.5rem] lg:text-[2.5rem] xl:text-[4.5rem] font-[600] text-left mb-0  pl-3 lg:pl-10">
            Why we Started
          </h2>
          <div className="relative flex-grow">
            <p className="absolute bottom-2 lg:bottom-10 right-0 text-[10px] sm:text-[1rem] lg:text-[1.2rem] xl:text-[2rem] text-left w-[75%] lg:pr-10 why-text">
              The goal of Covapay is to bridge the gap between traditional
              payment methods and modern digital solutions, making it easier for
              small businesses to adapt to changing consumer preferences and
              technological advancements.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyWeStarted;
