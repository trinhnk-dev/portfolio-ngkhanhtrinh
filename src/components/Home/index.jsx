import React from "react";
import ImgHome from "../../image/home-img.jpg";
import { Animated } from "react-animated-css";

const Home = () => {
  return (
    <div className="bg-gradient-to-r h-screen flex justify-center">
      <div className="w-5/12 flex flex-col justify-center items-start">
        <Animated
          className="home-portfolio"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1500}
        >
          <div className="text-black p-3 bg-white rounded-lg text-center  ">
            <Animated
              animationIn="fadeIn"
              isVisible={true}
              animationInDuration={1500}
            >
              <p className="text-2xl font-extrabold">PORTFOLIO</p>
            </Animated>
          </div>
        </Animated>
        <Animated
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1500}
          animationInDelay={500}
        >
          <div className="text-white text-left ngkhanhtrinh">
            <p className="font-black mt-8 animate__fadeInLeft">
              NGUYỄN <br /> KHÁNH TRÌNH
            </p>
          </div>
        </Animated>
        <Animated
          animationIn="fadeInLeft"
          isVisible={true}
          animationInDuration={1000}
          animationInDelay={800}
        >
          <div className="text-white text-left fe-dev">FRONT-END DEVELOPER</div>
        </Animated>
      </div>

      <Animated
        className="w-5/12 flex justify-center items-center relative h-screen"
        animationIn="fadeIn"
        isVisible={true}
        animationInDuration={1200}
      >
        <div className="absolute top-0 flex justify-between w-20 h-20">
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
        </div>
        <div className="img-home w-1/2 z-10">
          <img
            src={ImgHome}
            alt="img-home"
            className="rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 flex justify-between w-20 h-20">
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
          <div className="border-r-2 bg-white w-px"></div>
        </div>
        <div className="absolute right-0 flex flex-col justify-between items-end w-20 h-20">
          <div className="border-2 border-white w-5 h-5 rounded-full"></div>
          <div className="border-2 border-white w-5 h-5 rounded-full mt-2 mb-2"></div>
          <div className="border-2 border-white w-5 h-5 rounded-full"></div>
        </div>
      </Animated>
    </div>
  );
};

export default Home;
