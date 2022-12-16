import React from "react";
import image from "../images/image.png";

const Hero = () => {
  return (
    <div className="sm:h-[550px] h-[257px] relative flex items-center lg:justify-start justify-center isolate w-full">
      <img
        src={image}
        className="h-full w-full object-cover absolute inset-0 -z-[1]"
      />
      <h1 className="text-white sm:text-[72px] text-[28px] lg:ml-[77px] lg:text-left text-center sm:leading-[93.7px] leading-[36px] font-[700] -tracking-[0.05em]">
        Watch <br /> something <br /> Incredible.
      </h1>
    </div>
  );
};

export default Hero;
