import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation().pathname;

  return (
    <div className="flex justify-center mt-[65px]">
        <ul style={{boxShadow: '0px -1px 5px -2px rgba(0,0,0,0.75)'}} className='flex justify-center gap-[20px] fixed bottom-0 bg-[#fff] p-[20px] w-[100%]'>
                <li><Link  className={`${location === '/'? 'bg-[#06f] text-[#fff]':'bg-white text-[#06f] border border-solid border-[#06f]'} font-bold p-[8px] rounded-[5px]`} to="/">Threads</Link></li>
                <li><Link className={`${location === '/leaderboard'? 'bg-[#06f] text-[#fff]':'bg-white text-[#06f] border border-solid border-[#06f]'} font-bold p-[8px] rounded-[5px]`} to="/leaderboard">Leaderboard</Link></li>
            </ul>
    </div>
  )
}

export default Sidebar