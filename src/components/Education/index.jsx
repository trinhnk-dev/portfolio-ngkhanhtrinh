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
  const animateEducation = {
    loop: true,
    autoplay: true,
    animationData: AnimateEducation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="background-gray" id="education">
      <div className="container relative py-12">
        <Lottie
          options={animateEducation}
          height={280}
          width={600}
          style={{
            borderRadius: "15px",
            margin: 0,
            position: "absolute",
            bottom: "0",
            right: 10,
            zIndex: 10
          }}
        />
        <div className="flex items-center justify-between">
          <div className="z-20 w-2/3 text-left">
            <h3 className="mb-5 text-6xl font-bold">EDUCATION</h3>

            <h6 className="text-xl font-semibold">2019 - 2023</h6>
            <h6 className="text-xl font-semibold">FPT University HCMC</h6>
            <p className="text-lg font-light">
              Bachelor's degree in Software Engineering
            </p>
            <h6 className="mt-6 text-xl font-semibold">Apr 2022 - Oct 2022</h6>
            <h6 className="text-xl font-semibold">Cybersoft Academy HCMC</h6>
            <p className="text-lg font-light">Front-end Web Foundation</p>
          </div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{ borderRadius: "15px", margin: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
