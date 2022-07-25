import React from "react";
import logo from "../Img/Logo.png";
import { ImQuotesLeft } from "react-icons/im";
import { GoVerified } from "react-icons/go";
import angle from "../Img/Angle.png";
const LeftImg = () => {
    // this will return the common left part(an image background with a quote)
  return (
    <div className="w-full h-full bg-img bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#1565D8] bg-opacity-90 opacity-100 p-12">
        <div className="h-full">
          <h2 className="text-2xl font-bold text-white text-left flex justify-items-start gap-2 mb-4">
            {" "}
            <img src={logo} alt="" /> Oasis
          </h2>
          <div className="min-h-full flex flex-col justify-center">
            <h2 className="text-[#00DAF7] text-4xl">
              <ImQuotesLeft />
            </h2>
            <p className="text-white text-left ">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
            <h5 className="text-lg text-white my-4 font-medium text-left flex  items-center gap-2">
              Vincent Obi{" "}
              <GoVerified className="text-green-600 bg-white rounded-full" />
            </h5>
            <div className="w-full flex justify-end">
              <img src={angle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImg;
