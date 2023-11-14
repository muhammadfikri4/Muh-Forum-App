import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveAllLeaderboard } from '../states/leaderboard/action';
import LeaderboardsList from '../components/leaderboard/LeaderboardsList';

const Leaderboard = () => {
    const dispatch = useDispatch();
    const leaderboards = useSelector(states => states.leaderboards); 
    useEffect(() => {
        dispatch(asyncReceiveAllLeaderboard());
    },[dispatch]);
  return (
    <>
    <title>Muh Forum - Leaderboard</title>
      <div className='pr-[200px] mt-[-10px] pt-[10px] h-[100vh] pl-[200px] bg-[#e0e0e0] 390:bg-white 390:mt-[-15px] 390:w-[100%] 390:p-[10px]'>
        <div className='flex gap-[10px] mt-[-10px] flex-col bg-white p-[20px] 390:w-[100%]'>

                <LeaderboardsList leaderboards={leaderboards}/>
        </div>   
    </div>
    </>
  )
}

export default Leaderboard