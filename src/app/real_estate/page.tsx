"use client";

// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import MetaIcon from "../../assets/Icons/meta.svg";

import RealEstateHero from "../../assets/Icons/RealEstateHero.svg";
import RealEstateCard1 from "../../assets/Icons/RealEstateCard1.svg";
import RealEstateCard2 from "../../assets/Icons/RealEstateCard2.svg";
import RealEstateCard3 from "../../assets/Icons/RealEsateCard3.svg";

// components
import React, { useEffect, useRef, useState } from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";
import Card from "@components/Card";
import GainScroll from "@components/GainScroll";
import {
  CommerceCardList,
  EducationCardList,
  EducationCardList1,
  EducationCardList2,
  EducationCardList3,
  EducationScrolling,
  RealEstateCardList,
  RealEstateCardList1,
  RealEstateCardList2,
  RealEstateScrolling,
  RetailScrolling,
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";

export default function RealEstate() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === EducationScrolling.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [EducationScrolling.length]);

  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className=" 2xl:!min-h-[70vh] xl:min-h-[70vh] lg:min-h-[60vh] md:min-h-[70vh] xs:min-h-[35vh]  flex flex-col justify-end   absolute  xl:top-[-50vw]  lg:top-[-10vw] md:top-[-10vw] md:py-0 md:px-[5rem] xs:pt-20">
        <div className="grid xl:grid-cols-2 justify-between gap-14  sm:grid-cols-1 lg:grid-cols-1  xl:mx-24 2xl:mx-36">
          <div className=" flex flex-col xs:mt-[5vw] xl:mt-[20vw] md:flex   lg:items-baseline  xs:items-center">
            <h1 className=" md:hidden lg:hidden xs:hidden xl:block xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[3vw] leading-[3.5vw]  font-bold   text-[white] font-sora   xs:text-center   lg:text-start xs:-mt-[60vw] lg:mt-[10vw] xl:mt-[45vw]">
              Grow Your Real Estate <br /> Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational <br /> Property Solutions{" "}
              </span>
            </h1>
            <h1 className=" xs:block md:hidden xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[3vw] font-bold   text-[white] font-sora   xs:text-center   lg:text-start xs:-mt-[30vw] lg:mt-[10vw]">
              Grow Your Real Estate <br /> Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational <br /> Property Solutions{" "}
              </span>
            </h1>
            <h1 className=" xs:hidden sm:hidden md:block lg:block xl:hidden xl:text-[3vw] xs:text-[7vw]  sm:text-[1vw] font-bold   text-[white] font-sora  md:text-[5vw]  xs:text-center   lg:text-center md:mt-[40vw] ">
              Grow Your Real Estate Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational Property Solutions{" "}
              </span>
            </h1>
            <p className=" xs:px-2 font-light font-Inter mt-5 mb-7 lg:text-[2vw] xl:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw] 2xl:w-[32vw]  md:text-[3vw] md:items-center lg:items-baseline  xs:text-center lg:text-center  xs:text-[4vw] xl:text-start ">
              Engage with potential buyers and sellers in real-time, answer
              questions 24/7, and schedule appointments effortlessly. Build
              richer customer profiles through natural conversation, and
              leverage them to match perfect properties with the right people.
            </p>
            <div className="items-center gap-5 lg:z-50">
              <a
                href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                target="_blank"
                rel="noreferrer"
                className="2xl:mt-[-0.7vw]"
              >
                {" "}
                <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold  pointer ">
                  Request Demo
                </button>
              </a>
              <button>
                <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center md:items-center ">
                  <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
                  <p className=" xs:text-[4vw] md:text-[2vw] lg:text-[1.05vw] text-[#FFFFFF] font-Inter font-medium">
                    Tech Partner
                  </p>
                </div>
              </button>{" "}
            </div>
          </div>

          <div className="h-full lg:max-h-[80vh] xs:max-h-[5vh]   xl:w-[20vw] xs:w-[30vw] overflow-hidden relative lg:left-[1vw] lg:top-[25vw] md:top-[20vw] md:left-[1vw] xl:top-[60vw] xl:left-[-1vw] 2xl:top-[65vw] 2xl:left-[-2vw] xs:left-[10vw] xs:top-[42vw]">
            <div className="flex flex-col h-[60vh] relative">
              {RealEstateScrolling?.map((data, index) => (
                <div
                  key={index}
                  className={`scroll-item mb-2 flex items-center justify-end transition-transform duration-700 ease-in-out ${
                    index <= currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  {data?.icon && (
                    <Image
                      src={data.icon}
                      alt={`Real Estate Icon ${index + 1}`}
                      // style={{ marginBottom: "1vw" }}
                      // className="xl:h-[30vh] xs:h-[50vh]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute 2xl:right-[4vw] 2xl:top-[31vw]  xs:top-[100vw] lg:right-[20vw] lg:top-[40vw] xl:right-[1vw] xl:top-[31vw] md:top-[90vw] md:right-[10vw] w-full h-full flex justify-end">
            <Image
              src={RealEstateHero}
              alt="hero"
              // className="xl:w-[80vw] xl:h-[50vh] lg:w-[60vw] lg:h-[50vh]"
            />{" "}
          </div>
        </div>
      </div>
      <div className="lg:mt-[110vw] xl:mt-20 xs:mt-[220vw] md:mt-[120vw]">
        <BrandScroll />
      </div>
      <div className="py-12">
        <Card />
        <div className="pt-10">
          <GainScroll />
        </div>
      </div>

      <div className=" rounded-[120px] lg:min-h-[120vh] xl:min-h-[150vh] ">
        <div className="md:py-0 xs:py-5  ">
          <div className=" from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              // className="xl:mx-[5rem] lg:mx-[3rem]  w-full "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] xs:mx-[5vw] md:mx-[-1vw] lg:mx-0  ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5">
                    <p className="text-[#BEAAFF] md:text-[2vw] lg:text-[1vw] font-semibold pl-2">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="md:hidden  xs:ml-[-6vw] xs:text-[8vw] md:w-[50%] md:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora ">
                    Effortless Lead <br />
                    Generation &
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw]  font-bold">
                      Qualification{" "}
                    </p>
                  </div>
                  <div className="md:block   xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[3vw] xs:w-[90%]   lg:w-[40vw] font-bold text-[white] font-sora  leading-tight 2xl:tracking-wide ">
                    Effortless Lead <br />
                    Generation &
                    <p className=" from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[3vw] font-bold">
                      Qualification{" "}
                    </p>
                  </div>
                </div>
              }
              list={RealEstateCardList}
              image={RealEstateCard1}
              heightMatch
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l md:pb-[5vw]">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF]  lg:text-[1vw] md:text-[2vw] font-semibold pl-2 xl:px-4">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="md:hidden lg:block xs:text-[8vw] md:w-[25%] md:text-[3vw] lg:w-[60vw] font-bold text-[white] font-sora tracking-wide leading-tight">
                    Boost <br /> Engagement &
                    <p className=" xs:text-[8vw] md:text-[3vw] lg:w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Streamline <br />
                      </span>
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention{" "}
                      </span>
                    </p>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Boost <br /> Engagement &
                    <p className=" xs:text-[8vw] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Streamline <br />
                      </span>
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention{" "}
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={RealEstateCardList1}
              image={RealEstateCard2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l md:pb-[8vw] ">
            <CommonCard
              text
              // className="xl:mx-[12rem] lg:mx-[4rem] xs:mx-[5vw] w-full"
              customTitle={
                <>
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5 xl:mt-20">
                    <p className="lg:text-[1vw] md:text-[1vw] xs:text-[4vw] font-semibold lg:pl-2 text-[#09CC94] xl:px-4">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className="md:block xs:hidden  md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide leading-tight">
                    <span className="text-[white] lg:text-[3vw] xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Build Lasting <br /> Relationships & <br />
                      <span className="lg:text-[3vw] xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Cultivate Loyalty{" "}
                      </span>
                    </span>
                  </div>
                  <div className="md:hidden xs:block md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide">
                    <p className="text-[white] lg:text-[2.2vw]  xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Build Lasting <br /> Relationships & <br />
                      <span className="md:text-[4vw]   from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Cultivate Loyalty{" "}
                      </span>
                    </p>
                  </div>
                </>
              }
              list={RealEstateCardList2}
              image={RealEstateCard3}
              revers
            ></CommonCard>
          </div>
        </div>
      </div>

      <div className="md:py-10">
        <DigitalMarketing />
      </div>
      <div className="mt-10 xs:hidden md:block">
        <BrandScroll />
      </div>

      <div className="">
        <div className="flex justify-center text-[3vw] font-semibold">
          <h1 className="lg:text-[3vw] md:text-[3vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] py-16 text-center xl:tracking-wide">
            <p className="lg:pl-10">Personalize Customer Experience To</p>
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              scale your business
            </span>
          </h1>
        </div>

        <div className="md:w-full mt-5 overflow-x-auto lg:overflow-visible 2xl:w-[64vw] xl:w-[74vw] xl:m-auto">
          <div
            className="
      flex flex-row md:gap-5 xs:flex-row sm:flex-row overflow-x-auto
      md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-5
      lg:grid-cols-5 lg:grid-rows-1 lg:gap-5"
          >
            {CommerceCardList?.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 xs:w-[45%] w-[80%] sm:w-[60%] md:w-full lg:w-auto flex flex-col items-center xs:px-5 md:px-5 gradient-borders  last:border-r-0"
              >
                <div className="w-full flex flex-col xs:justify-center xl:justify-start">
                  <Image src={data?.icon} alt="icon" />
                  <p className="py-5 font-Inter font-medium  text-white xs:text-[3vw] sm:text-[1.5vw] lg:text-[1vw] md:text-[2.5vw] ">
                    {data?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Growth />
    </div>
  );
}
