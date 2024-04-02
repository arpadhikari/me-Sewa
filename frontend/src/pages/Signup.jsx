import React, { useState } from 'react'
import { Heading } from '../componenets/Heading'
import { SubHeading } from '../componenets/SubHeading'
import { InputBox } from '../componenets/InputBox '
import { useNavigate } from 'react-router-dom'
import { Button } from '../componenets/Button'
import axios from "axios";
import { BottomWarning } from '../componenets/BottomWarning'

export const Signup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign Up"}/>
          <SubHeading label={"Enter your information to create a new account"} />
          <InputBox onChange={e => {
            setFirstName(e.target.value);
          }} placeholder="Ram" label={"First Name"} />
          <InputBox onChange={e => {
            setLastName(e.target.value);
          }} placeholder="Sharma" label={"Last Name"} />
          <InputBox onChange={e => {
            setUsername(e.target.value);
          }} placeholder="ramsharma@email.com" label={"Email"} />
          <InputBox onChange={e => {
            setPassword(e.target.value);
          }} placeholder="******" label={"Password"} />

          <div className='pt-4'>
            <Button onClick={async() => {
              const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
              });
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }} label={"Sign Up"}/>
          </div>
          <BottomWarning label={"Already haven an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}
