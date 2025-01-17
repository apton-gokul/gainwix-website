"use client";

// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";

import strargyImage1 from "../../assets/Icons/strargy1.svg";
import strargyImage2 from "../../assets/Icons/strar.gy2svg.svg";
import strargyImage3 from "../../assets/Icons/strargy3.svg";
import strargyImage4 from "../../assets/Icons/strargy4.svg";
import strargyImage5 from "../../assets/Icons/strargy5.svg";

// import strargyHero from "../../assets/Icons/strategy AI2.svg";
import Strargy from "../../assets/Icons/strategy AI (3.1).svg";
import strargyHero1 from "../../assets/Icons/strategy AI (2).svg";
import strargyHero from "../../assets/Icons/strategy AI (1.2).svg";
import strargyHero2 from "../../assets/Icons/board.svg";
import strargyHero3 from "../../assets/Icons/coin.svg";
import strategyLanding from "../../assets/Icons/strategyLanding.svg";
import strategyTab from "../../assets/Icons/strategyTab.svg";

// components
import React, { useEffect, useRef } from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";
import { StrargyList, StrargyType } from "@constants/home";

export default function Ecommerce() {
  return (
    <div className=" relative bg-[#060A22] ">
      <div className="relative xs:hidden lg:block">
        <Image src={strategyLanding} alt="" />
        <div className="absolute top-[14vw] left-[10vw]">
          <div className="w-[35vw]">
            <h1 className="xl:block leading-[3.8vw] 2xl:block xl:text-[3vw] sm-text-[1vw] md:text-[3vw] font-bold   text-[white] font-sora   xs:text-center   lg:text-start">
              Build Game Changing <br />
              <p className="xl:text-[3vw] xs:text-[7vw] lg:text-[2.5vw] md:text-[3vw] font-bold   text-[white] font-sora    xs:text-center   lg:text-start">
                {" "}
                Marketing Strategies <br />
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                  with Gainwix’s Strategy AI 
                </span>
              </p>
            </h1>
            <p className=" xs:px-2 font-light font-Inter mt-5 mb-7  xl:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw] md:items-center lg:items-baseline  xl:text-start ">
              Achieve your marketing goals faster with our AI-driven strategy
              tool designed for precision and results.
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
            Build Game Changing Marketing Strategies
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora pl-3">
              with Gainwix’s Strategy AI 
            </span>
          </h1>

          <p className="xs:text-[2.8vw] xs:px-2 font-light font-Inter mt-5 mb-7 sm:text-[2vw] text-[#908eb5] xl:w-[28.5vw] md:items-center lg:items-baseline xl:text-start ">
            Achieve your marketing goals faster with our AI-driven strategy tool
            designed for precision and results.
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
        <Image src={strategyTab} alt="" className="" />
      </div>

      <div className=" rounded-[120px] lg:min-h-[120vh] xl:min-h-[150vh] md:min-h-[150vh] ">
        <div className=" lg:py-0 xs:py-5  ">
          <div className=" from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <div className="xs:hidden md:block w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10">
              <h1 className="xl:text-[4vw] font-semibold text-[#FFFFFF] font-Sora text-center ">
                <p className="md:pl-10">Set new benchmarks and hit Goals</p>
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
                  effortlessly with our AI
                </span>
                <p className="xs:text-[1.5vw] xl:text-[1vw] text-[#908EB5] text-center ">
                  Leverage AI in every step of your digital marketing and
                  optimize your campaign performance
                </p>
              </h1>
            </div>
            <div className="xs:block md:hidden w-[100%] h-[35vh] flex justify-center text-[3vw] font-medium font-Sora pt-10 px-5">
              <h1 className="text-[6vw] font-bold text-[#FFFFFF] font-Sora text-center ">
                <p className="md:pl-10">
                  Set new benchmarks And <br /> Hit Goals{" "}
                  <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
                    Effortlessly{" "}
                  </span>
                </p>
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
                  with GainWix.AI
                </span>
                <p className="xs:text-[2vw] text-[#908EB5] text-center ">
                  Leverage AI in every step of your digital marketing and
                  optimize your campaign performance
                </p>
              </h1>
            </div>

            <CommonCard
              // className=" xl:mx-[9v] lg:mx-[3rem]  w-full "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[1vw] xs:mx-[0vw] md:mx-[-1vw] lg:mx-0  ">
                  <div className="md:hidden xs:text-[8vw] md:w-[50%] md:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Goal Setting and
                    <br />
                    <p className=" from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw]  font-bold">
                      Tracking
                    </p>
                  </div>
                  <div className="md:block  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[3vw] xs:w-[90%]   lg:w-[40vw] font-bold text-[white] font-sora 2xl:tracking-wide lg:leading-[3.5vw] ">
                    Goal Setting <br />
                    <p className=" from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[3vw] font-bold">
                      and Tracking
                    </p>
                  </div>
                  <div className="xs:text-[3vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Define clear marketing objectives and watch as our AI builds
                    a roadmap customized for your success. Strategy AI enables
                    you to set SMART goals, aligning every campaign with your
                    business priorities.
                  </div>
                </div>
              }
              image={strargyImage1}
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] lg:py-10 "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="md:hidden lg:block xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora tracking-wide">
                    Competitive and <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Market Analysis{" "}
                    </span>
                  </div>
                  <div className="lg:hidden xs:hidden   md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Competitive and <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                      Market Analysis
                    </span>
                  </div>
                  <div className=" xs:text-[3vw] xl:w-[30vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Stay one step ahead. Our AI analyzes competitor strategies
                    and industry trends, providing you with key insights to
                    leverage opportunities and identify growth areas in your
                    market.
                  </div>
                </div>
              }
              // list={EcommerceList2}
              image={strargyImage2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l  xl:py-10 xl:pb-20">
            <CommonCard
              text
              // className="xl:mx-[3rem] lg:mx-[4rem] xs:mx-[5vw] w-full"
              customTitle={
                <>
                  <div className="md:block xs:hidden  pt-[15vw] md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide leading-[3vw]">
                    <span className="text-[white] lg:text-[3vw] xl:w-[40vw] font-semibold  font-sora md:text-[4vw] xs:text-[8vw] ">
                      Channel Recommendations <br /> And
                      <span className="lg:text-[3vw] pl-3 xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Budget <br /> Allocation{" "}
                      </span>
                    </span>
                  </div>
                  <div className="md:hidden xs:block md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide xs:mt-5">
                    <p className="text-[white] lg:text-[2.2vw]  xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Channel Recommendations <br /> And
                      <span className="md:text-[4vw] xs:pl-2  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Budget <br /> Allocation{" "}
                      </span>
                    </p>
                  </div>
                  <div className="xs:text-[3vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Put your marketing dollars to work with intelligent budget
                    distribution across channels. Strategy AI identifies the
                    most effective channels and advises on budget allocation to
                    maximize your ROI.
                  </div>
                </>
              }
              revers
              // list={EcommerceList3}
              image={strargyImage3}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] lg:py-10 "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="md:hidden xs:hidden lg:block xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw]  font-bold text-[white] font-sora tracking-wide leading-[3.5vw]">
                    Performance <br />
                    Tracking
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent pl-3">
                      And <br />
                    </span>
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Optimization{" "}
                    </span>
                  </div>
                  <div className="md:hidden lg:hidden xs:block xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw]  font-bold text-[white] font-sora ">
                    Performance Tracking
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent pl-3">
                      And <br />
                    </span>
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Optimization{" "}
                    </span>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Competitive and <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                      Market Analysis
                    </span>
                  </div>
                  <div className="xs:text-[3vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Stay one step ahead. Our AI analyzes competitor strategies
                    and industry trends, providing you with key insights to
                    leverage opportunities and identify growth areas in your
                    market.
                  </div>
                </div>
              }
              // list={EcommerceList2}
              image={strargyImage4}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] pt-20 pb-[8vw]"
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="md:hidden lg:block  xs:hidden xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:w-[47vw] font-bold text-[white] font-sora tracking-wide leding-[3.5vw]">
                    Trend <br /> Forecasting And <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Future Planning{" "}
                    </span>
                  </div>
                  <div className="md:hidden lg:hidden xs:block xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:w-[47vw] font-bold text-[white] font-sora">
                    Trend Forecasting And <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Future Planning{" "}
                    </span>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Trend Forecasting And <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                      Future Planning{" "}
                    </span>
                  </div>
                  <div className="xs:text-[3vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Our predictive algorithms help you adapt to upcoming trends,
                    keeping your strategy aligned with shifts in the industry.
                    Stay innovative with insights into emerging techniques and
                    channels
                  </div>
                </div>
              }
              // list={EcommerceList2}
              image={strargyImage5}
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
          <h1 className=" lg:text-[3vw] md:text-[3vw] xs:text-[6vw] font-Sora font-semibold text-[#FFFFFF] pt-16 text-center xl:tracking-wide">
            <p className="lg:pl-10">
              Why Choose{" "}
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                Strategy AI{" "}
              </span>
            </p>
          </h1>
        </div>

        <div className="2xl:w-[64vw] flex flex-row  xl:gap-5 md:gap-5 xs:gap-[5vw] justify-start overflow-x-auto   md:w-full  xs:w-[90vw] xl:w-[70vw]  xs:m-auto xs:justify-start md:justify-center md:items-center xs:mt-10 !mb-20 ">
          {StrargyList?.map((data: StrargyType) => (
            <div
              className="xs:w-[70vw]  md:w-[30vw] md:h-[25vh] xs:h-[20vh] lg:w-[30%] lg:h-[23vh] xl:w-[20%] xl:h-[25vh] xs:rounded-[30px]   bg-gradient-to-b from-[#2d3154] via-[#2D3154] to-[#0c0b24] p-6 text-white shadow-lg "
              key={data?.id}
            >
              <div className="flex-col text-white w-full flex text-[1.2vw] align-center xl:mt-6 justify-center items-start ">
                <Image src={data?.icon} alt="" className="w-[30%] h-[30%]" />

                <span className="font-Inter pt-5 font-medium xs:text-[3vw] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1vw] text-[#FFFFFF]   xs:px-1">
                  {data?.content1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Growth />
    </div>
  );
}
