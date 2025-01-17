"use client";

import { PlanList } from "@constants/home";
import { Popover } from "antd";
import Image from "next/image";
import DropDown from "../assets/Icons/drop-down.svg";
import React, { useEffect, useState } from "react";

import DotIcon from "../assets/Icons/dot.svg";
import calc from "../assets/Icons/calc.svg";
import userCalc from "../assets/Icons/userClac.svg";

interface ContactItem {
  id: number;
  value: string;
}

const PricingCalculator = () => {
  // const [Country, setCountry] = useState("");
  // const [visible, setVisible] = useState(false);
  const [planOpen, setPlanOpen] = useState<null | ContactItem>(null);
  const [open, setOpen] = useState(false);
  const [Initiated, setInitiated] = useState(0);
  const [marketingCount, setMarketingCount] = useState(0);
  const [utilityCount, setUtilityCount] = useState(0);
  const [result, setResult] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalConversationCost, setTotalConversationCost] = useState(0);

  // const handleVisibleClick = () => {
  //   setVisible(!visible);
  // };

  const handlePlanChange = () => {
    setOpen(!open);
  };

  const handleInputFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarketingCount(Number(e.target.value));
  };
  const handleInputSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUtilityCount(Number(e.target.value));
  };

  const handleInitiatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitiated(Number(e.target.value));
  };

  // const ContactData = ({ setContactList }) => {
  //   const handleClick = (item: any) => {
  //     setCountry(item?.value);
  //     setVisible(false);
  //   };

  //   return (
  //     <div className="filter pointer overflow-auto listScroll">
  //       {setContactList?.map((item: any) => (
  //         <div
  //           className="flex-row w-100 align-center py-2 h-auto min-h-[5vh] overflow-scroll"
  //           key={item.id}
  //           onClick={() => handleClick(item)}
  //           style={{
  //             borderBottom: item?.id === 7 ? "none" : "1px solid #E8E8EA",
  //           }}
  //         >
  //           <p className="pl-2 py-2 rounded-lg category-content hover:bg-[#FBFBFB] text-[0.75vw] font-bold">
  //             {item.value}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  useEffect(() => {
    const ConversationCount = result + total;
    setTotalConversationCost(ConversationCount);
  }, [result, total]);

  const colculateMarketingandUtilityConversation = () => {
    const marketing = marketingCount * 0.9;
    const utility = utilityCount * 0.5;
    setResult(marketing + utility);

    let InitiatedCountCost;
    if (Initiated <= 1000) {
      InitiatedCountCost = 0;
    } else {
      InitiatedCountCost = (Initiated - 1000) * 0.5;
    }
    setTotal(InitiatedCountCost);
  };

  const PlanData: React.FC<{ setContactList: ContactItem[] }> = ({
    setContactList,
  }) => {
    const handlePlanClick = (item: ContactItem) => {
      setPlanOpen(item);
      setOpen(false);
    };

    return (
      <div className="filter pointer w-[24vw] overflow-auto listScroll">
        {setContactList?.map((item: ContactItem) => (
          <div
            className="flex-row w-100 align-center py-2 h-auto min-h-[5vh] overflow-scroll cursor-pointer"
            key={item.id}
            onClick={() => handlePlanClick(item)}
            // style={{
            //   borderBottom: item?.id === 3 ? "none" : "1px solid #E8E8EA",
            // }}
          >
            <p className="pl-2 py-2 rounded-lg category-content hover:bg-[#2D2E4F] text-[0.75vw] font-bold text-[#908EB5]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <p className="py-10 text-[3vw] font-bold font-Inter text-[white]">
        Estimate
        <span className=" font-Inter pl-2 from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
          Your Conversation Usage Cost
        </span>
      </p>
      <div className=" bg-[#12152E] rounded-3xl  mt-4 ">
        <div className="flex flex-col items-center">
          <div className="xs:w-[100vw] md:w-[95vw]  lg:w-[80vw] xl:w-[70vw]   rounded-[26px] shadow-[0px_4px_16px_0px_#2D30360F] flex flex-col items-start justify-between ">
            <div className="w-[100%] flex md:flex-row md:justify-between xs:justify-center border border-[#2D3154] p-6 rounded-t-3xl">
              <Image src={DotIcon} alt="" className="xs:hidden md:block" />
              <p className="xs:text-[5vw] md:text-[1.5vw] lg:text-[1vw] font-semibold font-Inter text-[white]">
                Conversation Cost Calculator
              </p>
            </div>
            <div className="w-full justify-between h-full flex md:flex-row xs:flex-col rounded-[26px] p-6">
              <div className="w-[45%] p-5">
                <div className="flex flex-col mt-4">
                  <p className="xs:text-[4vw] md:text-[2vw] lg:text-[1.25vw] font-Inter font-medium text-[#908EB5]">
                    Plan
                  </p>
                  <Popover
                    placement="bottom"
                    content={<PlanData setContactList={PlanList} />}
                    trigger="click"
                    open={open}
                    arrow={false}
                    onOpenChange={handlePlanChange}
                  >
                    <div className="flex flex-row justify-between pointer xs:w-[70vw] lg:w-[100%] md:w-[25vw] px-3 py-3 mt-4 border border-[#2D3154] outline-none rounded-[8px]  cursor-pointer">
                      <p className="xs:text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-Inter  font-medium text-[#908EB5]">
                        {planOpen
                          ? (planOpen as { value: string })?.value
                          : "Select a plan"}
                      </p>
                      <Image src={DropDown} alt="DropDown" />
                      {/* <img
                        src={ICONS.BroadcastChevronDownIcon}
                        alt="Chevron"
                        className="w-[20px]"
                      /> */}
                    </div>
                  </Popover>
                  <div className="flex flex-col mt-6">
                    <div className="flex items-center">
                      <p className="xs:text-[4vw] md:text-[2vw] lg:text-[1.25vw] xs:w-[60vw] font-Inter font-medium text-[#908EB5]">
                        No. of Marketing Messages
                      </p>
                      <div className="flex items-center flex-row border xs:w-[70vw] lg:w-[25vw] md:w-[97%] rounded-[10px]  border-[#2D3154] bg-[#12152E]">
                        <div className="border-r-[1px] border-[#2D3154] px-2">
                          <Image src={calc} alt="" />
                        </div>
                        <input
                          type="number"
                          className="w-[100%] h-[4.5vh] px-4  outline-none  rounded-[10px] xs:text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-semibold text-[white]  bg-[#12152E] border-[#2D3154]"
                          value={Initiated}
                          onChange={handleInitiatedChange}
                        />
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="100"
                        value={marketingCount}
                        onChange={handleInputFirstChange}
                        className="w-full h-2 bg-[#2D3154] appearance-none rounded-lg focus:outline-none slider-thumb"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <div className="flex items-center">
                      <p className="xs:text-[4vw] md:text-[2vw] lg:text-[1.25vw] xs:w-[60vw]  font-Inter font-medium text-[#908EB5]   border-[#2D3154]">
                        No. of Utility Messages
                      </p>

                      <div className="flex items-center flex-row border xs:w-[70vw] lg:w-[25vw] md:w-[97%] rounded-[10px] border-[#2D3154]">
                        <div className="border-r-[1px] border-[#2D3154] px-2">
                          <Image src={calc} alt="" />
                        </div>
                        <input
                          type="number"
                          className="w-[100%] h-[4.5vh] px-4  outline-none  rounded-[10px] xs:text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-semibold text-[white] bg-[#12152E]  border-[#2D3154]"
                          value={utilityCount}
                          onChange={handleInputSecondChange}
                        />
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={utilityCount}
                        onChange={handleInputSecondChange}
                        className="w-full h-2 bg-[#2D3154] appearance-none rounded-lg focus:outline-none slider-thumb"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-6 ">
                    <div className="flex items-center">
                      <p className="xs:text-[4vw] md:text-[2vw] lg:text-[1.25vw] xs:w-[60vw] font-Inter font-medium text-[#908EB5]">
                        No. of User Initiated Messages
                      </p>
                      <div className="flex items-center flex-row border xs:w-[70vw] lg:w-[25vw] md:w-[97%] rounded-[10px]  border-[#2D3154] bg-[#12152E]">
                        <div className="border-r-[1px] border-[#2D3154] px-2">
                          <Image src={userCalc} alt="" />
                        </div>
                        <input
                          type="number"
                          className="w-[100%] h-[4.5vh] px-4  outline-none  rounded-[10px] xs:text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-semibold text-[white]  bg-[#12152E] border-[#2D3154]"
                          value={Initiated}
                          onChange={handleInitiatedChange}
                        />
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={Initiated}
                        onChange={handleInitiatedChange}
                        className="w-full h-2 bg-[#2D3154] appearance-none rounded-lg focus:outline-none slider-thumb"
                      />
                    </div>
                  </div>

                  <div
                    className="h-14 w-[100%] justify-center mt-10 flex items-center gap-5 "
                    onClick={colculateMarketingandUtilityConversation}
                  >
                    {/* <Button type="primary"> */}
                    <p className="btn btn_primary flex  items-center">
                      Calculate
                    </p>
                    {/* <div className="-rotate-90">
                        <ArrowDown color={"#fff"} />
                      </div>
                    </Button> */}
                  </div>
                </div>
              </div>
              <div className="w-[50%] ">
                <div>
                  <p className="flex justify-center p-4 xs:w-[85vw] lg:w-full md:w-[30vw] xs:text-[4vw] md:text-[2vw] lg:text-[1.3vw] font-Sora font-semibold text-[white]">
                    Platform Fee
                  </p>
                  <div
                    className="flex flex-row py-3 justify-between align-center  items-center"
                    // style={{
                    //   borderBottom: "1px solid #2D3154",
                    //   // borderImageSource:
                    //   //   "linear-gradient(90deg, rgba(45, 49, 84, 0.05) 0%, #2D3154 50%, rgba(45, 49, 84, 0.02) 100%)",
                    // }}
                  >
                    <div>
                      <p className="lg:text-[1.25vw] font-Inter font-medium text-[#908EB5] pb-5">
                        Plan
                      </p>
                      <p className="border py-3 px-5 rounded-2xl border-[#2D3154] text-[#0ACD95] text-[0.85vw] font-black">
                        {planOpen
                          ? (planOpen as { value: string }).value
                          : "***"}
                      </p>
                    </div>
                    <div>
                      <p className="lg:text-[1.25vw] font-Inter font-medium text-[#908EB5] pb-5">
                        Platform Fee
                      </p>
                      <div className="flex items-center flex-row border  rounded-2xl  border-[#2D3154] bg-[#12152E]">
                        <div className="border-r-[1px] border-[#2D3154] px-2 text-[#908EB5]">
                          ₹
                        </div>
                        <input
                          type="number"
                          className="!h-[5vh] pl-4 outline-none !rounded-2xl xs:text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-semibold text-[white]  bg-[#12152E] border-[#2D3154]"
                          value={
                            planOpen
                              ? (planOpen as unknown as { cost: string }).cost
                              : "*** "
                          }
                          onChange={handleInitiatedChange}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-[1.25vw] font-Inter font-medium text-[#908EB5] pb-5">
                        Per Conv. chat
                      </p>
                      <div className="flex items-center flex-row border  rounded-2xl  border-[#2D3154] bg-[#12152E]">
                        <div className="border-r-[1px] border-[#2D3154] px-2 text-[#908EB5]">
                          ₹
                        </div>
                        <input
                          type="number"
                          className="!h-[5vh] pl-4 outline-none !rounded-2xl xs:text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-semibold text-[white]  bg-[#12152E] border-[#2D3154]"
                          value={Initiated}
                          onChange={handleInitiatedChange}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="flex justify-center xs:w-[85vw] md:w-[25vw] lg:w-[34vw] p-8 xs:text-[4vw] md:text-[2vw] lg:text-[1vw] font-Sora font-bold text-[#D4D4D4]">
                    Conversation fee
                  </p>
                  <div className="flex flex-col gap-10">
                    <div className="flex md:flex-row xs:flex-col items-center px-2">
                      <div className="flex flex-col">
                        <p className="xs:text-[4vw] md:text-[1.5vw] lg:text-[1vw] font-Inter font-black text-[#0ACD95] xs:w-[80vw] md:w-[30vw] lg:w-[21.3vw] ">
                          <span>Business Initiated Conversations:</span>
                        </p>
                        <span className="xs:text-[3vw] md:text-[1.5vw] xl:mt-0 lg:text-[1vw] font-medium text-[#898E99] xs:mt-[2vw] ">
                          <p>( Marketing + Utility )</p>
                        </span>
                      </div>
                      <p className="xs:w-[78vw] md:w-[45vw]  lg:w-[40%] h-[7vh] flex flex-row align-center items-center rounded-2xl xs:border border-[#2D3154] xs:mt-[5vw] md:mt-0 lg:mt-0">
                        <span className="bg-[]  h-[5vh] rounded-sm flex  align-center items-center text-white xs:pl-5 lg:pl-4 lg:pr-3 border-r-[1px] border-[#2D3154]">
                          ₹
                        </span>
                        <span className="text-[white] xs:text-[3vw] md:text-[0.85vw] font-bold pl-2">
                          {result || 0}
                        </span>
                      </p>
                    </div>
                    <div className="flex md:flex-row  xs:flex-col gap-5 md:justify-between px-2 items-center">
                      <div className="flex flex-col">
                        <p className="xs:text-[4vw] md:text-[1.5vw] lg:text-[1vw] font-Inter font-black text-[#0ACD95] xs:w-[80vw] md:w-[30vw] lg:w-[20vw]">
                          <span>User Initiated Conversations:</span>
                        </p>
                        <span className="xs:text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-medium text-[#898E99] xs:mt-[2vw] md:mt-[2vw] lg:mt-0">
                          <p>( Service conversations )</p>
                        </span>
                      </div>
                      <p className="xs:w-[78vw] md:w-[45vw]  lg:w-[40%] h-[7vh] flex flex-row align-center items-center rounded-2xl border border-[#2D3154] xs:mt-[2vw] md:mt-0 lg:mt-0">
                        <span className="bg-[]  h-[5vh] rounded-sm flex  align-center items-center text-white xs:pl-5 lg:pl-4 lg:pr-3 border-r-[1px] border-[#2D3154]">
                          ₹
                        </span>
                        <span className="text-[white] xs:text-[3vw] md:text-[0.85vw] font-bold pl-2">
                          {total}
                        </span>
                      </p>
                    </div>
                    <div
                      className="flex md:flex-row  xs:flex-col items-center md:justify-between  px-4 py-3 xs:mt-[-15vw] md:mt-0 lg:mt-0 bg-[#6940F2] rounded-2xl outline-none"
                      // style={{
                      //   borderTop: "1px solid #2D3154",
                      //   // borderImageSource:
                      //   //   "linear-gradient(90deg, rgba(45, 49, 84, 0.05) 0%, #2D3154 50%, rgba(45, 49, 84, 0.02) 100%)",
                      // }}
                    >
                      <div className="flex flex-col">
                        <p className="xs:text-[4vw] md:text-[2vw] lg:text-[1.10vw] font-semibold font-Inter text-white xs:w-[80vw] md:w-[30vw] lg:w-[20vw]">
                          <p>Total Conversation Cost:</p>
                        </p>
                      </div>
                      <p className="xs:w-[78vw] md:w-[40vw] h-[7vh]  lg:w-[40%] flex flex-row align-center items-center rounded-2xl xs:mt-[2vw] lg:mt-0 bg-[#2B2E4F]">
                        <span className="bg-[]  h-[5vh] rounded-sm flex  align-center items-center text-white xs:pl-5 lg:pl-4 lg:pr-3 border-r-[2px] border-[#2D3154]">
                          ₹
                        </span>
                        <span className="text-[white] xs:text-[3vw] md:text-[0.85vw] font-bold pl-2">
                          {totalConversationCost}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
