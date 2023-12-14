import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import ImgEducation from "../../image/education-img.jpg";
import { Animated } from "react-animated-css";

const Education = () => {
  return (
    <div className="bg-gradient-to-r h-screen flex flex-col justify-start items-center">
      <div className="w-4/5 flex justify-between items-start h-60">
        <div className="flex justify-between w-20 h-64">
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
        </div>
        <div className="text-white flex justify-end items-center w-1/2 text-3xl mt-20">
          PAGE 02
          <IoSchoolOutline className="ml-5 text-5xl" />
        </div>
      </div>
      <div className="flex justify-between items-center h-full w-4/5">
        <div className="w-1/3 text-white text-left">
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1200}
          >
            <h3 className="text-6xl font-bold mb-5">EDUCATION</h3>
          </Animated>
          <Animated
            className="mb-4"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
            animationInDelay={500}
          >
            <h6 className="font-semibold text-xl">2019 - 2023</h6>
            <h6 className="font-semibold text-xl">FPT University HCMC</h6>
            <Animated
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={1000}
            >
              <p className="font-light text-lg">Software Engineering</p>
            </Animated>
          </Animated>
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={2000}
            animationInDelay={800}
          >
            <h6 className="font-semibold text-xl">Apr 2022 - Oct 2022</h6>
            <h6 className="font-semibold text-xl">Cybersoft Academy HCMC</h6>
            <Animated
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={1000}
            >
              <p className="font-light text-lg">
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
            className="rounded-full w-6/7 object-cover"
          />
        </Animated>
      </div>
    </div>
  );
};

export default Education;
