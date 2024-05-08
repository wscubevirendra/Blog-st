import React from 'react'
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';





export default function Siginup({loginWithGoogle,setToggle,createAccount}) {


  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    createAccount(data)
    // event.target.reset();
  }

  return (
    <main
    className=" flex min-h-screen  items-center  justify-center bg-white text-black"
    >
      <section >
        <form onSubmit={submitHandler}>
          <div className="flex md:w-[30rem] flex-col space-y-10">
            <div className="text-center text-4xl font-medium">Sign Up</div>
            <div
              className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
            >
              <input
              required
                name="name"
                type="text"
                placeholder="Username"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>
            <div
              className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
            >
              <input
              required
                name="email"
                type="email"
                placeholder="Email "
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div
              className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
            >
              <input
              required
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button type='submit'
              className="transform btn-color rounded-sm   py-2 font-bold "
            >
              Register
            </button>
          </div>

        </form>

        <div className='text-center  flex flex-col gap-4  mt-6'>
          <h1>or</h1>
          <button onClick={loginWithGoogle} className="google-btn-color flex justify-center  gap-4 text-xl items-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
            <FaGooglePlusG className='text-2xl' />
            Continue with Google

          </button>
        </div>
        
      

        <p onClick={()=>setToggle(true)} className="text-center mt-4 cursor-pointer text-lg">
        Already have an accout? 
          <span
            className="font-medium ml-4 underline text-indigo-500 underline-offset-4 hover:underline">
          Login Account</span>
        </p>
      </section>
    </main>
  )
}


