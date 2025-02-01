import React from "react";
import SamsungImage from "../../image/samsung.png";

const Experiences = () => {
  return (
    <section id="experience">
      <div className="container relative py-20">
        <h3 className="mb-12 text-center text-3xl font-bold sm:text-6xl">
          EXPERIENCES
        </h3>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="z-20 w-3/4 text-left lg:w-1/2 ">
            <h6 className="text-center text-xl font-bold uppercase lg:text-left">
              samsung electronics hcmc ce complex
            </h6>
            <h6 className="my-2 text-center text-xl font-semibold lg:my-0 lg:text-left">
              Mar 2024 - Present
            </h6>
            <p className="text-lg font-light">Front-end Engineer</p>
            <p className="my-2 mb-4 mr-4 text-left text-lg font-light lg:my-0 lg:mb-0">
              * Responsibility: <br /> - Develop a web plugin specifically for
              the ArtMode feature in SmartThing application, which allows users
              to send photos from their library to the Frame TV, set artwork on
              the TV,... <br /> - Participated in a big project and collaborated
              with multiple stakeholders, including Backend team, UX designers,
              TV development teams, BAs, Product Planning,...
            </p>
          </div>
          <div className="m-auto w-3/4 lg:w-1/2 ">
            <img className="rounded-lg" src={SamsungImage} alt="samsung" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
