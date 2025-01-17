"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import signUp from "../../assets/Icons/sign-up.svg";
import whiteArrow from "../../assets/Icons/white-arrow.svg";
import creditCardOff from "../../assets/Icons/credit-card-off.svg";
import BrandScroll from "@components/BrandScroll";

import { useKeenSlider } from "keen-slider/react";
import marketingStrategy from "../../assets/Icons/marketingStrategy.svg";
import { retailData, whyGainwix, testimonialData } from "../blogs/constants/blog"

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: {
      perView: 1, // Ensures only one slide is fully visible at a time
      spacing: 0, // Removes gap between slides
    },
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className=" relative bg-[#060A22] ">
      <div className="relative xs:hidden lg:block">
        <Image src={signUp} alt="" />
        <div className="absolute top-[14vw] left-[10vw]">
          <div className="w-[35vw]">
            <h1 className="xl:block leading-[3.8vw] 2xl:block xl:text-[3vw] sm-text-[1vw] md:text-[3vw] font-bold   text-[white] font-sora   xs:text-center   lg:text-start">
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora pr-3">
                100X
              </span>
              your Ad Spend{" "}
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                ROI
              </span>{" "}
              with
              <span className="from-[#60D669] via-[#60D669] to-[#46A74D] bg-gradient-to-r bg-clip-text text-transparent font-sora pl-3">
                WhatsApp
              </span>{" "}
              Conversations
            </h1>

            <p className=" xs:px-2 font-light font-Inter mt-5 mb-7  xl:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw] md:items-center lg:items-baseline  xl:text-start ">
              Automate and personalize your customer interactions on WhatsApp,
              turning your ads into revenue machines.
            </p>
            <div className="flex items-center gap-3">
              <div className="items-center gap-5 ">
                <a
                  href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                  target="_blank"
                  rel="noreferrer"
                  className="2xl:mt-[-0.7vw]"
                >
                  {" "}
                  <button className="btn btn_primary md:text-[1.5vw] lg:text-[0.95vw] font-bold pointer ">
                    Get Started for Free
                  </button>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-white font-[500] font-Inter">Book a Demo</p>
                <Image src={whiteArrow} alt="white-arrow" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Image src={creditCardOff} alt="white-arrow" />
              <p className="text-[#D4D4D4] md:text-[2vw] lg:text-[0.929vw] pl-3 font-Inter">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden flex flex-col justify-center items-center gap-4 py-10 px-5">
        <div className="xs:pt-[38vw] s:pt-[20vw] md:pt-[20vw] w-full text-center">
          <h1 className="xs:text-[7vw] sm:text-[5vw] text-[3.5vw] font-bold   text-[white] font-sora">
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora pr-3">
              100X
            </span>
            your Ad Spend ROI with WhatsApp Conversations
          </h1>

          <p className="xs:text-[3vw] xs:px-2 font-light font-Inter mt-5 mb-7 sm:text-[2vw] text-[#908eb5] xl:w-[28.5vw] md:items-center lg:items-baseline xl:text-start ">
            Automate and personalize your customer interactions on WhatsApp,
            turning your ads into revenue machines.
          </p>

          <div className="xs:flex xs:flex-col sm:flex sm:flex-row items-center justify-center">
            <div className="items-center gap-5 ">
              <a
                href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                target="_blank"
                rel="noreferrer"
                className="2xl:mt-[-0.7vw]"
              >
                {" "}
                <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold pointer">
                  Get Started for Free
                </button>
              </a>
            </div>
            <div className="xs:mt-3 flex items-center gap-2 sm:mt-0 ">
              <p className="text-white font-[500] font-Inter">Book a Demo</p>
              <Image src={whiteArrow} alt="white-arrow" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Image src={creditCardOff} alt="white-arrow" />
            <p className="text-[#D4D4D4] md:text-[2vw] lg:text-[0.929vw] pl-3 font-Inter">
              No credit card required
            </p>
          </div>
        </div>
        {/* <Image src={segmentTab} alt="" className="" /> */}
      </div>
      <div className="py-10">
        <BrandScroll />
      </div>
      <div className="lg:w-[65%] m-auto lg:py-20 xs:px-5 xs:py-10">
        <h2 className="text-white font-[600] font-inter xs:text-[6vw] s:text-[4vw] sm:text-[3.5vw] lg:text-[2.865vw] tracking-tight text-center">
          Drive Customers to your <br /> Retail Store with{" "}
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
            Tailored WhatsApp Ads
          </span>
        </h2>
        <div className="lg:flex lg:flex-row lg:gap-7 xs:gap-10 mt-10 xs:flex xs:flex-col xs:justify-center xs:items-center">
          {retailData?.map((data) => (
            <div
              key={data?.id}
              className=" cursor-pointer transform transition-transform hover:scale-105 flex flex-col items-center justify-center"
            >
              <Image
                src={data?.img}
                alt="retailStore1"
                className="lg:w-[50vw]"
              />
              <h2 className="text-white font-[600] lg:text-[1.675vw] xs:text-[6vw] s:text-[4vw] sm:text-[3.5vw] tracking-tight pl-3 leading-tight mt-5 mb-2">
                {data?.title}
              </h2>
              <p className="text-[#70809A] font-Inter lg:text-[1.03vw] xs:text-[5vw] s:text-[3.5vw] sm:text-[2.5vw] tracking-tight pl-3 s:text-center lg:text-start">
                {data?.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-[65%] m-auto pb-20 xs:px-5">
        <h2 className="text-white font-[600] font-inter xs:text-[6vw] s:text-[4vw] sm:text-[3.5vw] lg:text-[2.865vw] tracking-tight text-center">
          Why
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora pl-3">
            GainWix.ai?
          </span>
        </h2>
        <div className="sm:grid sm:grid-cols-2 gap-7 mt-10 xs:grid-cols-1 xs:grid">
          {whyGainwix?.map((data) => (
            <div
              key={data?.id}
              className="flex gap-4 items-center border border-[#0ACD95] p-4 rounded-2xl hover:border-2 transition-all duration-300 gainHover"
            >
              <Image
                src={data?.img}
                alt=""
                className="lg:w-[5vw] xs:w-[12vw] sm:w-[7vw]"
              />
              <div>
                <h2 className="text-white font-[600] lg:text-[1.475vw] tracking-tight">
                  {data?.title}
                </h2>
                <p className="text-[#70809A] font-Inter lg:text-[1.03vw] tracking-tight">
                  {data?.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:w-[65%] lg:w-[75%] m-auto lg:pb-20 xs:px-5 xs:pb-10">
        <h2 className="text-white font-[600] font-inter xs:text-[6vw] s:text-[4vw] sm:text-[3.5vw] lg:text-[2.865vw] tracking-tight text-center pb-12">
          Trusted by
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora pl-3">
            Businesses Like You
          </span>
        </h2>
        <div ref={sliderRef} className="keen-slider flex overflow-hidden">
          {testimonialData?.map((data) => (
            <div
              key={data.id}
              className="keen-slider__slide lg:flex lg:flex-row gap-10 xs:flex xs:flex-col items-center justify-center bg-gradient-to-r from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] rounded-3xl text-white shadow-lg pt-10 lg:px-10 xs:px-5"
            >
              <Image src={data?.img} alt="test" />
              <div className="pb-5 xs:pt-10">
                <Image src={data?.logo} alt="aachi" />
                <p className="font-Inter text-[#91A1B9] lg:text-[1vw] xs:text-[5vw] s:text-[3vw] md:text-[2vw] lg:py-10 xs:py-5">
                  {data?.text}
                </p>
                <h2 className="font-[700] text-white xs:text-[4vw] md:text-[2.292vw]">
                  {data?.name}
                </h2>
                <p className="text-white font-[500] tracking-tighter">
                  {data?.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-[#4B4E6F] w-5 h-2 rounded-[40%]"
                  : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="lg:w-[55%] m-auto lg:py-20 text-center md:py-10 xs:px-5 xs:py-5">
        <h2 className="text-white font-[600] font-inter xs:text-[6vw] s:text-[4vw] sm:text-[3.5vw] lg:text-[2.865vw] tracking-tight text-center">
          Ready to Transform your Marketing <br />
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
            Strategy with Gainwix.ai?
          </span>
        </h2>
        <p className="text-[#70809A] font-Inter xs:text-[5vw] s:text-[3vw] sm:text-[2vw] lg:text-[1.03vw] tracking-tight text-center leading-tight my-7">
          Unlock the power of personalized conversations to engage your
          audience, drive sales, and grow your business seamlessly. Take the
          first step toward smarter, more effective marketing today
        </p>
        <div className="items-center gap-5 ">
          <a
            href="https://calendly.com/sales-h-cn/30min?month=2024-12"
            target="_blank"
            rel="noreferrer"
            className="2xl:mt-[-0.7vw]"
          >
            {" "}
            <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold pointer ">
              Get Started
            </button>
          </a>
        </div>
        {/* <Image src={marketingStrategy} alt="marketingStrategy" /> */}
      </div>
    </div>
  );
};

export default Blogs;
