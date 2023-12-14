import React from "react";
import { Animated } from "react-animated-css";
import { GoProjectRoadmap } from "react-icons/go";
import ImgSomoTask from "../../image/somo-project.png";
import ImgSomoCreate from "../../image/somo-project-2.png";
import ImgPetSitter from "../../image/pettsitter-project.png";
import ImgToadTrade from "../../image/toadtrade-project.png";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-gradient-to-l">
      <div
        className="flex w-4/5 items-start justify-between"
        style={{ height: "25%" }}
      >
        <div className="mt-20 flex w-2/3 items-center justify-start text-3xl text-white">
          <GoProjectRoadmap className="mr-5 text-5xl" />
          PAGE 03
          <Animated
            className="mb-5 text-6xl font-bold text-white"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1500}
          >
            <h3 className="ml-10 text-6xl font-bold text-white">MY PROJECTS</h3>
          </Animated>
        </div>
        <div className="flex h-40 w-20 justify-between">
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
          <div className="w-px border-r-2 bg-white"></div>
        </div>
      </div>
      <div
        className="flex w-4/5 items-start justify-end"
        style={{ height: "74% " }}
      >
        <Animated
          className="mr-1 flex w-1/3 justify-end"
          animationIn="fadeInRight"
          isVisible={true}
          animationInDuration={1500}
          style={{ height: "100%" }}
        >
          <Link
            to="https://pettsitter.vercel.app/"
            target="_blank"
            className="image-parent"
            style={{ height: "90%" }}
          >
            <img
              className="rounded-l-lg"
              src={ImgPetSitter}
              alt="pet sitter"
              style={{ height: "100%" }}
            />
            <div className="overlay"></div>
            <p className="visit-website text-semibold text-xl">
              Visit Website
              <HiOutlineExternalLink className="ml-2" />
            </p>
          </Link>
        </Animated>
        <div
          className="flex w-1/2 flex-col justify-between"
          style={{ height: "90%" }}
        >
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            animationInDuration={1500}
            style={{ height: "60%" }}
          >
            <Link
              to="https://github.com/Capston-FPT-Somo-Farm-Task-Management/FE-Somo"
              target="_blank"
              className="image-parent"
            >
              <img
                src={ImgSomoTask}
                alt="ImgSomoTask"
                className="w-full rounded-r-lg"
                style={{ height: "100%" }}
              />
              <div className="overlay"></div>
              <p className="visit-website text-semibold text-xl">
                Visit Website
                <HiOutlineExternalLink className="ml-2" />
              </p>
            </Link>
          </Animated>

          <div
            className="flex flex-row justify-between"
            style={{ height: "39.5%" }}
          >
            <Animated
              animationIn="tada"
              isVisible={true}
              animationInDuration={1500}
              style={{ width: "49.5%" }}
            >
              <Link
                to="https://github.com/Capston-FPT-Somo-Farm-Task-Management/FE-Somo"
                target="_blank"
                className="image-parent"
              >
                <img
                  src={ImgSomoCreate}
                  alt="ImgSomoCreate"
                  className="h-full w-full"
                  style={{ height: "100%" }}
                />
                <div className="overlay"></div>
                <p className="visit-website text-semibold text-xl">
                  Visit Website
                  <HiOutlineExternalLink className="ml-2" />
                </p>
              </Link>
            </Animated>

            <Animated
              animationIn="fadeInLeft"
              isVisible={true}
              animationInDuration={1500}
              style={{ width: "50%" }}
            >
              <Link
                to="https://toadtrade.vercel.app/home"
                target="_blank"
                className="image-parent"
              >
                <img
                  src={ImgToadTrade}
                  alt="ImgToadTrade"
                  className="h-full w-full rounded-r-lg"
                  style={{ height: "100%" }}
                />
                <div className="overlay"></div>
                <p className="visit-website text-semibold text-xl">
                  Visit Website
                  <HiOutlineExternalLink className="ml-2" />
                </p>
              </Link>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
