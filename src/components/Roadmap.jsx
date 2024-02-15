import React from "react";
import { GreenMark } from "./IconImg";
import Jupiter from "../assets/images/png/RoadmapJupiter.png";
import Slider from "react-slick";

const Roadmap = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "5px",
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 3,
          centerPadding: "200px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[url('./assets/images/png/BgRoadmap.png')] lg:bg-BgSize bg-cover bg-center bg-no-repeat translate-y-[-2%] relative z-[3]">
        <div className=" absolute right-0 blur-[124px] opacity-[70%]  w-[246px] h-[246px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <div className=" absolute left-0 blur-[124px] opacity-[70%]  w-[246px] h-[246px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <div className=" absolute left-[50%] bottom-0 right-[50%] blur-[124px] opacity-[70%]  w-[194px] h-[194px] rounded-[50%] bg-gradient-to-l from-[#523BFF] to-[#FF00F6] animate-pulse"></div>
        <img
          src={Jupiter}
          alt="Jupiter"
          className=" absolute left-0 top-[3%] z-[1] w-full max-w-[174px] "
        />
        <div
          id="Roadmap"
          className="container xl:max-w-[1177px] mx-auto xl:px-3 px-6 xl:pt-[200px] sm:pt-[100px] pt-[140px] relative z-[1]"
        >
          <h2 className="ff_archivo text-white text-center font-normal leading-[121%] sm:text-[48px] text-[40px] xl:mb-[78.96px] mb-[30px]">
            Roadmap
          </h2>
          <div className="relative">
            <div className="absolute h-full top-0 lg:left-[23.5%] sm:left-[3.5%] left-[5.5%] bottom-[-200px] border-dashed border-[3px] border-spacing-y-10 opacity-[60%] border-white border-t-0 border-b-0 border-l-0"></div>
            <div className="flex flex-row flex-wrap sm:gap-8 justify-between xl:mb-[91px] sm:mb-[50px] mb-[20px] relative">
              <div className=" lg:block hidden w-[17%]">
                <div className="bg-[url('./assets/images/png/BgButton.png')] bg-BgSize bg-center bg-no-repeat max-w-[187px] w-full flex justify-center items-center pt-[11px] pb-[12px]">
                  <button className="border-solid ff_archivo font-normal text-[24px] text-white leading-[121%]">
                    2024
                  </button>
                </div>
              </div>
              <div className="w-[4.5%]">
                <div className="relative">
                  <div className="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] rounded-[50px] bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] flex justify-center items-center shadow-[0px,_0px,_6.388888359069824px,_0px_#FFFFFF40] ">
                    <h4 className=" text-white font-normal sm:text-[24px] text-[16px] ff_archivo leading-[121%] ">
                      01
                    </h4>
                  </div>
                </div>
              </div>
              <div className="lg:w-[70%] sm:w-[90%] w-[81%]">
                <div className=" flex items-center">
                  <p className="flex gap-[14px] sm:items-center justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] lg:mt-[11px]">
                    <GreenMark />
                    <span>
                      Launch our Unique NFTs Mint NFT’s (WL Members get early
                      access)
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap sm:gap-8 justify-between xl:mb-[100px] sm:mb-[50px] mb-[20px]">
              <div className="lg:block hidden w-[17%]">
                <div className="bg-[url('./assets/images/png/BgButton.png')] bg-BgSize bg-center bg-no-repeat max-w-[187px] w-full flex justify-center items-center pt-[11px] pb-[12px]">
                  <button className="border-solid ff_archivo font-normal text-[24px] text-white leading-[121%]">
                    2024
                  </button>
                </div>
              </div>
              <div className="w-[4.5%]">
                <div className="relative">
                  <div className="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] rounded-[50px] bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] flex justify-center items-center shadow-[0px,_0px,_6.388888359069824px,_0px_#FFFFFF40] ">
                    <h4 className=" text-white font-normal sm:text-[24px] text-[16px] ff_archivo leading-[121%] ">
                      02
                    </h4>
                  </div>
                </div>
              </div>
              <div className="lg:w-[70%] sm:w-[90%] w-[81%]">
                <div className=" flex items-center">
                  <p className="flex gap-[14px] sm:items-center justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>Reveal Our Unique NFT Creations</span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Launch our Exclusive Option Trading Online Course.
                      Includes 100s of Hours worth of Videos Going in Depth
                      About Stocks, Option Trading, When to Enter / Exit and So
                      Much More!
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Launch Our Daily Trade Watch List. See Exactly When our
                      Experts Enter and Exitsa Trade and Which Stocks They Have
                      Their Eyes On.
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      We will giveaway 1 ETH to 1 Lucky Holder and 0.5 ETH to 4
                      Members each, every month
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-center justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Purchase land in the metaverse and start development of
                      members-only lounge
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      We will plan an exclusive party in Dubai for Holders Only!
                      100 holders will get hotel + flight paid for! 1 Lucky
                      Holder will also have Chauffeur and Luxury Car included
                      (Hold More NFTs to increase odds of winning)
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      We will then Launch the second collection - holders will
                      each get one free NFT and a chance to purchase before
                      public mint.
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Donate $100,000 to a charity that will help kids learn
                      about crypto and Web3.0 to give them a head start in life
                      (charity name will be confirmed in coming weeks)
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Donate $100,000 to help families with children that wish
                      to work for NASA or other space programs (we will confirm
                      the best way to achieve this to ensure all money is used
                      the right way)
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap sm:gap-8 justify-between xl:pb-[91px] sm:pb-[50px] pb-[20px]">
              <div className="lg:block hidden w-[17%]">
                <div className="bg-[url('./assets/images/png/BgButton.png')] bg-BgSize bg-center bg-no-repeat max-w-[187px] w-full flex justify-center items-center pt-[11px] pb-[12px]">
                  <button className="border-solid ff_archivo font-normal text-[24px] text-white leading-[121%]">
                    2024
                  </button>
                </div>
              </div>
              <div className="w-[4.5%]">
                <div className="relative">
                  <div className="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] rounded-[50px] bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] flex justify-center items-center shadow-[0px,_0px,_6.388888359069824px,_0px_#FFFFFF40] ">
                    <h4 className=" text-white font-normal sm:text-[24px] text-[16px] ff_archivo leading-[121%] ">
                      03
                    </h4>
                  </div>
                </div>
              </div>
              <div className="lg:w-[70%] sm:w-[90%] w-[81%]">
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Team up with industry experts to launch lectures for the
                      community and free classes for children. All funded by us
                      and free for the community!
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Send children from underprivileged households to a space
                      camp during the summer break! (Or other camps the
                      community may feel will benefit the children more)
                    </span>
                  </p>
                </div>
                <div className=" flex items-start">
                  <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                    <GreenMark />
                    <span>
                      Plan and design unique merch and collab with well-known
                      designers. Holders will receive free and unique merch
                      (with their NFTs printed on)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap sm:gap-8 justify-between xl:pb-[91px] sm:pb-[50px] pb-[20px]">
            <div className="lg:block hidden w-[17%]">
              <div className="bg-[url('./assets/images/png/BgButton.png')] bg-BgSize bg-center bg-no-repeat max-w-[187px] w-full flex justify-center items-center pt-[11px] pb-[12px]">
                <button className="border-solid ff_archivo font-normal text-[24px] text-white leading-[121%]">
                  2024
                </button>
              </div>
            </div>
            <div className="w-[4.5%]">
              <div className="relative">
                <div className="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] rounded-[50px] bg-gradient-to-br from-[#2C43D2] to-[#98B9F0] flex justify-center items-center shadow-[0px,_0px,_6.388888359069824px,_0px_#FFFFFF40] ">
                  <h4 className=" text-white font-normal sm:text-[24px] text-[16px] ff_archivo leading-[121%] ">
                    04
                  </h4>
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] sm:w-[90%] w-[81%]">
              <div className=" flex items-start">
                <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                  <GreenMark />
                  <span>
                    Launch our own cryptocurrency to use in the metaverse and
                    have many real-life benefits. NFT holders will receive free
                    coins
                  </span>
                </p>
              </div>
              <div className=" flex items-start">
                <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                  <GreenMark />
                  <span>
                    Team up with Holders and the Community to Discuss what else
                    they would like to see from us. (We are here for the
                    community so we will have a huge influence from our amazing
                    community)
                  </span>
                </p>
              </div>
              <div className=" flex items-start">
                <p className="flex gap-[14px] items-start justify-center text-white font-medium sm:text-[18px] text-[14px] opacity-[90%] leading-[150%] mt-[11px]">
                  <GreenMark />
                  <span>
                    Huge Christmas and NYE Party exclusively for holders only. A
                    Vote will be held and the location will be determined by
                    Holders!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------latest collection------------------------- */}
        <div className="xl:pt-[190px] sm:pt-[80px] pt-[30px]">
          <div className=" flex justify-center items-center flex-col sm:mb-[64px] mb-[10px] px-6">
            <h2 className="text-center text-white sm:text-[48px] text-[35px] font-normal ff_archivo leading-[121%] mb-[16px] ">
              See our latest collection
            </h2>
            <p className="text-center text-white opacity-[80%] sm:text-[18px] text-[16px] font-semibold max-w-[721px] leading-[150%]">
              Join The NFT NOW Community and Metaverse - the soon to be
              revolutionary community that about Anything NFT and Crypto.
            </p>
          </div>
          <div className="w-full">
            <Slider {...settings}>
              <div className="px-3">
                <div className="Slider_card max-sm:mx-auto relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien3.png')] Img_shadow lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="Slider_card max-sm:mx-auto relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien3.png')] Img_shadow lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="Slider_card max-sm:mx-auto relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien1.png')] lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="Slider_card max-sm:mx-auto relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien2.png')] Img_shadow lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="Slider_card max-sm:mx-auto relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien2.png')] Img_shadow lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="Slider_card max-sm:mx-auto relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien1.png')] Img_shadow lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="Slider_card relative rounded-[20px] pt-[17px] pb-[17.88px] pl-[17.6px] pr-[16.79px] max-w-[363px]">
                  <div className="bg-[url('./assets/images/png/SliderAlien1.png')] Img_shadow lg:bg-BgSize bg-center bg-cover bg-no-repeat h-[340px] w-full max-w-[330px] flex items-end">
                    <div className="pl-[20px] pb-[20px] flex flex-col content_opacity">
                      <p className="ff_archivo text-[24px] font-normal text-white leading-[121%] mb-[6px]">
                        Evol Benji
                      </p>
                      <p className=" font-medium text-[18px] opacity-[90%] text-white leading-[150%] mb-[6px] ">
                        8.32 Eth
                      </p>
                      <p className="max-w-[268px] text-white text-[16px] font-medium leading-[150%] ">
                        Join The NFT NOW Community and Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
