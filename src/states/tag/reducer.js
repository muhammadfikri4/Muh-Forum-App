import { ActionType } from "./action";

const tagReducer = (tags=[], action={}) => {
    switch(action.type) {
        case ActionType.RECEIVE_ALL_TAGS:
            return action.payload.tags
        default:
            return tags;
    }
}

export default tagReducer;