import React from "react";
import { GrSteps } from "react-icons/gr";
import ImgAboutMe from "../../image/aboutme-img.jpg";
import { Animated } from "react-animated-css";
import Laptop from "../../laptop-hello.json";
import Lottie from "react-lottie";

const Introduction = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Laptop,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container" id="about">
      <div className=" py-32">
        <div className="flex justify-between items-center">
          <div className="w-2/5">
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
              style={{ borderRadius: "15px" }}
            />
          </div>

          <div className="ml-5 w-3/5 text-left">
            <p className="mb-2 text-6xl font-bold">ABOUT ME</p>
            <p className="text-lg">
              Hey, my name is Nguyễn Khánh Trình, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
              <br/>
              <br/>
              My main stack currently is ReactJS/NextJS in combination with SCSS/Tailwind CSS and Ant Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
