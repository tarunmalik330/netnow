import React from "react";
import { useState } from "react";
import TokenomicsAlien from "../assets/images/webp/TokenomicsAlien.webp";
import PageLogo from "../assets/images/webp/PageLogo.webp";
import {
  InstagramIcon,
  TwitterIcon,
  LinkedIn,
  FacebookIcon,
  Arrowsvg,
} from "./IconImg";

const Tokenomics = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "What is an NFT?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "How Can I Get an NFT?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "How to Purchase One?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "What is the Total Supply?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "How much does it cost to mint an NFT?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "Where Can I See my NFT?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "How many NFTs can I mint?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "When will I be able to see my revealed NFT after minting?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
    {
      title: "Does this go to a good cause?",
      content:
        "NFT stands for non- fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
    },
  ];
  return (
    <>
      <div className="bg-[url('./assets/images/webp/BgTokenomics.webp')] lg:bg-BgSize bg-center bg-cover bg-no-repeat xl:pt-[66px] relative">
        <div className=" absolute left-0 bottom-[60%] blur-[124px] opacity-[70%]  w-[194px] h-[194px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <div className=" absolute right-0 bottom-[60%] blur-[124px] opacity-[70%]  w-[194px] h-[194px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <div
          id="Nft"
          className="container mx-auto xl:max-w-[1174px] xl:px-3 px-6"
        >
          <div className=" flex flex-wrap flex-row lg:justify-between max-xl:items-center">
            <div className="xl:w-[38.8%] lg:w-[45%] w-full flex max-lg:justify-center">
              <img
                src={TokenomicsAlien}
                alt="TokenomicsAlien"
                className=" w-full sm:max-w-[443px] max-w-[295px] sm:h-[443px]"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="lg:w-[50%] w-full lg:pt-0 pt-10 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <h2
                className="ff_archivo sm:text-[48px] text-[35px] text-white font-normal leading-[121%] mb-6 lg:text-start text-center"
                data-aos="zoom-in-up"
              >
                Tokenomics
              </h2>
              <div
                className="flex items-center gap-[17px] mb-[15.5px] max-lg:justify-center"
                data-aos="zoom-in-up"
              >
                <div className="w-[41px] h-[30px] rounded-[100px] bg-[#01F1C7]"></div>
                <p className="text-[18px] font-medium leading-[150%] text-white">
                  10% CEX Liquidity
                </p>
              </div>
              <div
                className="flex items-center gap-[17px] mb-[26.5px] max-lg:justify-center"
                data-aos="zoom-in-up"
              >
                <div className="w-[41px] h-[30px] rounded-[100px] bg-[#01B0BC]"></div>
                <p className="text-[18px] font-medium leading-[150%] text-white">
                  90% DEX Liquidity
                </p>
              </div>
              <p
                className="text-white font-medium xl:text-[18px] sm:text-[17px] text-[15px] lg:max-w-[563px] opacity-[90%] leading-[150%] xl:mb-[32px] mb-[25px] lg:text-start text-center"
                data-aos="zoom-in-up"
              >
                Join The NFT NOW Community and Metaverse - the soon to be
                revolutionary community that lets you learn and grow your
                knowledge about Anything NFT and Crypto.{" "}
              </p>
              <div
                className="box cursor-pointer p-[1px] rounded-[20px] max-w-[577px] relative"
                data-aos="zoom-in-up"
              >
                <div className="py-6 pl-6 pr-[25px]">
                  <h3 className="text-white ff_archivo mb-[12px] font-normal text-[18px] leading-[123%] ">
                    Ecosystem
                  </h3>
                  <p className="text-white text-[16px] font-medium lg:max-w-[528px] leading-[150%] ">
                    Our development team is creating a information packed online
                    course, watch list and so much more, exclusive to holders.
                    Say goodbye to Monthly Subscriptions and Trading Courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------Faq----------------------------------------- */}
        <div
          id="Faq"
          className="xl:mt-[180px] sm:mt-[90px] mt-[50px] relative z-[1]"
        >
          <div className="flex justify-center items-center flex-col sm:mb-[64px] mb-[30px] px-6">
            <h4
              className="ff_archivo uppercase text-[#FFFFFF] sm:text-[48px] text-[35px] font-normal leading-[120%] text-center"
              data-aos="fade-up"
            >
              FAQ
            </h4>
            <p
              className="lg:max-w-[723px] font-medium opacity-[80%] leading-[161%] text-center xl:text-[18px] sm:text-[17px] text-[15px] text-[#fff] mt-[16px]"
              data-aos="zoom-in-up"
            >
              Join The NFT NOW Community and Metaverse - the soon to be
              revolutionary community that about Anything NFT and Crypto.
            </p>
          </div>
          <div className="container mx-auto xl:wax-w-[997px] xl:px-3 px-6 ">
            <div className="flex justify-center items-center ">
              <div className="accordion" data-aos="zoom-in-up">
                {accordionData.map((item, index) => (
                  <div className="accordion-item mb-[28px]" key={index}>
                    <div
                      className="flex justify-between items-center accordion-title"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div
                        className={`${
                          openAccordion === index
                            ? "rounded-tl-[10px] rounded-tr-[10px]"
                            : "rounded-[10px]"
                        } text-[#fff] font-normal text-[15px] sm:text-[18px] ff_archivo leading-[123%] transition-all ease-linear duration-300`}
                      >
                        {item.title}
                      </div>
                      <div
                        className={`${
                          openAccordion === index ? " rotate-[180deg]" : ""
                        } transition-all duration-300 ease-linear `}
                      >
                        <Arrowsvg />
                      </div>
                    </div>
                    <div
                      className={`accordion-content ${
                        openAccordion === index ? "open" : ""
                      }  text-[15px] sm:text-[16px] font-medium text-[#fff] opacity-[90%] leading-[120%] lg:max-w-[811px]`}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------------footer--------------------------- */}
        <div className="xl:mt-[186px] relative z-[1]">
          <div className="container mx-auto xl:max-w-[1174px] xl:px-3 px-6 xl:pt-[100px] sm:pt-[80px] pt-[40px] pb-[25px]">
            <div className=" flex justify-center flex-col items-center">
              <a className="mb-[32px]" href="#">
                <img
                  src={PageLogo}
                  alt="PageLogo"
                  className="w-full max-w-[215px]"
                />
              </a>
              <ul className=" flex flex-wrap sm:gap-[32px] gap-5 justify-center mb-[32px]">
                <li>
                  <a
                    href="#About"
                    className="text-[18px] uppercase font-medium leading-[150%] text-white hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#Roadmap"
                    className="text-[18px] uppercase font-medium leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#Nft"
                    className="text-[18px] uppercase font-medium leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    NFTs
                  </a>
                </li>
                <li>
                  <a
                    href="#Faq"
                    className="text-[18px] uppercase font-medium leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className=" flex gap-[16px] pb-[50px]">
                <InstagramIcon />
                <TwitterIcon />
                <LinkedIn />
                <FacebookIcon />
              </div>
              <div className="bg-white opacity-[20%] h-[2px] w-full"></div>
              <p className="mt-[24px] text-white font-medium text-[18px]">
                ©Copyright-2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
