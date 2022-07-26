import React from "react";
import BackBtn from "./BackBtn";
import Input from "./Input";
import PlainText from "./PlainText";
import Step from "./Step";
import TopHeading from "./TopHeading";

const BankAccount = () => {
  return (
    <div className="p-12 h-full w-full">
      <div>
        {" "}
        <BackBtn to="/details" />
        <Step step={3} detail="Bank varification" />
      </div>

      <div className=" text-left w-auto  mt-24  px-4  ">
        {" "}
        <TopHeading>Complete your profile</TopHeading>
        <PlainText>
          {" "}
          For the purpose of industry regulation, your details are required.
        </PlainText>
        <div className="w-full mt-4">
          <Input
            type="number"
            label="Bank Account Number"
            placeholder="Provide your bank details"
          />
        </div>
        <button
          className="w-full text-center bg-[#1565D8] rounded-md py-3 text-white font-normal mt-4"
          type="submit"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
