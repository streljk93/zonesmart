// api
import * as api from '@/api/auth'

// modules
import entity from './entity'
import request from './request'

export default {
    namespaced: true,
    modules: {entity, request},

    actions: {
        createAuth({commit}, {email, password}) {
            commit('request/REQUEST')

            return api.createAuth(email, password)
                .then(({data}) => {
                    commit('request/SUCCESS')
                    commit('entity/SET_ITEM', data)
                    localStorage.setItem('auth', JSON.stringify(data))

                    return data
                })
                .catch(error => {
                    commit('request/ERROR')

                    throw error
                })
        }
    }
}
