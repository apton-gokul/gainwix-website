// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import MetaIcon from "../../assets/Icons/meta.svg";

import TravelHero from "../../assets/Icons/TravelHero.svg";

import TravelCard1 from "../../assets/Icons/TravelCard1.svg";
import TravelCard2 from "../../assets/Icons/TravelCard2.svg";
import TravelCard3 from "../../assets/Icons/TravelCard3.svg";
import travelLanding from "../../assets/Icons/travelLanding.svg";

import RealEstateHero from "../../assets/Icons/RealEstateHero.svg";
import RealEstateCard1 from "../../assets/Icons/RealEstateCard1.svg";
import RealEstateCard2 from "../../assets/Icons/RealEstateCard2.svg";
import RealEstateCard3 from "../../assets/Icons/RealEsateCard3.svg";

// components
import React from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";
import Card from "@components/Card";
import GainScroll from "@components/GainScroll";
import {
  CommerceCardList,
  RealEstateCardList,
  RealEstateCardList1,
  RealEstateCardList2,
  TravelCardList,
  TravelCardList1,
  TravelCardList2,
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";
import travelTab from "../../assets/Icons/travelTab.svg"

export default function Travel() {
  return (
    <div className="relative bg-[#060A22] ">
      <div className="relative xs:hidden lg:block">
        <Image src={travelLanding} alt="" />
        <div className="absolute top-[14vw] left-[10vw]">
          <div className="w-[35vw]">
            <h1 className="leading-[3.5vw] xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[3vw]  font-bold   text-[white] font-sora   xs:text-center   lg:text-start">
              Grow Your Travel <br /> Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational <br />{" "}
              </span>{" "}
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                Travel Assistant{" "}
              </span>
            </h1>

            <p className=" xs:px-2 font-light font-Inter mt-5 mb-7 lg:text-[2vw] xl:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[3vw] md:items-center lg:items-baseline  xs:text-[4vw] text-start ">
              Gainwix empowers your agency to create a delightful travel
              experience for your customers, from initial inquiry to post-trip
              support. Let's transform your travel business together!
            </p>
            <div className="items-center gap-5 z-50">
              <a
                href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                target="_blank"
                rel="noreferrer"
                // className="2xl:mt-[-0.7vw]"
              >
                {" "}
                <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold pointer ">
                  Request Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden flex flex-col justify-center items-center gap-4 py-10 px-5">
        <div className="xs:pt-[38vw] s:pt-[20vw] md:pt-[20vw] w-full text-center">
          <h1 className="xs:text-[7vw] sm:text-[5vw] text-[3.5vw] font-bold   text-[white] font-sora">
            Grow Your Travel Business With
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora pl-3">
              AI Conversational Travel Assistant
            </span>
          </h1>

          <p className="xs:text-[2.8vw] xs:px-2 font-light font-Inter mt-5 mb-7 sm:text-[2vw] text-[#908eb5] xl:w-[28.5vw] md:items-center lg:items-baseline xl:text-start ">
            Gainwix empowers your agency to create a delightful travel
            experience for your customers, from initial inquiry to post-trip
            support. Let's transform your travel business together!
          </p>

          <div className="items-center gap-5 ">
            <a
              href="https://calendly.com/sales-h-cn/30min?month=2024-12"
              target="_blank"
              rel="noreferrer"
              className="2xl:mt-[-0.7vw]"
            >
              {" "}
              <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold pointer">
                Request Demo
              </button>
            </a>
          </div>
        </div>
        <Image src={travelTab} alt="" className="" />
      </div>

      <div className="lg:mt-[30vw] xl:mt-20">
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
          <div className=" from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l  ">
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
                  <div className="md:block  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[3vw] xs:w-[90%]  leading-[3.5vw] lg:w-[40vw] font-bold text-[white] font-sora">
                    Boost Bookings <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw] lg:text-[3vw]  font-bold">
                      & Revenue{" "}
                    </span>
                  </div>
                  <div className="md:hidden  xs:ml-[-6vw] xs:text-[8vw] md:w-[50%] md:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Boost Bookings
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw]  font-bold">
                      & Revenue{" "}
                    </span>
                  </div>
                </div>
              }
              list={TravelCardList}
              image={TravelCard1}
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l pb-[5vw] ">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[4rem] xs:mx-[1rem] "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF]  lg:text-[1vw] md:text-[2vw] font-semibold pl-2 xl:px-4">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="md:hidden lg:block xs:text-[8vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:leading-[3.5vw] lg:text-[3vw] lg:w-[60vw] font-bold text-[white] font-sora tracking-wide">
                    Cultivate Customer 
                    <p className=" xs:text-[8vw] md:text-[2.5vw]  lg:text-[3vw]  lg:w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention & Loyalty
                      </span>
                    </p>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Cultivate Customer 
                    <p className=" xs:text-[8vw] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention & Loyalty
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={TravelCardList1}
              image={TravelCard2}
            ></CommonCard>
          </div>
          <div className=" from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l md:pb-[8vw]">
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
                  <div className="md:block xs:hidden  md:text-[2vw]  md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide">
                    <span className="text-[white]  lg:text-[3vw] xl:w-[40vw] leading-[3.5vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Seamless Support & <br />
                      <span className=" lg:text-[3vw] xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Improved Efficiency{" "}
                      </span>
                    </span>
                  </div>
                  <div className="md:hidden xs:block md:text-[2vw]  md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide">
                    <span className="text-[white] lg:text-[2.2vw] xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Seamless Support & <br />
                      <span className="lg:text-[2.2vw] xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Improved Efficiency{" "}
                      </span>
                    </span>
                  </div>
                </>
              }
              list={TravelCardList2}
              image={TravelCard3}
              revers
            ></CommonCard>
          </div>
        </div>
      </div>

      <div className="py-10">
        <DigitalMarketing />
      </div>
      <div className="mt-10">
        <BrandScroll />
      </div>

      <div className="">
        <div className="flex justify-center text-[3vw] font-semibold">
          <h1 className="lg:text-[3vw] md:text-[3vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] py-16 text-center xl:tracking-wide">
            <p className="lg:pl-10">Personalize Customer Experience To</p>
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h1>
        </div>

        <div className="lmd:w-full mt-5 overflow-x-auto lg:overflow-visible 2xl:w-[64vw] xl:w-[74vw] xl:m-auto">
          <div
            className="
      flex flex-row md:gap-5 xs:flex-row sm:flex-row overflow-x-auto
      md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-5
      lg:grid-cols-5 lg:grid-rows-1 lg:gap-5"
          >
            {CommerceCardList?.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 xs:w-[45%] w-[80%] sm:w-[60%] md:w-full lg:w-auto flex flex-col items-center xs:px-5 md:px-5   gradient-borders  last:border-r-0 
"
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
