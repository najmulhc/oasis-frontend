import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlainText from './PlainText';
const AccountType = ({lineImg, filledImg, type, message}) => {
    const [hover, setHover] = useState(true);
  return (
    <Link to="/basic"
    className="w-full bg-white p-4 rounded-lg shadow-md flex items-center gap-2 hover:bg-[#F5F9FF] hover:text-[#1565D8] my-2 border border-white hover:border-[#1565D8]"
    onMouseEnter={(e) => setHover(false)}
    onMouseLeave={(e) => setHover(true)}
  >
    {hover ? (
      <img src={lineImg} alt="" />
    ) : (
      <img src={filledImg} alt=""/>
    )}
            <div className="p-2 ">
            <h3 className="text-xl  text-left font-semibold ">
      {type}
            </h3>
        <PlainText>{ message}</PlainText>
   </div>
  </Link>
  )
}

export default AccountType