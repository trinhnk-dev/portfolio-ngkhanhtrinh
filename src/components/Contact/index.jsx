import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import ContactAnimate from "../../contact.json"

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="background-gray" id="contact">
      <div className="flex py-5 justify-around items-center container">
        <div className="flex flex-col justify-center">
          <div className="mt-10">
            <h1
              className="mb-5 text-6xl font-bold "
            >
              CONTACT ME
            </h1>
            <div className="flex flex-wrap justify-start">
              <Animated
                className="mb-1 w-1/6 text-lg font-semibold "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={300}
              >
                Phone
              </Animated>
              <Animated
                className="w-5/6 text-lg "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={400}
              >
                0325.262.564
              </Animated>
              <Animated
                className="mb-1 w-1/6 text-lg font-semibold "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={500}
              >
                Email
              </Animated>
              <Animated
                className="w-5/6 text-lg "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={600}
              >
                khtrinh.work@gmail.com
              </Animated>
              <Animated
                className="mb-1 w-1/6 text-lg font-semibold "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={700}
              >
                GitHub
              </Animated>
              <Animated
                className="w-5/6 text-lg "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={800}
              >
                <Link
                  to="https://github.com/trinhnk-dev"
                  className="w-5/6 text-lg  underline"
                  target="_blank"
                >
                  github.com/trinhnk-dev
                </Link>
              </Animated>
              <Animated
                className="mb-1 w-1/6 text-lg font-semibold "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={700}
              >
                LinkedIn
              </Animated>
              <Animated
                className="w-5/6 text-lg "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={800}
              >
                <Link
                  to="https://www.linkedin.com/in/trinhnk-dev/"
                  className="w-5/6 text-lg  underline"
                  target="_blank"
                >
                  linkedin.com/in/trinhnk-dev/
                </Link>
              </Animated>
              <Animated
                className="mb-1 w-1/6 text-lg font-semibold "
                animationIn="fadeInLeft"
                isVisible={true}
                animationInDuration={1500}
                animationInDelay={900}
              >
                Address
              </Animated>
              <Animated
                className="w-5/6 text-lg "
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
  
        <Lottie
            options={defaultOptions}
            height={250}
            width={500}
            style={{ borderRadius: "15px", margin: 0 }}
          />
      </div>
    </div>
  );
};

export default Contact;
