import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {

  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const {user, logIn} = UserAuth();
   const [error, setError] = useState('');
  const history = useNavigate();

   const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('');
    try {
        await logIn(email, password);
        history('/');
    } catch (error){
      console.log(error);
      setError(error.message);
    }
   
   }
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/d6aeb5a9-b14c-42d4-999e-c2f0d6c60f04/IN-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
        <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50'>
               <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
               <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input  onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                    <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    <div className='flex justify-between items-center text-sm text-gray-500'>
                      <p><input className='mr-2 hover:cursor-pointer' type="checkbox" />Remember me</p>
                      <p className='hover:cursor-pointer'>Need Help?</p>
                    </div>
                    <p className='py-6'><span className='text-gray-500 mr-1'>New to Netflix?</span> 
                    <Link to='/signup' className='hover:cursor-pointer'>
                    Sign Up
                    </Link>
                    </p>
                </form>
               </div>
               </div> 
            </div>
        </div>
      </div>
    </>
  )
}

export default Login