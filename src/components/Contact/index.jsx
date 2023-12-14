import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex h-screen justify-around bg-gradient-to-l ">
      <div className="flex h-full w-1/3 flex-col justify-start">
        <div className=" flex w-20 justify-between" style={{ height: "350px" }}>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
        <div className="mt-10">
          <Animated
            className="mb-5 text-6xl font-bold text-white"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
          >
            CONTACT ME
          </Animated>
          <div className="flex flex-wrap justify-start">
            <Animated
              className="mb-1 w-1/3 text-lg font-semibold text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={300}
            >
              Phone
            </Animated>
            <Animated
              className="w-2/3 text-lg text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={400}
            >
              0325.262.564
            </Animated>
            <Animated
              className="mb-1 w-1/3 text-lg font-semibold text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={500}
            >
              Email
            </Animated>
            <Animated
              className="w-2/3 text-lg text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={600}
            >
              khtrinh.work@gmail.com
            </Animated>
            <Animated
              className="mb-1 w-1/3 text-lg font-semibold text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={700}
            >
              GitHub
            </Animated>
            <Animated
              className="w-2/3 text-lg text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={800}
            >
              <Link
                to="https://github.com/trinhnk-dev"
                className="w-2/3 text-lg text-white underline"
                target="_blank"
              >
                github.com/trinhnk-dev
              </Link>
            </Animated>
            <Animated
              className="mb-1 w-1/3 text-lg font-semibold text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={900}
            >
              Address
            </Animated>
            <Animated
              className="w-2/3 text-lg text-white"
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              animationInDelay={1000}
            >
              Ho Chi Minh City, Viet Nam
            </Animated>
          </div>
        </div>
      </div>

      <div className=" flex h-screen w-1/3 flex-col items-end justify-center">
        <div className="h-5 w-5 rounded-full border-2 border-white"></div>
        <div className="mb-2 mt-2 h-5 w-5 rounded-full border-2 border-white"></div>
        <div className="h-5 w-5 rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Contact;
