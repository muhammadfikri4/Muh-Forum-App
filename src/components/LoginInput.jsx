import React, { useState } from 'react'

const LoginInput = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
        <form className='flex flex-col items-center mt-[10px] gap-[10px] 390:w-[100%]'>
            
            <input type="text" placeholder='Email' className='w-[50%] 390:w-[100%] border-[1px] border-solid border-[#000] focus:outline-none focus:border-[#06f] h-[40px] text-[16px] rounded-[8px] p-[3px]' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" placeholder='Password' className='w-[50%] 390:w-[100%] border-[1px] border-solid border-[#000] focus:outline-none focus:border-[#06f] h-[40px] text-[16px] rounded-[8px] p-[3px]' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button className='w-[50%] 390:w-[100%] bg-[#06f] p-[8px] font-bold text-white rounded-[8px]' onClick={(e) => {
              e.preventDefault()
              onLogin({email, password});
            }}>Submit</button>
        </form>
    </>
  )
}

export default LoginInput