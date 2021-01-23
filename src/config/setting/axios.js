// lib
import axios from 'axios'

// app
import config from '@/config'
import {handlerHttpError} from '@/utils/transport'

axios.defaults.baseURL = config.api
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.request.use((config) => {
    const auth = JSON.parse(localStorage.getItem('auth')) || {}
    const access = auth.access

    if (access) config.headers.authorization = `JWT ${access}`

    return config
})
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        handlerHttpError(error)

        return Promise.reject(error)
    },
)
