import React from "react";
import { BsSearchHeart } from "react-icons/bs";
import ImgAboutMe from "../../image/aboutme-img.jpg";
import { Animated } from "react-animated-css";


const Introduction = () => {
  return (
    <div className="bg-gradient-to-r h-screen flex flex-col justify-between items-center">
      <div className="w-full flex justify-around items-start h-60">
        <div className="text-white flex justify-start items-center w-1/2 text-3xl mt-10">
          <BsSearchHeart className="mr-5 " />
          PAGE 01
        </div>
        <div className="flex justify-between w-20 h-64">
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
        </div>
      </div>
      <div className="w-5/6 flex justify-center h-1/2 pb-20">
        <Animated
          className="img-aboutme w-3/5"
          animationIn="zoomIn"
          isVisible={true}
          animationInDuration={1500}
        >
          <img
            src={ImgAboutMe}
            alt="img-home"
            className="rounded-full w-full object-cover"
          />
        </Animated>

        <div className="w-2/6 text-white text-right ml-2">
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
          >
            <h3 className="text-5xl font-bold mb-5">ABOUT ME</h3>
          </Animated>
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
            animationInDelay={500}
          >
            <p className="text-lg">
              I am a Front-end Developer, I have been passionate about art and
              color since I was young, so I decided to follow the path of
              becoming a professional Front-end Developer. My strengths are
              color coordination, reasonable layout design and rich imagination.
            </p>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
