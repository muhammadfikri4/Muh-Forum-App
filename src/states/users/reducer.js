import { ActionType } from './action'

const usersReducer = (users=[], action={}) => {
    switch(action.type) {
        case ActionType.REGISTER_USER:
            return action.payload.users;
        case ActionType.LOGIN_USER:
            return action.payload.ownProfile;
        case ActionType.LOGOUT_USER:
            return null;
        default:
            return users;
    }
}

export default usersReducer;