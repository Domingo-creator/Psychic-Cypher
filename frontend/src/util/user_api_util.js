import axios from 'axios';

export const fetchUsers = () => {
    return axios.get('/api/users')
}


export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`)
}

export const updateUser = (user) => {
    return axios.patch(`api/users/${user.id || user._id}`, user)
}