import React from "react";
import ImgHome from "../../image/home-img.jpg";
import { Animated } from "react-animated-css";

const Home = () => {
  return (
    <div className="background-gray pt-16" id="home">
      <div className="container flex justify-between py-20 sm:flex-col-reverse lg:flex-row">
        <div className="2xl:w-5/12 flex flex-col items-start justify-around md:w-3/5">
          <div>
            <Animated
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1000}
              animationInDelay={800}
              className="fe-dev text-left"
            >
              FRONT-END DEVELOPER
            </Animated>
            <Animated
              animationIn="fadeIn"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={500}
              className="ngkhanhtrinh text-left "
            >
              <p className="animate__fadeInLeft mt-8 font-black">
                NGUYỄN <br /> KHÁNH TRÌNH
              </p>
            </Animated>

            <p>
              Hi, I'm Nguyễn Khánh Trình. A passionate Front-end Developer{" "}
              <br /> living in Ho Chi Minh City, VietNam. 📍
            </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-semibold border-r-2 border-black pr-5">Tech Stack</h1>
            <div className="flex justify-around w-3/4">
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="html,css"
                
              />
              <img
                src="https://skillicons.dev/icons?i=js,redux"
                alt="js,redux"
                
              />
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="reactjs,nextjs"
                
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="tailwind,scss"
              />
            </div>
          </div>
        </div>

        <Animated
          className="relative flex w-5/12 items-center justify-center"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1200}
        >
          {/* <div className="absolute top-0 flex h-48 w-20 justify-between">
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
          </div> */}
          <div className="img-verticle z-10">
            <img
              src={ImgHome}
              alt="img-home"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          {/* <div className="absolute bottom-0 flex h-48 w-20 justify-between">
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
            <div className="w-px border-r-2 bg-white"></div>
          </div> */}
          <div className="absolute right-0 flex h-20 w-20 flex-col items-end justify-between">
            <div className="h-5 w-5 rounded-full border-2 border-black"></div>
            <div className="mb-2 mt-2 h-5 w-5 rounded-full border-2 border-black"></div>
            <div className="h-5 w-5 rounded-full border-2 border-black"></div>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default Home;
