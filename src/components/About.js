import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Hello! I'm Aritra Debnath, a Full Stack Developer with a passion for
          building innovative digital solutions. With a strong foundation in
          computer science and a keen interest in staying up-to-date with
          industry trends, I'm always looking for new ways to push the
          boundaries of what's possible. When I'm not coding, you can find me
          [insert personal interest or hobby]. I'm excited to collaborate with
          like-minded individuals and bring exciting projects to life.
        </p>
      </div>
    </div>
  );
};

export default About;
