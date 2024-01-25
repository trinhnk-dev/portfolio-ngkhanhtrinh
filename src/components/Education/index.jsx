import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import ImgEducation from "../../image/education-img.jpg";
import { Animated } from "react-animated-css";
import EducationLottie from "../../education.json";
import Lottie from "react-lottie";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EducationLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="background-gray" id="education">
      <div className="container py-32">
        <div className="flex items-center justify-between">
          <div className="w-2/3 text-left">
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
                <p className="text-lg font-light">
                  Bachelor's degree in Software Engineering
                </p>
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
                <p className="text-lg font-light">Front-end Web Foundation</p>
              </Animated>
            </Animated>
          </div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{ borderRadius: "15px", margin: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
