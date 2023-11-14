import React from 'react'
import RegisterInput from '../components/RegisterInput';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onRegister = ({name, email, password}) => {
    dispatch(asyncRegisterUser({name, email, password}));
    navigate('/login')
  }
  
  return (
    <>
      <title>Muh Forum - Register</title>
      <div className="px-[10px]">
          <div className='flex justify-center mt-[10px]'>
          <h1 className='w-[50%] 390:w-[100%] font-bold text-[32px]'>Register</h1>
          </div>
          <RegisterInput onRegister={onRegister}/>
          <div className='flex justify-center mt-[10px]'>
            <p className='w-[50%] 390:w-[100%]'>Sudah Memiliki Akun ? <Link to="/login" className='underline underline-offset-1'>Login</Link></p>
          </div>
      </div>
    </>
  )
}

export default RegisterPage;