import React from "react";
import { GrSteps } from "react-icons/gr";
import ImgAboutMe from "../../image/aboutme-img.jpg";
import { Animated } from "react-animated-css";

const Introduction = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-gradient-to-l">
      <div className="h-60 flex w-4/5 items-start justify-between">
        <div className="mt-20 flex w-1/2 items-center justify-start text-3xl text-white">
          <GrSteps className="mr-5 text-5xl" />
          PAGE 01
        </div>
        <div className="flex h-64 w-20 justify-between">
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
      </div>
      <div className="flex h-full w-4/5 items-center justify-between">
        <Animated
          className="img-aboutme w-3/5 "
          animationIn="zoomIn"
          isVisible={true}
          animationInDuration={1500}
        >
          <img
            src={ImgAboutMe}
            alt="img-home"
            className="w-6/7 rounded-full object-cover "
            loading="lazy"
          />
        </Animated>

        <div className="ml-2 w-2/6 text-right text-white">
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
          >
            <p className="mb-2 text-6xl font-bold">ABOUT ME</p>
          </Animated>
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
            animationInDelay={500}
          >
            <p className="text-lg">
              I am a front-end developer with a passion for leadership. Strong
              creativity, layout and analysis capabilities. Team player with an
              eye for detail. With a background of playing musical instruments
              for 7 years, I believe my mission is to combine and express art
              through code.
            </p>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
