import { Tooltip } from "antd";
import React from "react";

const Home = () => {
  return (
    <section className="mt-20 pb-16" id="home">
      <div className="container py-20">
        <div className="mb-10 flex flex-col-reverse items-center justify-between lg:mb-20 lg:flex-row">
          <div className="2xl:w-5/12 flex w-full flex-col items-center justify-around lg:w-7/12 lg:items-start">
            <div className="fe-dev text-center text-base sm:text-left sm:text-2xl">
              FRONT-END DEVELOPER
            </div>
            <div className="ngkhanhtrinh text-left text-3xl sm:text-5xl lg:text-6xl">
              <p className=" mt-3 text-center font-black sm:text-left md:w-full lg:mt-8 lg:w-11/12">
                NGUYỄN KHÁNH TRÌNH
              </p>
            </div>

            <p className="w-11/12 text-center text-lg lg:w-full lg:text-left">
              Hi, I am Nguyễn Khánh Trình. A passionate Front-end Developer{" "}
              living in Ho Chi Minh City, VietNam. 📍
            </p>
          </div>
          <div className="ngkhanhtrinh-img mb-10 lg:mb-0"></div>
        </div>
        <div className="tech-stack flex flex-col items-center lg:w-3/4 lg:justify-between">
          <h1 className="tech-stack-title mb-5 border-b-2 border-black pr-0 text-xl font-semibold ">
            Tech Stack
          </h1>
          <div className="tech-skills ml-2 flex w-3/5 flex-wrap justify-center gap-6 lg:ml-0 lg:w-4/5">
            <Tooltip title="HTML, CSS" placement="bottom">
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="html,css"
                className="hover:translate-y-12"
              />
            </Tooltip>

            <Tooltip title="JavaScript, Typescript" placement="bottom">
              <img
                src="https://skillicons.dev/icons?i=js,typescript"
                alt="js,typescript"
              />
            </Tooltip>
            <Tooltip title="ReactJS, NextJS" placement="bottom">
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="react,nextjs"
              />
            </Tooltip>
            <Tooltip title="Redux, GitHub" placement="bottom">
              <img
                src="https://skillicons.dev/icons?i=redux,github"
                alt="redux, github"
              />
            </Tooltip>
            <Tooltip title="Tailwind, Sass" placement="bottom">
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="tailwind,scss"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
