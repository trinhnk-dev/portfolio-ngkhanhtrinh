import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import ContactAnimate from "../../contact.json";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="background-gray py-12" id="contact">
      <div className="container flex flex-col-reverse items-center md:flex-row md:justify-around lg:justify-between">
        <div className="flex w-full flex-col items-center sm:block sm:w-2/3 md:w-2/5">
          <h1 className="mb-5 text-center text-3xl font-bold sm:text-6xl md:text-left">
            CONTACT
          </h1>
          <div className="mb-3 flex w-2/3 flex-col flex-wrap justify-start sm:mb-0 sm:w-full">
            <div className="flex justify-center md:justify-around">
              <h2 className="mb-1 w-1/3 text-lg font-semibold ">Phone</h2>
              <h3 className="w-2/3  text-lg ">0325.262.564</h3>
            </div>
            <div className="flex justify-around">
              <h2 className="mb-1 w-1/3 text-lg font-semibold ">Email</h2>
              <h3 className="w-2/3 text-lg ">khtrinh.work@gmail.com</h3>
            </div>
            <div className="flex justify-around">
              <h2 className="mb-1 w-1/3 text-lg font-semibold ">Address</h2>
              <h3 className="w-2/3 text-lg ">Ho Chi Minh City, Vietnam</h3>
            </div>
          </div>
          <div className="flex justify-center text-3xl font-bold sm:justify-center md:justify-start">
            <Link
              to="https://github.com/trinhnk-dev"
              className="mr-3 duration-200 hover:text-blue-500"
              target="_blank"
            >
              <FiGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/trinhnk-dev/"
              className="duration-200 hover:text-blue-500"
              target="_blank"
            >
              <TbBrandLinkedin />
            </Link>
          </div>
        </div>

        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          style={{ borderRadius: "15px", margin: 0 }}
        />
      </div>
    </section>
  );
};

export default Contact;
