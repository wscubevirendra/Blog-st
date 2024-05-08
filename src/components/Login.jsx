import React,{useState} from 'react'
import { FaGooglePlusG } from "react-icons/fa";
import { FaEye,FaEyeSlash } from "react-icons/fa";


export default function Login({loginHandler ,setToggle,loginWithGoogle}) {
  const [showPassword, setShowPassword] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
    }
    loginHandler(data);
    event.target.reset();
}


const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  return(
 
    <main
      className=" flex min-h-screen  items-center  justify-center  text-black"
    >
      <section >
    <form onSubmit={submitHandler}>
      <div className="flex md:w-[30rem]   flex-col space-y-12">
      <div className="text-center text-4xl font-medium">Log In</div>
      <div
          className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="text"
            required
            name='email'
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
    
        <div
          className="w-full transform relative border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
           
            type={showPassword ? 'text' : 'password'}
            required
            name='password'
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
       {showPassword ? (
        <FaEyeSlash className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
      ) : (
        <FaEye className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
      )}
        </div>
    
        <button
          className="transform btn-color rounded-sm text-white    py-2 font-bold " >
          LOG IN
        </button>
      </div>
    </form>
    
    <div className='text-center  flex flex-col gap-4  mt-8'>
      <h1>or</h1>
      <button onClick={loginWithGoogle} className="google-btn-color flex justify-center  gap-4 text-xl items-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
      <FaGooglePlusG className='text-2xl'/>
      Continue with Google
</button>
    </div>
       
    
        <p onClick={()=>setToggle()} className="text-center mt-4 cursor-pointer text-lg">
          No account?
          <span className="font-medium text-indigo-500 ml-4 underline underline-offset-4 hover:underline"
            >Create One
            </span>
        </p>
      </section>
    </main>
  )
}
