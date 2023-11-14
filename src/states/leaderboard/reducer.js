import { ActionType } from "./action";

const leaderboardReducer = (leaderboard=[], action={}) => {
    switch(action.type) {
        case ActionType.RECEIVE_ALL_LEADERBOARD:
            return action.payload.leaderboards;
        default:
            return leaderboard;
    }
}

export default leaderboardReducer;