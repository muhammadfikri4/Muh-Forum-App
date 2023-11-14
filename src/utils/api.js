import axios from "axios"
const BASE_URL = "https://forum-api.dicoding.dev/v1";

const api = (() => {
    const getAccessToken = () => {
        return localStorage.getItem('token')
    }

    const putAccessToken = (token) => {
        localStorage.setItem('token', token)
    }

    const register = async({name, email, password}) => {
        try {
            const response = await axios.post(`${BASE_URL}/register`, {
                name,
                email,
                password
            });
            const {data} = response
            return data.data.user;
        } catch (error) {
            return error.message
        }
    }

    const login = async({email, password}) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                email, password
            });
            const {data} = response;
            const token = data.data.token;
            return token;
        } catch (error) {
            return error.message  
        }
    }

    const seeOwnProfile = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            const {data} = response
            return data.data.user
        } catch (error) {
            return error.message
        }
    }

    const getALlUsers = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/users`);
            const {data} = response;
            return data.data.users;
        } catch (error) {
            return error.message
        }
    }

    const getAllThreads = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/threads`);
            const {data} = response;
            const threads = data.data.threads;
            
            return threads;
        } catch (error) {
            return error.message
        }
    } 

    const getDetailThread = async(threadId) => {
        try {
            const response = await axios.get(`${BASE_URL}/threads/${threadId}`);
            const {data} = response;
            return data.data.detailThread
        } catch (error) {
            return error.message
        }
    }
    
    const getAllLeaderboards = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/leaderboards`);
            const {data} = response;
            return data.data.leaderboards;
        } catch (error) {
            return error.message
        }
    }

    const createComment = async({content, threadId}) => {
        try {
            const token = getAccessToken();
            const response = await axios.post(`${BASE_URL}/threads/${threadId}/comments`, {
                content
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response;
            return data.data.comment
        } catch (error) {
            return error.message
        }
    }

    const createThread = async({title, body, category}) => {
        try {
            const token = getAccessToken();
            const response = await axios.post(`${BASE_URL}/threads`, {
                title,
                body,
                category
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response;
            console.log(data.data.thread)
            return data.data.thread;
        } catch (error) {
            alert(error.message)
            console.log(error)   
        }
    }

    return {
        getAccessToken,
        putAccessToken,
        register,
        login,
        seeOwnProfile,
        getAllThreads,
        getALlUsers,
        getDetailThread,
        getAllLeaderboards,
        createComment,
        createThread
        
        
    }
})();

export default api;
