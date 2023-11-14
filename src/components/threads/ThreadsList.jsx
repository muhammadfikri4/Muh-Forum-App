import React from 'react'
import { Link } from 'react-router-dom'
import comment from '../../assets/Icon/comment-icon.png'
import timestamp from '../../utils/timestamp'

const ThreadsList = ({threads}) => {
return (
    <>
        {threads.map((thread) => (
            <div key={thread.id} className='flex flex-col mt-[20px]'>
                <div className='flex'>
                    <p className='p-[4px] text-[14px] rounded-[8px] border-[1px] border-solid border-[#06f] w-auto' >#{thread.category}</p> 
                </div>
                <Link to={`/${thread.id}`} className='font-bold text-[18px] mt-[10px]'>{thread.title}</Link>
                <p className='text-ellipsis overflow-hidden max-h-[100px]' dangerouslySetInnerHTML={{__html: thread.body}}/>
                <div className='flex items-center mt-[10px] gap-[10px]'>
                    <Link to={`/${thread.id}`} className='flex items-center gap-[10px] cursor-pointer' >
                        <img src={comment} width="25px" alt="comment" />
                        <p className='opacity-60'>{thread.totalComments}</p>
                    </Link>
                    <div className='flex items-center gap-[30px]'>
                        <p>{timestamp(thread.createdAt)}</p>
                        <div className='flex items-center gap-[10px]'>
                            <img className='rounded-full' src={thread.owner?.avatar} width="25px" alt={thread.owner?.name} />
                            <p>{thread.owner?.name}</p>
                        </div>
                    </div>
                </div>

                
                <br />
                <hr />
            </div>
            
        ))}
    </>
  )
}

export default ThreadsList