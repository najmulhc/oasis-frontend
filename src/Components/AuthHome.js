import React, { useState } from "react";
import { Link } from "react-router-dom";
import personalOutlined from "../Img/personal-outline.png";
import personalFilled from "../Img/Account-filled.png";
const AuthHome = () => {
  const [hover, setHover] = useState(true);
  return (
    <div className="p-12 ">
      <p className="text-right text-[#8692A6] ">
        Already Have an account?{" "}
        <Link to="#" className="text-[#1565D8]">
          Sign In
        </Link>
      </p>
      <div className="mt-12">
        <h2 className="text-3xl text-black font-bold text-left ">Join Us</h2>
        <p className="text-left text-[#8692A6] mt-2">
          To begin this journey, tell us what type of account you’d be opening.
        </p>
        <Link to="/"
          className="w-full bg-white p-4 rounded-lg shadow-md flex items-center gap-2 hover:bg-[#F5F9FF] hover:text-[#1565D8] my-2 hover:border hover:border-[#1565D8]"
          onMouseEnter={(e) => setHover(false)}
          onMouseLeave={(e) => setHover(true)}
        >
          {hover ? (
            <img src={personalOutlined} alt="" />
          ) : (
            <img src={personalFilled} />
          )}
                  <div className="p-2 ">
                  <h3 className="text-xl  text-left font-semibold ">
            Individual
                  </h3>
                  <p className="text-left text-[#8692A6] leading-4 mt-1">Personal account to manage all you activities.</p>
         </div>
        </Link>
      </div>
    </div>
  );
};

export default AuthHome;
