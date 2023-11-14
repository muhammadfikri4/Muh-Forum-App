import api from "../../utils/api"

const ActionType = {
    RECEIVE_ALL_TAGS: 'RECEIVE_ALL_TAGS' 
}

const receiveAllTagsAction = (tags) => {
    return {
        type: ActionType.RECEIVE_ALL_TAGS,
        payload: {
            tags
        }
    }
}

const asyncReceiveAllTags = () => {
    return async(dispatch) => {
        try {
            const threads = await api.getAllThreads();
            let tags = [];
            threads.forEach((thread) => {
                tags = [...tags, {category: thread.category}]
            });
            dispatch(receiveAllTagsAction(tags))
        } catch (error) {
            alert(error.message);
        }
    }
}


export {
    ActionType,
    receiveAllTagsAction,
    asyncReceiveAllTags
}