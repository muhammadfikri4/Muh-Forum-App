import React from 'react'

const LeaderboardsList = ({leaderboards}) => {
  return (
    <>
    <div className='flex justify-between '>
                <h1 className='font-bold text-[18px]'>Nama</h1>    
                <h1 className='font-bold text-[18px]'>Skor</h1>    
            </div>
        {leaderboards.map((leaderboard, i) => (
                    <div className='flex justify-between' key={i}>
                        <div className='flex items-center gap-[10px]'>
                            <img className='rounded-full' src={leaderboard.user.avatar} width="40px" alt={leaderboard.user.name} />
                            <h1>{leaderboard.user.name}</h1>
                        </div>
                        <h1>{leaderboard.score}</h1>    
                </div>
                ))}
    </>
  )
}

export default LeaderboardsList