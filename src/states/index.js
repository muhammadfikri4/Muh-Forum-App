import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import { loadingBarMiddleware, loadingBarReducer } from 'react-redux-loading-bar';
import detailThreadReducer from './detailThread/reducer';
import leaderboardReducer from './leaderboard/reducer';
import tagReducer from './tag/reducer';

const store = configureStore({
    reducer: {
        users: usersReducer,
        threads: threadsReducer,
        detailThread: detailThreadReducer,
        leaderboards: leaderboardReducer,
        tags: tagReducer,
        loadingBar: loadingBarReducer
    },
});

export default store;