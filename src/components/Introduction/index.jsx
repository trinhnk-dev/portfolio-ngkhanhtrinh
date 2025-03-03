import React from "react";
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
    <section className="background-gray py-20" id="about">
      <div className="container flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="mb-2 w-4/5 sm:w-2/5 lg:mb-0">
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            style={{ borderRadius: "15px" }}
          />
        </div>

        <div className="ml-0 w-9/12 text-center lg:ml-5 lg:w-3/5 lg:text-left">
          <p className="mb-2 text-3xl font-bold sm:text-6xl">ABOUT ME</p>
          <p className="text-lg">
            Hey, my name is Nguyễn Khánh Trình, and I'm a Frontend Developer. My
            passion is to create and develop a clean UI/UX for my users.
            <br />
            <br />
            My main stack currently is ReactJS/TypeScript in combination with
            SCSS/Tailwind CSS and Ant Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
