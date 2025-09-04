import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <a
        href="https://drive.google.com/file/d/1kxsLG8DkG8usbxcewU6m4oz88mEFyl30/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl flex bg-neutral-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        My Resume
      </a>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/karthik-kalburgi-572711228/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Karthik-Kalburgi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtDqMzgMlqwPLpTMDjfPgqZCQlWVrdsbZLRzmPZLMnntZsrRzVQNHlTkGBwTxVPlvcHHhhVL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition duration-300"
        >
          <MdOutlineMailOutline />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
