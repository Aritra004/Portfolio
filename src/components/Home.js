import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-96">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a Ful Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          Full Stack Developer with a passion for coding and creative problem-solving. Proficient in multiple programming languages and frameworks. Delivering high-quality, scalable solutions with intuitive interfaces. Detail-oriented and dedicated to excellence. Let's build something amazing!
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczNcGeGcO-BzQBfT0TaKFfAsac1Iu9qKHCE6PhYqmNTtN84XRPsrqwGdhEpTdwSqUtY6NnmC1YEv7udT0phd23fJgAK0BzCN-NrOZ4BqYwexj5YHRVf3igihC3esTSdAPJ9B7EjCLWEyM9qIHAjComry=w423-h890-s-no-gm?authuser=0"
            alt="me"
            className="rounded-2xl mx-auto w-20 h-[90%] md:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
