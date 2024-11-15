// @ts-nocheck
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'



const Login = ( { setToken } ) =>
{
    const [ email, setEmail ] = useState( "" )
    const [ password, setPassword ] = useState( "" )
    




    // useEffect( () =>
    // {
    //     const fetch = async () =>
    //     {
    //         const response = await axios( {
    //             method: "post",
    //             baseURL: "http://localhost:5000/api/user",
    //             url: "admin"
                
    //         } )
    //         console.log( response );
            
    //     }
    //     fetch()
    // }, [] )

    const onSubmithandler = async ( e ) =>
    {
        
        try
        {
            e.preventDefault();
            // console.log(email,password);
            
            const response = await axios.post( backendUrl + '/api/user/admin', { email, password } )
            console.log(response);
            
            if ( response.data.success )
            {
                setToken( response.data.token )
                toast.success( "login Successful" )
            } else
            {
                toast.error( "response.data.message" )
            }
        
        } catch ( error )
        {
            console.log( error );
            toast.error( "response.data.message" )
        }
    }

        return (
            <div className='flex items-center justify-center w-full min-h-screen'>
                <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                    <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                    <form onSubmit={onSubmithandler}>
                        <div className='mb-3 min-w-72'>
                            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                            <input onChange={( e ) => setEmail( e.target.value )} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email' required />
                        </div>
                        <div className='mb-3 min-w-72'>
                            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                            <input onChange={( e ) => setPassword( e.target.value )} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
                        </div>
                        <button className='mt-2 w-full px-4 py-4 rounded-md text-white bg-black ' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        )
    
}

export default Login
