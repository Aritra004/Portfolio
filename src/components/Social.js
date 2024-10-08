import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul className="">
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://www.linkedin.com/in/aritra-debnath-ab2b2b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="norefferer"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://github.com/Aritra004"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="norefferer"
          >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="mailto:aritradebnath9@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="/resume.pdf"
            className="flex justify-between items-center w-full text-white"
            download={true}
            target="_blank"
            rel="norefferer"
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
