import React, { useState } from 'react' 
import BackBtn from './BackBtn'
import Input from './Input'
import PlainText from './PlainText'
import Step from './Step'
import {AiOutlineLock} from 'react-icons/ai'
import TopHeading from './TopHeading'
import { auth } from '../firebase.config'
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router'
const AccountDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const update = async (event) => {
    event.preventDefault();
    await updateProfile({ country, phoneNumber, address });
 navigate("/bank")
  }
  if (error) {
    console.log(error)
  } 
  if (updating) {
    console.log(updating)
  }
  return ( 
    <div className="p-12">
    <BackBtn /> 
    <Step step={2} detail="Residency Info" />
    <div className='text-left mt-2'>
      <TopHeading>Complete Your Profile!</TopHeading>
        <PlainText>For the purpose of industry regulation, your details are required.</PlainText>
        <Input type="phone" label="Enter Phone Number" state={setPhoneNumber} /> 
        <Input type="text" label="Your Address" placeholder="Please enter address" state={setAddress}></Input>
        <Input type="country" label="Country of Residents" state={setCountry}></Input>
        <button
            className="w-full text-center bg-[#1565D8] rounded-md py-3 text-white font-normal mt-4"
          type="submit"
          onClick={update}
          >
            Save and Continue
        </button>
        <PlainText className="flex items-center text-center w-full justify-center pt-2"><AiOutlineLock/> Your info is safely secured</PlainText>
    </div>
  </div>
   )
}

export default AccountDetails