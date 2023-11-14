import React from 'react'
import CreateThreadInput from '../components/threads/CreateThreadInput'
import { useDispatch, useSelector } from 'react-redux'
import { asyncCreateThread } from '../states/threads/action';
import { useNavigate } from 'react-router-dom';

const CreateThread = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createThread = (e, title, body, category) => {
        e.preventDefault()
        dispatch(asyncCreateThread({title, body, category}));
        navigate('/');
    }
  return (
    <div className='pr-[200px] mt-[25px] pl-[200px] 390:mt-[15px] 390:w-[100%] 390:p-[1px]'>
        <div className='flex gap-[10px] mt-[-10px] flex-col rounded-b-[10px] bg-white p-[20px] 390:bg-white 390:mt-[-15px] 390:w-[100%]'>
            <h1 className='font-bold text-[24px]'>Create New Thread</h1>
            <CreateThreadInput createThread={createThread}/>
        </div>
    </div>
  )
}

export default CreateThread