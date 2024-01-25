import React from "react";

const Home = () => {
  return (
    <section className="background-gray mt-16 pb-16" id="home">
      <div className="container">
        <div className=" flex justify-between py-20 sm:flex-col-reverse lg:flex-row">
          <div className="2xl:w-5/12 flex flex-col items-start justify-around md:w-3/5">
            <div
              className="fe-dev text-left"
            >
              FRONT-END DEVELOPER
            </div>
            <div
              className="ngkhanhtrinh text-left "
            >
              <p className="animate__fadeInLeft mt-8 font-black">
                NGUYỄN <br /> KHÁNH TRÌNH
              </p>
            </div>

            <p className="text-lg">
              Hi, I'm Nguyễn Khánh Trình. A passionate Front-end Developer{" "}
              <br /> living in Ho Chi Minh City, VietNam. 📍
            </p>
          </div>
          <div className="ngkhanhtrinh-img"></div>
        </div>
        <div className="flex w-3/4 items-center justify-between">
          <h1 className="border-r-2 border-black pr-5 text-xl font-semibold">
            Tech Stack
          </h1>
          <div className="flex w-3/4 justify-around">
            <img
              src="https://skillicons.dev/icons?i=html,css"
              alt="html,css"
              className="hover:translate-y-12"
            />
            <img src="https://skillicons.dev/icons?i=js,redux" alt="js,redux" />
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
    </section>
  );
};

export default Home;
