import { ActionType } from "./action";

const threadsReducer = (threads=[], action={}) => {
    switch(action.type) {
        case ActionType.RECEIVE_ALL_THREADS:
            return action.payload.threads;
        case ActionType.RECEIVE_CATEGORY_THREAD:
            return action.payload.thread
        default:
            return threads;
    }
}

export default threadsReducer