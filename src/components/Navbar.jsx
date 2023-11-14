import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import api from '../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogoutUser } from '../states/users/action'

const Navbar = ({name, avatar}) => {
  const dispatch = useDispatch();
  
  return (
    <>
    
        <nav className='bg-[#06f] h-[80px] flex items-center justify-between pr-[20px] pl-[20px] fixed top-0 w-full z-10'>
            <h1 className='text-[20px] font-bold text-white'> Muh Forum</h1>
            {name
            ? <div className='flex items-center gap-[15px]'>
                <div className='flex items-center justify-center gap-[5px]'>
                  <img className='rounded-full' src={avatar} alt={name} width="35px" />
                  <p className='text-white'>{name}</p>
                </div>
                <button onClick={() => dispatch(asyncLogoutUser())} className='bg-[#fff] text-[#06f] font-bold p-[8px] rounded-[5px]'>Logout</button>
              
            </div>
            : <Link className='bg-[#fff] text-[#06f] font-bold p-[8px] rounded-[5px]' to="/login">Login</Link>}
            
        </nav>
    </>
  )
}

export default Navbar