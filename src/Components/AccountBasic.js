import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLeft} from "react-icons/ai"
import PlainText from './PlainText'
import Input from './Input'
import {FcGoogle} from "react-icons/fc"
const AccountBasic = () => {
  return (
    <div className='p-12'>
      <div className='w-full flex justify-start'>
      <Link to="/" className='flex items-center gap-1 text-[#8692A6] font-semibold'><AiOutlineLeft/> Back</Link>
   </div>
      <div className='flex  flex-col items-end '>
        <p className='text-[#BDBDBD] text-[14px] '>STEP 10/03</p>
        <h4 className='text-[16px] font-semibold text-[#8692A6]'>Personal Info.</h4>
      </div>
      <div className='text-left'>
        <h3 className='text-black text-2xl font-semibold '>Register Individual Account</h3>
        <PlainText>For the purpose of industry regulations, your details are required</PlainText>
        <form action="">
         
          <Input type="text" label="Your Fullname*" placeholder="Enter your name" /> 
         
            <Input type="email" label="Email Address*" name="fullName" id="" placeholder='Enter Email Address'   />
  
            <Input type="password" label="Create Password*" name="password" id="" placeholder='Enter password'   />
        
          <br />
          <label htmlFor="terms" className='flex gap-2 items-center'>
            <input type="checkbox" name="terms" id="" required />
            <p>I agree to terms and conditions</p>
          </label>
          <button className='w-full text-center bg-[#1565D8] rounded-md py-3 text-white font-normal mt-4'>Register Account</button>
        </form>
        <button className='w-full text-center bg-white rounded-md py-3 text-black font-normal mt-4 flex items-center justify-center shadow-md'><FcGoogle className='mr-4'/> Register with Google </button>
      </div>
    </div>
  )
}

export default AccountBasic