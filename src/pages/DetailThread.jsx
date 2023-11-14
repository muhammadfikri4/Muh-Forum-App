import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncDetailThread } from '../states/detailThread/action';
import DetailThreadItem from '../components/detailThread/DetailThreadItem';

const DetailThread = ({ownProfile}) => {

    const dispatch = useDispatch();
    const {threadId} = useParams();
    const detailThread = useSelector(states => states.detailThread);

    useEffect(() => {
      
        dispatch(asyncDetailThread(threadId));
        
    },[dispatch])

  return (
    
      <>
        <title>Muh Forum - Detail Thread</title>
        <div className='pr-[200px] mt-[-10px] pt-[10px] pl-[200px] 390:mt-[-15px] 390:w-[100%] 390:p-[10px]'>
          <DetailThreadItem detailThread={detailThread} ownProfile={ownProfile} threadId={threadId}/>
        </div>
      </>
    
  )
}

export default DetailThread