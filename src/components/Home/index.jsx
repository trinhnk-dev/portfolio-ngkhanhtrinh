import React from "react";

const Home = () => {
  return (
    <section className="background-gray mt-20 pb-16" id="home">
      <div className="container py-20">
        <div className="flex justify-between flex-col-reverse items-center lg:flex-row lg:mb-20 mb-10">
          <div className="2xl:w-5/12 flex flex-col justify-around w-full items-center lg:w-7/12 lg:items-start">
            <div className="fe-dev sm:text-2xl text-base sm:text-left text-center">FRONT-END DEVELOPER</div>
            <div className="ngkhanhtrinh text-left text-3xl sm:text-5xl lg:text-6xl" >
              <p className=" font-black mt-3 md:w-full lg:mt-8 lg:w-11/12 sm:text-left text-center">
                NGUYỄN KHÁNH TRÌNH
              </p>
            </div>

            <p className="text-lg w-11/12 lg:w-full lg:text-left text-center">
              Hi, I'm Nguyễn Khánh Trình. A passionate Front-end Developer{" "}
              living in Ho Chi Minh City, VietNam. 📍
            </p>
          </div>
          <div className="ngkhanhtrinh-img mb-10 lg:mb-0"></div>
        </div>
        <div className="flex sm:w-full items-center sm:justify-center lg:w-3/4 lg:justify-between sm:flex-row flex-col">
          <h1 className="sm:border-r-2 sm:border-b-0 border-b-2 border-black sm:pr-5 pr-0 sm:mb-0 mb-5 text-xl font-semibold ">
            Tech Stack
          </h1>
          <div className="flex w-3/5 lg:w-3/4 sm:justify-between justify-center lg:ml-0 ml-2 gap-1 flex-wrap sm:flex-no-wrap">
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
