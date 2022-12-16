import React, { useState } from "react";
import ActionMovie from "./ActionMovie";
import ComedyMovie from "./ComedyMovie";


const Category = () => {
  
  return (
    <div className="w-[90%] flex flex-col justify-start items-center sm:mt-[48px] mt-[33px] sm:mt-[67px] mb-[50px]">
      <ActionMovie />
      <ComedyMovie />
    </div>
  );
};

export default Category;
