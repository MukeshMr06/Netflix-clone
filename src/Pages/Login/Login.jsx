import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signstate, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading,setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (signstate === "Sign In") {
      await login(email, password)
    }
    else {
      await signup(name, email, password)
    }
    setLoading(false)
  }

  return ( 
    loading?<div className="login-spinner w-full h-[100vh] flex items-center justify-center">
      <img src={netflix_spinner} alt="" className='w-[60px]' />
    </div>:
    <div className='login sm:px-[15px] py-[5px]'>
      <img src={logo} alt="" className='w-[150px]' />
      <div className="login-form w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-xl p-20 m-auto">
        <h1 className='text-3xl font-bold mb-8'>{signstate}</h1>

        <form className='flex flex-col gap-4'>
          {signstate === "Sign Up" ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' className='w-full h-[50px] bg-[#333] text-white mx-1 my-0 border-0 outline-0 rounded px-2 py-1 text-xl font-bold' />
            : <></>}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' className='w-full h-[50px] bg-[#333] text-white mx-1 my-0 border-0 outline-0 rounded px-2 py-1 text-xl font-bold' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Your Password' className='w-full h-[50px] bg-[#333] text-white mx-1 my-0 border-0 outline-0 rounded px-2 py-1 text-xl font-bold' />

          <button onClick={user_auth} type='submit' className='w-full border-0 outline-0 p-1 cursor-pointer bg-[#e50914] text-white rounde text-2xl font-bold'>
            {signstate}</button>

          <div className="form-help  flex justify-between text-[#b3b3b3] text-sm">
            <div className="remember flex items-center gap-2">
              <input type="checkbox" className='w-[18px] h-[18px]' />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>

        <div className="form-switch mt-10 text-[#737373]">
          {signstate === "Sign In" ?
            <p>New to Netflix ? <span onClick={() => setSignState("Sign Up")} className='ml-4 text-[#fff] font-bold cursor-pointer'>Sign Up Now</span></p>
            : <p>Already have account ? <span onClick={() => setSignState("Sign In")} className='ml-4 text-[#fff] font-bold cursor-pointer'>Sign In Now</span></p>
          }
        </div>

      </div>
    </div>
  )
}

export default Login