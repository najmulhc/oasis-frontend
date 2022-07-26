import React, { useState, useEffect } from "react"; 
import PlainText from "./PlainText";
import Input from "./Input";
import { auth } from "../firebase.config";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import BackBtn from "./BackBtn";
import Step from "./Step";
import TopHeading from "./TopHeading";
const AccountBasic = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user,  error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [signInWithGoogle, guser,  gerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  const  update = async () => {
    await updateProfile({ displayName: fullName });
    await navigate("/details");
  };
  useEffect(() => {
    if (user) {
      console.log(user.user);
      return (() => {
        update();
     })
    }
    if (guser) {
      console.log(guser);
      navigate("/details");
    }
    if (error || gerror) {
      console.log(error || gerror);
    }
  }, [error, gerror, navigate, user, guser, update ]);
  
 
  const googleSignIn = (e) => {
    signInWithGoogle();
  };
  return (
    <div className="p-12">
        <BackBtn to="/"/> 
      <Step step={1}  detail="Personal Info."/>
      <div className="text-left mx-6">
       <TopHeading> Register Individual Account</TopHeading>
        <PlainText>
          For the purpose of industry regulations, your details are required
        </PlainText>
        <form action="" onSubmit={register}>
          <Input
            type="text"
            label="Your Fullname*"
            placeholder="Enter your name"
            state={setFullName}
          />

          <Input
            type="email"
            label="Email Address*"
            name="fullName"
            id=""
            placeholder="Enter Email Address"
            state={setEmail}
          />

          <Input
            type="password"
            label="Create Password*"
            name="password"
            id=""
            placeholder="Enter password"
            state={setPassword}
          />

          <br />
          <label htmlFor="terms" className="flex gap-2 items-center">
            <input type="checkbox" name="terms" id="" required />
            <p>I agree to terms and conditions</p>
          </label>
          <button
            className="w-full text-center bg-[#1565D8] rounded-md py-3 text-white font-normal mt-4"
            type="submit"
          >
            Register Account
          </button>
        </form>
        <button
          onClick={googleSignIn}
          className="w-full text-center bg-white rounded-md py-3 text-black font-normal mt-4 flex items-center justify-center shadow-md"
        >
          <FcGoogle className="mr-4" /> Register with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default AccountBasic;
