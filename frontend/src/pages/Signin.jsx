import React from 'react'
import { Heading } from '../componenets/Heading'
import { SubHeading } from '../componenets/SubHeading'
import { InputBox } from '../componenets/InputBox '
import { Button } from '../componenets/Button'
import { BottomWarning } from '../componenets/BottomWarning'

export const Signin = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Signin"} />
          <SubHeading label={" "} />
          <InputBox placeholder="ramsharma@email.com" label={"Email"} />
          <InputBox placeholder="******" label={"Password"} />

          <div className='pt-4'>
            <Button label={"Sign in"} />
          </div>

          <BottomWarning label={"Don't have an account yet?"} buttonText={"Sign Up"} to={"/signup"} />
          
        </div>
      </div>
    </div>
  )
}
