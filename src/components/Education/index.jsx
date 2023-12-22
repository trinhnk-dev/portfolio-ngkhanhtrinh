import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import ImgEducation from "../../image/education-img.jpg";
import { Animated } from "react-animated-css";

const Education = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start bg-gradient-to-r">
      <div className="h-60 flex w-4/5 items-start justify-between">
        <div className="flex h-64 w-20 justify-between">
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
        <div className="mt-20 flex w-1/2 items-center justify-end text-3xl text-white">
          PAGE 02
          <IoSchoolOutline className="ml-5 text-5xl" />
        </div>
      </div>
      <div className="flex h-full w-4/5 items-center justify-between">
        <div className="w-1/3 text-left text-white">
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1200}
          >
            <h3 className="mb-5 text-6xl font-bold">EDUCATION</h3>
          </Animated>
          <Animated
            className="mb-4"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
            animationInDelay={500}
          >
            <h6 className="text-xl font-semibold">2019 - 2023</h6>
            <h6 className="text-xl font-semibold">FPT University HCMC</h6>
            <Animated
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={1000}
            >
              <p className="text-lg font-light">Software Engineering</p>
            </Animated>
          </Animated>
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={2000}
            animationInDelay={800}
          >
            <h6 className="text-xl font-semibold">Apr 2022 - Oct 2022</h6>
            <h6 className="text-xl font-semibold">Cybersoft Academy HCMC</h6>
            <Animated
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={1000}
            >
              <p className="text-lg font-light">
                Professional Front-end Developer
              </p>
            </Animated>
          </Animated>
        </div>
        <Animated
          className="img-aboutme w-2/4"
          animationIn="fadeInDown"
          isVisible={true}
          animationInDuration={2000}
        >
          <img
            src={ImgEducation}
            alt="img-home"
            className="w-6/7 rounded-full object-cover"
            loading="lazy"
          />
        </Animated>
      </div>
    </div>
  );
};

export default Education;
