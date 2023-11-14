import React from 'react'
import add from '../../assets/Icon/add.png'
import { Link } from 'react-router-dom'

const CreateThreadSymbol = () => {
  return (
    <Link to="/create-thread" className='p-[10px] bg-[#06f] rounded-full w-[50px] fixed bottom-[100px] right-[50px] 390:right-[20px] 390:bottom-[90px]'>
        <img src={add} width="50px" alt="create" />
    </Link>
  )
}

export default CreateThreadSymbol