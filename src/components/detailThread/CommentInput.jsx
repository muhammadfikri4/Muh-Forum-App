import React, { useState } from 'react'
import send from '../../assets/Icon/plane-white.png'
import { useDispatch } from 'react-redux';
import { asyncDetailThreadWithNewComment } from '../../states/detailThread/action';

const CommentInput = ({threadId}) => {
    const [content, setContent] = useState();
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col items-center gap-[10px]'>
           
            <textarea onChange={(e) => setContent(e.target.value)} value={content} className='w-[100%] p-[3px] rounded-[5px] border-[1px] border-solid border-[#000] focus:outline-none focus:border-[#06f] resize-none' cols="10" rows="5">

            </textarea>
            <button onClick={() => dispatch(asyncDetailThreadWithNewComment({content, threadId}))} className='text-white font-bold bg-[#06f] w-[100%] rounded-[5px] p-[2px]'>Send</button>
    </div> 
  )
}

export default CommentInput