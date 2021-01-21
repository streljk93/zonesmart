import axios from 'axios'

export const create = (email, password) => {
    return axios.post('/auth/jwt/create/', {email, password})
}

export const refresh = (refresh) => {
    return axios.post('/auth/jwt/refresh/', {refresh})
}
