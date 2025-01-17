"use client";
import { cn } from "@helpers/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BulletPoint from "../assets/Icons/bullet.svg";
import { EducationAnimation, EducationScrolling } from "@constants/ecommerce";
import educatAni from "../assets/Icons/educatAni.svg";

interface ListItem {
  text?: string;
  content: string;
}

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  customTitle?: React.ReactNode; // Renamed to avoid conflict
  content?: string;
  list?: ListItem[];
  className?: string;
  cardClassName?: string;
  revers?: boolean;
  text?: boolean;
  heightMatch?: boolean;
  imageAnimation?: boolean;
  imageAnimationimage?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const {
    image,
    customTitle,
    content,
    list,
    className,
    cardClassName,
    revers,
    text,
    heightMatch,
    imageAnimation,
    imageAnimationimage,
    ...restProps
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === EducationAnimation.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [EducationAnimation.length]);

  return (
    <div
      className={cn(
        `flex items-center 
        ${revers ? "md:flex-row-reverse gap-10 " : "md:flex-row"}
        max-md:flex-col   xl:w-[72vw] xl:m-auto xs:mx-5  `,
        className
      )}
      {...restProps}
    >
      <div
        className={cn(
          `${revers ? "text-left " : "text-left"} 
          md:w-1/2 max-md:w-full flex flex-col  `,
          cardClassName
        )}
      >
        {customTitle && (
          <div className="w-full  md:text-[1.5vw]">{customTitle}</div>
        )}
        {content && (
          <p
            className={`md:text-lg font-medium text-[#3B3F46] mt-5 mb-7  md:w-[80vw] xs:w-[75vw] xs:text-[3vw] xl:w-full font-Inter ${
              revers ? "max-md:w-full flex flex-col w-full text-left" : "w-5/6"
            }`}
          >
            {content}
          </p>
        )}
        {list && (
          <div className={`w-full ${text ? "mt-[1vw]" : ""}`}>
            {list.map((data) => (
              <div
                className="flex items-center gap-[0.8vw] py-2  md:mx-[-1vw]"
                key={data.text || data.content}
              >
                {text ? (
                  <div className="flex flex-col ">
                    <div className="flex tracking-wide lg:w-[32vw] ">
                      <Image
                        src={BulletPoint}
                        alt="list icon"
                        className="md:mb-6 xs:w-[5vw] md:w-[3vw] lg:mt-2 lg:w-[2vw] xl:w-[1.5vw] "
                      />
                      <h1 className="lg:text-[2.6vw] xl:text-[1.6vw] xs:pl-[2vw] md:pl-[1vw] font-semibold from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-l bg-clip-text text-transparent md:text-[3vw] xs:text-[5vw] font-Sora">
                        {data.text}
                      </h1>
                    </div>
                    <p className="xs:pt-3 md:pt-0 xs:leading-1 font-Inter tracking-wide xl:w-[30vw] 2xl:w-[32vw] lg:w-[42vw] md:w-[30vw] lg:text-[2.2vw] xl:text-[1vw] md:text-[2vw] font-medium text-[#908EB5] xs:text-[4vw] xs:w-[85vw] ">
                      {data.content}
                    </p>
                  </div>
                ) : (
                  <div className="flex lg:text-lg font-medium align-center font-Inter tracking-wide">
                    <li className="pl-[1.8vw] xs:leading-1 md:leading-7 md:w-[38vw] lg:w-[35vw] xl:text-[0.95vw] md:text-[1.5vw]  font-medium text-[#908EB5] md:mt-3 lg:mt-[0.03vw] xs:text-[4vw]">
                      {data.content}
                    </li>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="xs:w-[90vw] md:w-[70vw]  lg:w-[40vw] xl:w-[82vw] xl:h-[65vh] ">
          <Image
            src={image}
            alt="Card Image"
            className={`xl:w-[82vw] xl:h-[65vh] lg:w-[40vw] lg:h-[40vh] 2xl:w-[85vw]  2xl:h-[60vh]  md:h-[40vh] xl:mt-[5vw] 2xl:mt-20   md:ml-0  lg:mx-0 xs:mt-2 ${
              heightMatch && "2xl:h-[70vh]"
            }`}
          />
        </div>
      )}

      {imageAnimation && (
        <>
          <div className="xs:hidden lg:block w-full border rounded-3xl bg-[#0E1738] border-[#2D3154] xs:w-[90vw] md:w-[70vw]  lg:w-[40vw] xl:w-[82vw] xl:h-[65vh] px-10 !pb-10">
            <div className="relative flex items-end">
              <Image
                src={educatAni}
                alt="Card Image"
                className={`xl:w-[40vw] xl:h-[60vh] lg:w-[40vw] lg:h-[40vh]   md:h-[40vh] xl:mt-[5vw] 2xl:mt-20   md:ml-0  lg:mx-[10vw] xs:mt-2 z-10 flex justify-end ${
                  heightMatch && "2xl:h-[70vh]"
                }`}
              />
              <div className="flex flex-col absolute top-[2vw] z-0">
                {EducationAnimation?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`scroll-item mb-2 flex items-center transition-transform duration-700 ease-in-out ${
                        index === 1 && currentIndex === 0 // First image is visible
                          ? "translate-x-0 opacity-100" // First image is fixed
                          : index === 2 && currentIndex === 1 // Second image is active
                          ? "-translate-y-[200%] translate-x-[20%] opacity-100"
                          : index === 2 && currentIndex !== 1
                          ? "-translate-y-[-100%] opacity-0" // Second image slides in from bottom
                          : index === 1 && currentIndex === 1 // First image stays while second is active
                          ? "translate-x-0 opacity-100" // First image remains in place
                          : (index === 1 || index === 2) && currentIndex === 2 // First and second move left
                          ? "translate-x-[-100%] opacity-0" // Move off-screen to the left
                          : index === 3 && currentIndex === 2 // Third image is active
                          ? "-translate-y-[55%] opacity-100" // Third image slides in from bottom
                          : index === 3 && currentIndex !== 2 // Third image is off-screen
                          ? "translate-y-[-0%] opacity-0" // Move third image off-screen to the bottom
                          : "translate-x-[-100%] opacity-0" // Default: off-screen to the left
                      }`}
                    >
                      {data?.icon && (
                        <Image
                          src={data.icon}
                          alt={`Education Icon ${index + 1}`}
                          // width={100}
                          // height={150}
                          className="object-cover h-auto"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:hidden xs:w-[90vw] md:w-[70vw]  lg:w-[40vw] xl:w-[82vw] xl:h-[65vh] ">
            {/* <Image
              src={imageAnimationimage}
              alt="Card Image"
              className={`xl:w-[82vw] xl:h-[65vh] lg:w-[40vw] lg:h-[40vh] 2xl:w-[85vw]  2xl:h-[60vh]  md:h-[40vh] xl:mt-[5vw] 2xl:mt-20   md:ml-0  lg:mx-0 xs:mt-2 ${
                heightMatch && "2xl:h-[70vh]"
              }`}
            /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
