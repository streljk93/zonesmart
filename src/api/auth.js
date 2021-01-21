import axios from 'axios'

export const createAuth = (email, password) => {
    return axios.post('/auth/jwt/create/', {email, password})
}

export const refreshAuth = (refresh) => {
    return axios.post('/auth/jwt/refresh/', {refresh})
}
