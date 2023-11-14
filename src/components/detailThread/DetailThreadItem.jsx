import React from 'react'
import CommentInput from './CommentInput'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'

const DetailThreadItem = ({detailThread, ownProfile, threadId}) => {
  return (
    <>
        {Array.isArray(detailThread) && detailThread.map((detail) => (
          <div className='flex gap-[10px] mt-[-10px] flex-col bg-white p-[20px] rounded-b-[10px]' key={detail.id}> 
          <div className='flex items-center gap-[10px]'>
          <img className="rounded-full" src={detail?.owner.avatar} width="40px" alt={detail.owner.name} />
          <h1 className='font-bold'>{detail?.owner.name}</h1>
          </div>
          <div>
          <p dangerouslySetInnerHTML={{__html: detail.body}} />
          <div className='flex'>
                    <p className='p-[4px] text-[14px] rounded-[8px] border-[1px] border-solid border-[#06f] w-auto mt-[10px]' >#{detail.category}</p> 
          </div>
            
          <p className='text-[#adadad] text-[15px] mt-[10px]'>{`${new Date(detail.createdAt).getHours()}:${new Date(detail.createdAt).getMinutes()}  ∙  ${new Date(detail.createdAt).toLocaleString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}`}</p>
          </div>
        <hr />
        
        {ownProfile?.name
        ? <CommentInput threadId={threadId}/>
        : <div>
            <p><Link to="/login" className='bg-[#06f] p-[5px] text-white rounded-[5px] font-bold'>Login</Link> to leave a comment!</p>
        </div>
        }

          <CommentList comments={detail.comments}/>
        </div>

        ))}
    </>
  )
}

export default DetailThreadItem