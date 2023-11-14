import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
}

const loginAction = (ownProfile) => {
    return {
        type: ActionType.LOGIN_USER,
        payload: {
            ownProfile
        }
    }
}

const logoutAction = () => {
    return {
        type: ActionType.LOGOUT_USER
    }
}

const asyncRegisterUser = ({name, email, password}) => {
    return async () => {
        try {
             await api.register({name, email, password});
            
        } catch (error) {
            alert(error.message);
        }
    }
}

const asyncLogoutUser = () => {
    return (dispatch) => {
        try {
            api.putAccessToken('');
            dispatch(logoutAction())
        } catch (error) {
            alert(error.message)
        }
    }
}

const asyncLoginUser = ({email, password}) => {
    return async(dispatch) => {
        try {
            const token = await api.login({email, password});
            api.putAccessToken(token)
            const ownProfile = await api.seeOwnProfile();
            dispatch(loginAction(ownProfile));
        } catch (error) {
            dispatch(loginAction(null))
        }
    }
}

const asyncOwnUser = () => {
    return async(dispatch) => {
        dispatch(showLoading());
        try {
            const ownProfile = await api.seeOwnProfile();
            dispatch(loginAction(ownProfile))
        } catch (error) {
            return error.message
        }
        dispatch(hideLoading())
    }
}
export {
    ActionType,
    loginAction,
    asyncRegisterUser, 
    asyncLoginUser,
    asyncLogoutUser,
    asyncOwnUser
}