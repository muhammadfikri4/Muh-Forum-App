import React from 'react'
import timestamp from '../../utils/timestamp';

const CommentList = ({comments}) => {
    console.log(comments)
  return (
    <>
        {(comments).map(comment => (
            <div className='p-[10px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <img className='rounded-full' src={comment.owner.avatar} width="30px" alt={comment.owner.name} />
                    <p>{comment.owner.name}</p>
                </div>
                
                <p>{timestamp(comment.createdAt)}</p>
              </div>
              <div>
                <p className='mt-[10px]' dangerouslySetInnerHTML={{__html: comment.content}} />
              </div>
              <hr className='mt-[20px]' />
            </div>
          ))}
    </>
  )
}

export default CommentList