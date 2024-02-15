import React from "react";
import AboutAlien from "../assets/images/png/AboutAlien.png";
import AboutJupiter from "../assets/images/png/AboutJuipter.png";
import AboutImg from "../assets/images/png/AboutImg.png";

const AboutUs = () => {
  return (
    <>
      <div
        id="AboutUs"
        className="xl:mt-[150px] lg:mt-[90px] sm:mt-[80px] mt-[60px] relative"
      >
        <img
          src={AboutJupiter}
          alt="AboutJupiter"
          className=" absolute lg:top-[-23%] top-0 right-0 w-full max-w-[174px] z-[1] "
        />
        <div className=" absolute bottom-[43%] blur-[124px] opacity-[40%] left-[43%] w-[246px] h-[246px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse z-[1]"></div>
        <div className=" absolute lg:top-[-23%] top-0 blur-[124px] opacity-[70%] right-[-3%] w-[246px] h-[246px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <div className="container xl:max-w-[1184px] mx-auto xl:px-3 px-6">
          <div className="flex flex-row items-center justify-center flex-wrap">
            <div className="lg:w-6/12 w-full flex xl:justify-center justify-center relative z-[2]">
              <img
                src={AboutImg}
                alt="AboutImg"
                className="w-full max-w-[455px]"
              />
            </div>
            <div className="lg:w-6/12 w-full flex justify-center pt-10 lg:pt-0 relative z-[5]">
              <div className="lg:max-w-[525px] w-full">
                <h2 className="ff_archivo text-white font-normal lg:text-start text-center mb-[16px] text-[48px] leading-[121%] ">
                  About Us
                </h2>
                <p className="text-white opacity-[80%] xl:text-[18px] text-[17px] lg:text-start text-center font-medium lg:max-w-[525px] mb-[16px] leading-[150%]">
                  Join The NFT NOW Community and Metaverse - the soon to be
                  revolutionary community that lets you learn and grow your
                  knowledge about Anything NFT and Crypto.{" "}
                </p>
                <p className="text-white opacity-[80%] xl:text-[18px] text-[17px] lg:text-start text-center lg:max-w-[519px] font-medium xl:mb-[40px] mb-[20px] ">
                  Our development team is creating a information packed online
                  course, watch list and so much more, exclusive to holders. Say
                  goodbye to Monthly Subscriptions and Trading Courses that
                  offer no real value. Our courses are free and exclusive to
                  holders for life.
                </p>
                <button className="bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] border-[2px] border-solid border-[#6C69EE] leading-[100%] hover:border-white hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)]  transition-all ease-linear duration-500 py-[14px] px-[33px] text-[18px] font-semibold text-white rounded-[112px] flex max-lg:mx-auto ">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
