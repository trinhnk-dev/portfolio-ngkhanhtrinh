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
      <div className="flex items-center justify-between ">
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
