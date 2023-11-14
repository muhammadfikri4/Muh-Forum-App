import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryList from '../components/threads/CategoryList'
import { asyncReceiveAllThreads, asyncReceiveThreadByCategory } from '../states/threads/action'
import CreateThreadSymbol from '../components/threads/CreateThreadSymbol'
import ThreadsList from '../components/threads/ThreadsList'
import { asyncReceiveAllTags } from '../states/tag/action'

const HomePage = ({ownProfile}) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [allCat, setAllCat] = useState(true);

    const dispatch = useDispatch()
    const threads = (useSelector(states => states.threads));
    const tags = useSelector(states => states.tags);
    const filteringTags = [...new Set(tags.map(item => item.category))]
    const seeAllCategory = (category) => {
        dispatch(asyncReceiveThreadByCategory(category));
        setSelectedCategory(category);
        setAllCat(false)
      }
    
      const allThreads = () => {
        dispatch(asyncReceiveAllThreads());
        setAllCat(true);
        setSelectedCategory('')
      }
    useEffect(() => {
        dispatch(asyncReceiveAllThreads());
        dispatch(asyncReceiveAllTags());
    }, [])
  return (
    <>
      <title>Muh Forum</title>
      <div className='pr-[200px] mt-[25px] flex justify-center pl-[200px] bg-[#e0e0e0]
      390:bg-white 390:mt-[-15px] 390:w-[100%] 390:p-[10px]'>
          <div className='flex gap-[10px] mt-[-10px] flex-col bg-white p-[20px] rounded-b-[10px] 390:mt-0'>
              <h1 className='text-[22px] font-semibold'>Tag List</h1>
              <CategoryList allThreads={allThreads} seeAllCategory={seeAllCategory} tags={filteringTags} selectedCategory={selectedCategory} allCat={allCat} />
              <hr className="mt-[5px]" />
              <h1 className='text-[22px] mt-[20px] font-bold'>Thread Available</h1>
                  <ThreadsList threads={threads}/>
              </div>
              {ownProfile?.name? <CreateThreadSymbol/> : ''}
      </div>
    </>
  )
}

export default HomePage

