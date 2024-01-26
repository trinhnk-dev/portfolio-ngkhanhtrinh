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
    <section className="container py-12" id="about">
      <div className="flex lg:flex-row flex-col items-center lg:justify-between">
        <div className="sm:w-2/5 w-4/5 lg:mb-0 mb-2">
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            style={{ borderRadius: "15px" }}
          />
        </div>

        <div className="lg:ml-5 ml-0 lg:w-3/5 w-9/12 lg:text-left text-center">
          <p className="mb-2 sm:text-6xl text-3xl font-bold">ABOUT ME</p>
          <p className="text-lg">
            Hey, my name is Nguyễn Khánh Trình, and I'm a Frontend Developer. My
            passion is to create and develop a clean UI/UX for my users.
            <br />
            <br />
            My main stack currently is ReactJS/NextJS in combination with
            SCSS/Tailwind CSS and Ant Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
