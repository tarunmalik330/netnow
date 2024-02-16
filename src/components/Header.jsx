import React from "react";
import { useState } from "react";
import PageLogo from "../assets/images/webp/PageLogo.webp";
import alienImg from "../assets/images/webp/alienaImg.webp";
import PinkJupiter from "../assets/images/webp/PinkJupiter.webp";
import JupiterImg from "../assets/images/webp/ColorfullJupiter.webp";

const Header = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="bg-[url('./assets/images/webp/BgHeader.webp')] lg:bg-BgSize bg-cover bg-center bg-no-repeat relative z-[5]">
        <img
          src={PinkJupiter}
          alt="PinkJupiter"
          className="xl:max-w-[277px] md:max-w-[220px] max-w-[170px] w-full right-0 absolute top-[20%] "
        />
        <img
          src={JupiterImg}
          alt="JupiterImg"
          className=" absolute w-full left-0 xl:max-w-[339px] md:max-w-[250px] max-w-[150px] top-[30%]"
        />
        <div className=" absolute bottom-[-14%] blur-[124px] opacity-[70%] left-[-3%] md:w-[246px] w-[150px] md:h-[246px] h-[150px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <div className="container mx-auto xl:max-w-[1174px] xl:px-3 px-6">
          <div className="flex items-center justify-between pt-[18px] pb-[17px]">
            <a
              href="#"
              className="relative after:absolute after:w-[52px] after:h-[51px] after:bg-[#6834FE] after:top-0 after:left-[-6%] after:rounded-[52px] after:blur-md after:animate-pulse"
            >
              <img
                src={PageLogo}
                alt="PageLogo "
                className="sm:max-w-[183px] max-w-[150px] xl:h-[53.32px] w-full relative z-10"
              />
            </a>
            <ul
              className={`${
                nav ? "left-[-100%]" : "left-0"
              } flex max-lg:fixed max-lg:top-0 max-lg:bg-[#020202] max-lg:h-full max-lg:w-full max-lg:z-50 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}
            >
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#AboutUs"
                  className="text-[18px] uppercase font-medium leading-[150%] text-white hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  About us
                </a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#Roadmap"
                  className="text-[18px] uppercase font-medium leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Roadmap
                </a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#Nft"
                  className="text-[18px] uppercase font-medium leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  NFTs
                </a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#Faq"
                  className="text-[18px] uppercase font-medium leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  FAQ
                </a>
              </li>
              <li className="lg:hidden block">
                <button className="bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] border-[2px] border-solid border-[#6C69EE] hover:border-white hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all ease-linear duration-500 py-[12px] px-[33px] text-[18px] font-semibold text-white rounded-[112px]">
                  Register
                </button>
              </li>
            </ul>
            <div className=" lg:block hidden">
              <button className="bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] border-[2px] border-solid border-[#6C69EE] hover:border-white hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)]  transition-all ease-linear duration-500 py-[12px] px-[33px] text-[18px] font-semibold text-white rounded-[112px]">
                Register
              </button>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[28px] h-[20px] relative z-[55] flex justify-between flex-col"
            >
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                }`}
              ></span>
            </div>
          </div>
        </div>
        <div className="container mx-auto xl:max-w-[1174px] xl:px-3 px-6 sm:mt-[91px] mt-[20px] mb-[45px] relative z-[1]">
          <div className=" flex flex-col justify-center items-center">
            <h1
              className="text-white lg:text-[48px] sm:text-[40px] text-[28px] ff_archivo font-normal text-center leading-[121%] mb-[16px] max-w-[762px]"
              data-aos="zoom-in-up"
            >
              Join The NFT NOW Community and Metaverse
            </h1>
            <p
              className=" text-white sm:text-[18px] text-[15px] font-medium leading-[150%] sm:mb-[40px] mb-[25px] text-center opacity-[80%] lg:max-w-[673px]"
              data-aos="zoom-in-up"
            >
              The soon to be revolutionary community that lets you learn and
              grow your knowledge about Anything NFT and Crypto.
            </p>
            <div data-aos="zoom-in-up">
              <button className="bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] border-[2px] border-solid border-[#6C69EE] hover:border-white hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all ease-linear duration-500 py-[12px] px-[33px] sm:text-[18px] text-[15px] font-semibold text-white rounded-[112px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <img src={alienImg} alt="alienImg" className="w-full" />
      </div>
    </>
  );
};

export default Header;
