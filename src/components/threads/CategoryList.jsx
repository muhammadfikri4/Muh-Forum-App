import React from 'react';

const CategoryList = ({seeAllCategory, allThreads, tags, selectedCategory, allCat}) => {

  return (
    <>
      <div className='flex gap-[10px] mt-[10px] flex-wrap'>
      <p onClick={allThreads}  className={`p-[5px] rounded-[8px] border-[1px] border-solid border-[#06f] w-auto cursor-pointer ${allCat? 'bg-[#06f] text-white' : 'bg-white text-[#000]'}`}>All Tags</p>
        {tags.map((category, i) => (
            <p onClick={() => seeAllCategory(category)} key={i} className={`p-[5px] rounded-[8px] border-[1px] border-solid border-[#06f] cursor-pointer ${selectedCategory === category? 'bg-[#06f] text-white': 'bg-white text-[#000]'}`}>#{category}</p> 
          ))}
      </div>
    </>
  )
}

export default CategoryList