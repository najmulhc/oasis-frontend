import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import BackBtn from './BackBtn'
import Input from './Input'
import PlainText from './PlainText'
import Step from './Step'
import TopHeading from './TopHeading'
const AccountDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="p-12">
    <BackBtn /> 
    <Step step={2} detail="Residency Info" />
    <div className='text-left mt-2'>
      <TopHeading>Complete Your Profile!</TopHeading>
        <PlainText>For the purpose of industry regulation, your details are required.</PlainText>
        <Input type="phone" label="Enter Phone Number" /> 
        <Input type="text" label="Your Address" placeholder="Please enter address"></Input>
        <Input type="country" label="Country of Residents"></Input>
    </div>
  </div>
   )
}

export default AccountDetails