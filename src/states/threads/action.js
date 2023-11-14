import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
    RECEIVE_ALL_THREADS: 'RECEIVE_ALL_THREADS',
    RECEIVE_CATEGORY_THREAD: 'RECEIVE_CATEGORY_THREAD'
}

const receiveAllThreadsAction = (threads) => {
    return {
        type: ActionType.RECEIVE_ALL_THREADS,
        payload: {
            threads
        }
    }
}
const receiveThreadCategoryAction = (thread) => {
    return {
        type: ActionType.RECEIVE_CATEGORY_THREAD,
        payload: {
            thread
        }
    }
}



const asyncReceiveAllThreads = () => {
    return async(dispatch) => {
        dispatch(showLoading())
        try {
            const threads = await api.getAllThreads();
            const collection = await Promise.all(threads.map(async (thread) => {
                const owner = await api.getDetailThread(thread.id);
                return {
                    ...thread,
                    owner: {
                        id: owner.owner.id,
                        name: owner.owner.name,
                        avatar: owner.owner.avatar
                    }
                };
            }));
            dispatch(receiveAllThreadsAction(collection));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading())
    }
}

const asyncReceiveThreadByCategory = (category) => {
   return async(dispatch) => {
        dispatch(showLoading())
        try {
            const threads = await api.getAllThreads();
            const filterByCategory = threads.filter((thread) => thread.category === category);
            const collection = await Promise.all(filterByCategory.map(async (thread) => {
                const owner = await api.getDetailThread(thread.id);
                return {
                    ...thread,
                    owner: {
                        id: owner.owner.id,
                        name: owner.owner.name,
                        avatar: owner.owner.avatar
                    }
                };
            }));
            dispatch(receiveThreadCategoryAction(collection))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
   }
}

const asyncCreateThread = ({title, body, category}) => {
    return async(dispatch) => {
        dispatch(showLoading());
        try {
            await api.createThread({title, body, category});
            const threads = await api.getAllThreads()
            const collection = await Promise.all(threads.map(async (thread) => {
                const owner = await api.getDetailThread(thread.id);
                return {
                    ...thread,
                    owner: {
                        id: owner.owner.id,
                        name: owner.owner.name,
                        avatar: owner.owner.avatar
                    }
                };
            }));
            dispatch(receiveAllThreadsAction(collection))
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading())
    }
}

export {
    ActionType,
    receiveAllThreadsAction,
    asyncReceiveAllThreads,
    asyncReceiveThreadByCategory,
    asyncCreateThread
}