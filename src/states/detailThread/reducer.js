import { ActionType } from "./action"

const detailThreadReducer = (thread={}, action={}) => {
    switch(action.type) {
        case ActionType.RECEIVE_DETAIL_THREAD:
            return action.payload.thread;
        case ActionType.CLEAR_DETAIL_THREAD:
            return null;
        default: 
            return thread;
    }
}

export default detailThreadReducer;