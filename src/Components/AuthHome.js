import React from "react";
import { Link } from "react-router-dom";
import personalFilled from "../Img/Account-filled.png";
import personalOutlined from "../Img/personal-outline.png";
import AccountType from "./AccountType";
import businessFilled from "../Img/businee-filed.png"
import businessOutlined from '../Img/business-outlined.png'
const AuthHome = () => {
 
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
        <AccountType lineImg={personalOutlined} filledImg={personalFilled} type="Individual" message="Personal account to manage all you activities." />
        <AccountType lineImg={businessOutlined} filledImg={businessFilled} type="Business" message="Own or belong to a company, this is for you." />
      </div>
    </div>
  );
};

export default AuthHome;
