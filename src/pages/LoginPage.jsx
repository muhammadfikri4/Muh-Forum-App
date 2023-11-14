import React, { useState } from 'react'
import LoginInput from '../components/LoginInput'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { asyncLoginUser } from '../states/users/action';

const LoginPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = ({email, password}) => {
    dispatch(asyncLoginUser({email, password}));
    navigate('/')
  }
  
  return (
    <>
    <title>Muh Forum - Login</title>
    <div className="px-[10px]">
      <div className='flex justify-center mt-[10px]'>
        <h1 className='w-[50%] font-bold text-[32px] 390:w-[100%]'>Login</h1>
      </div>
      <LoginInput onLogin={onLogin}/>
      <div className='flex justify-center mt-[10px]'>
          <p className='w-[50%] 390:w-[100%]'>Belum Memiliki Akun ? <Link to="/register" className='underline underline-offset-1'>Register</Link></p>
      </div>
    </div>
    </>
  )
}

export default LoginPage