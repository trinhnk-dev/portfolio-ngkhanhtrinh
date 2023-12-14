import React from "react";
import { Animated } from "react-animated-css";
import { BsAward } from "react-icons/bs";
import ImgAward from "../../image/award-img.jpg";

const Award = () => {
  return (
    <div className="flex h-screen justify-center bg-gradient-to-r">
      <Animated
        className="relative flex h-screen w-5/12 items-center justify-start"
        animationIn="fadeIn"
        isVisible={true}
        animationInDuration={1200}
      >
        <div className=" flex h-20 w-20 flex-col items-start justify-between">
          <div className="h-5 w-5 rounded-full border-2 border-white"></div>
          <div className="mb-2 mt-2 h-5 w-5 rounded-full border-2 border-white"></div>
          <div className="h-5 w-5 rounded-full border-2 border-white"></div>
        </div>
        <div className="img-verticle z-10">
          <img
            src={ImgAward}
            alt="img-home"
            className="rounded-full object-cover"
          />
        </div>
      </Animated>
      <div className="flex w-5/12 flex-col items-end">
        <div className="mt-20 flex w-1/2 items-center justify-end text-3xl text-white">
          PAGE 04
          <BsAward className="ml-5 text-5xl" />
        </div>
        <Animated
          className=" flex h-full flex-col items-end justify-center"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1500}
        >
          <h3 className="text-right text-5xl font-bold text-white">
            3rd prize of F-Talent contest 2020 (FPTU’s annual talent contest)
          </h3>
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
            animationInDelay={500}
          >
            <p className="text-right text-lg font-light text-white">
              The band's Guitarist
            </p>
          </Animated>
        </Animated>

        <div className="absolute bottom-0 flex h-20 w-20 justify-between">
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Award;
