import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineLeft } from "react-icons/ai";
const BackBtn = ({to}) => {
  return (
    <div className="w-full flex justify-start">
      <Link
        to={to}
        className="flex items-center gap-1 text-[#8692A6] font-semibold"
      >
        <AiOutlineLeft /> Back
      </Link>
    </div>
  );
};

export default BackBtn;
