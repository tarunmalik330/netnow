import React from "react";
import Loader from "../assets/images/png/PageLogo.png";

const Preloader = () => {
  return (
    <>
      <div class="ring">
        <img
          src={Loader}
          alt="Loader"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 sm:w-[120px] w-[100px]"
        />
        <span className="mover"></span>
      </div>
    </>
  );
};

export default Preloader;
