import React from "react";
import EducationLottie from "../../education.json";
import AnimateEducation from "../../animate-education.json";
import Lottie from "react-lottie";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EducationLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="background-gray" id="education">
      <div className="container relative py-20">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
          <div className="z-20 w-2/3 text-center lg:text-left">
            <h3 className="mb-5 sm:text-6xl text-3xl font-bold">EDUCATION</h3>

            <h6 className="text-xl font-semibold">2019 - 2023</h6>
            <h6 className="text-xl font-bold">FPT University HCMC</h6>
            <p className="text-lg font-light">
              Bachelor's degree in Software Engineering
            </p>
            <h6 className="mt-6 text-xl font-semibold">Apr 2022 - Oct 2022</h6>
            <h6 className="text-xl font-bold">Cybersoft Academy HCMC</h6>
            <p className="text-lg font-light">Front-end Web Foundation</p>
          </div>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            style={{ borderRadius: "15px", margin: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
