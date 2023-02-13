import React from "react";
import img1 from "../assets/i.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white">
            I'm the Protagonist
          </h2>
          <p className="text-gray-500 text-2xl py-4 max-w-md">
            I only want to obtain perfection ...
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-teal-500 to-green-500 cursor-pointer"
            >
              My creations
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={img1}
            alt="ThatsMe"
            className="rounded-2xl mx-auto mb-20 w-2/5 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
