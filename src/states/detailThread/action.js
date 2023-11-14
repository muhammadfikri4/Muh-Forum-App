import { hideLoading, showLoading } from "react-redux-loading-bar"
import api from "../../utils/api"

const ActionType = {
    RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
}

const receiveDetailThreadAction = (thread) => {
    return {
        type: ActionType.RECEIVE_DETAIL_THREAD,
        payload: {
            thread: [thread]
        }
    }
}



const asyncDetailThread = (threadId) => {
    return async(dispatch) => {
        dispatch(showLoading());
        try {
            const thread = await api.getDetailThread(threadId);
            dispatch(receiveDetailThreadAction(thread));
        } catch (error) {
            alert(error.message)
        } 
        dispatch(hideLoading());
        
    }
}

const asyncDetailThreadWithNewComment = ({content, threadId}) => {
    return async(dispatch) => {
        dispatch(showLoading())
        try {
            await api.createComment({content, threadId});
            const thread = await api.getDetailThread(threadId);
            dispatch(receiveDetailThreadAction(thread))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}
export {
    ActionType,
    receiveDetailThreadAction,
    asyncDetailThread,
    asyncDetailThreadWithNewComment
}