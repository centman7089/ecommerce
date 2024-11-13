// @ts-nocheck
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Login = () =>
{


  
  const [ currentState, setCurrentState ] = useState( 'Sign Up' )
  const { token, setToken, navigate, backendUrl } = useContext( ShopContext )
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [ email, setEmail ] = useState( "" )
  
  const onSubmitHandler = async ( event ) =>
  {
    event.preventDefault()
   
    
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post( backendUrl + '/api/user/register', { name, email, password } )
        console.log(response);
        
      if (response?.data.success) {
        setToken( response?.data.token )
        localStorage.setItem( 'token', response?.data.token )
        navigate("/login")
      } else
      {
         console.log(response?.data.message);
      }
       
        
      } else
      {
         const response = await axios.post( backendUrl + '/api/user/login', {  email, password } )
      if (response.data.success) {
        setToken( response.data.token )
        localStorage.setItem( 'token', response.data.token )
        navigate("/")
      } else
      {
         console.log(response.data.message);
      }

      }
    } catch (error) {
      console.log( error );
      console.log(error.message);
      
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prate-regular text-3xl'>{currentState }</p>
       <hr className='border-none h-[1.5px]  w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800 ' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' required/> }
     
      <input className='w-full px-3 py-2 border border-gray-800 ' type="Email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
      <input className='w-full px-3 py-2 border border-gray-800 ' type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget Password</p>
       {currentState == 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p> }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up' }</button>
    </form>
  )
}

export default Login
