import React from "react";
import ImgHome from "../../image/home-img.jpg";
import { Animated } from "react-animated-css";

const Home = () => {
  return (
    <div className="flex h-screen sm:flex-col-reverse lg:flex-row sm:items-center justify-center bg-gradient-to-r">
      <div className="flex flex-col items-start justify-center md:w-6/12 2xl:w-5/12">
        <Animated
          className="home-portfolio"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1500}
        >
          <div className="relative rounded-lg bg-white p-3 text-center text-black">
            <p className="text-2xl font-extrabold">PORTFOLIO</p>
            <div className="box-top-left absolute z-10 h-3 w-3 bg-gray-400"></div>
            <div className="box-top-center absolute z-10 h-3 w-3 bg-gray-400"></div>
            <div className="box-top-right absolute z-10 h-3 w-3 bg-gray-400"></div>
            <div className="box-bottom-left absolute z-10 h-3 w-3 bg-gray-400"></div>
            <div className="box-bottom-center absolute z-10 h-3 w-3 bg-gray-400"></div>
            <div className="box-bottom-right absolute z-10 h-3 w-3 bg-gray-400"></div>
          </div>
        </Animated>
        <Animated
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1500}
          animationInDelay={500}
          className="ngkhanhtrinh text-left text-white"
        >
          <p className="animate__fadeInLeft mt-8 font-black">
            NGUYỄN <br /> KHÁNH TRÌNH
          </p>
        </Animated>
        <Animated
          animationIn="fadeInLeft"
          isVisible={true}
          animationInDuration={1000}
          animationInDelay={800}
          className="fe-dev text-left text-white"
        >
          FRONT-END DEVELOPER
        </Animated>
      </div>

      <Animated
        className="relative flex h-screen w-5/12 items-center justify-center"
        animationIn="fadeIn"
        isVisible={true}
        animationInDuration={1200}
      >
        <div className="absolute top-0 flex h-48 w-20 justify-between">
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
        <div className="img-verticle z-10">
          <img
            src={ImgHome}
            alt="img-home"
            className="rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 flex h-48 w-20 justify-between">
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
        <div className="absolute right-0 flex h-20 w-20 flex-col items-end justify-between">
          <div className="h-5 w-5 rounded-full border-2 border-white"></div>
          <div className="mb-2 mt-2 h-5 w-5 rounded-full border-2 border-white"></div>
          <div className="h-5 w-5 rounded-full border-2 border-white"></div>
        </div>
      </Animated>
    </div>
  );
};

export default Home;
