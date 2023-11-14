import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import { asyncOwnUser } from './states/users/action';
import { asyncReceiveAllThreads } from './states/threads/action';
import LoadingBar from 'react-redux-loading-bar';
import DetailThread from './pages/DetailThread';
import Leaderboard from './pages/Leaderboard';
import CreateThread from './pages/CreateThread';
import Sidebar from './components/Sidebar';

function App() {
  const dispatch = useDispatch()
  const ownProfile = useSelector(states => states.users);
  useEffect(() => {
    dispatch(asyncOwnUser());
  }, [dispatch])

  return (
    <BrowserRouter>
    <LoadingBar style={{height: '10px', position: 'fixed', top: '0', zIndex: '999999'}}/>
    <Navbar name={ownProfile?.name} email={ownProfile?.email} avatar={ownProfile?.avatar} />
    
      <div className='mt-[90px]'>
      <Routes>
        <Route path='/' element={<HomePage ownProfile={ownProfile}/>} />
        <Route path='/:threadId' element={<DetailThread ownProfile={ownProfile}/>} />
        <Route path='/create-thread' element={<CreateThread/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
      </Routes>
      </div>
      <Sidebar/>
    </BrowserRouter>
  )
}

export default App
