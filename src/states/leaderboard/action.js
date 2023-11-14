import { hideLoading, showLoading } from "react-redux-loading-bar"
import api from "../../utils/api"

const ActionType = {
    RECEIVE_ALL_LEADERBOARD: 'RECEIVE_ALL_LEADERBOARD'
}

const receiveAllLeaderboardsAction = (leaderboards) => {
    return {
        type: ActionType.RECEIVE_ALL_LEADERBOARD,
        payload: {
            leaderboards
        }
    }
}

const asyncReceiveAllLeaderboard = () => {
    return async(dispatch) => {
        dispatch(showLoading())
        try {
            const leaderboards = await api.getAllLeaderboards();
            dispatch(receiveAllLeaderboardsAction(leaderboards));
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

export {
    ActionType,
    receiveAllLeaderboardsAction,
    asyncReceiveAllLeaderboard
}