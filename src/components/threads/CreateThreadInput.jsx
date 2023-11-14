import React, { useState } from 'react'

const CreateThreadInput = ({createThread}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
  return (
    <>
        <form className='flex flex-col gap-[8px] mt-[20px]' onSubmit={(e) => createThread(e, title, body, category)}>
                <input  className='w-[100%] p-[3px] rounded-[5px] border-[1px] border-solid border-[#000] focus:outline-none focus:border-[#06f]' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                <input className='w-[100%] p-[3px] rounded-[5px] border-[1px] border-solid border-[#000] focus:outline-none focus:border-[#06f]' type="text" placeholder='Category'  onChange={(e) => setCategory(e.target.value)} value={category}/>
                <textarea  className='w-[100%] p-[3px] rounded-[5px] border-[1px] border-solid border-[#000] focus:outline-none focus:border-[#06f] resize-none' cols="10" rows="10" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                <button type='submit' className='text-white font-bold bg-[#06f] w-[100%] rounded-[5px] p-[2px]'>Create</button>
            </form>
    </>
  )
}

export default CreateThreadInput