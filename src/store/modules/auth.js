// api
import * as api from '@/api/auth'

// modules
import entity from './entity'
import request from './request'

export default {
    namespaced: true,
    modules: {entity, request},

    actions: {
        create({commit}, {email, password}) {
            commit('request/REQUEST')

            return api.create(email, password)
                .then(({data}) => {
                    commit('request/SUCCESS', {message: 'Вы успешно вошли в zonesmart!'})
                    commit('entity/SET_ITEM', data)
                    localStorage.setItem('auth', JSON.stringify(data))

                    return data
                })
                .catch(error => {
                    commit('request/ERROR')

                    return Promise.reject(error)
                })
        },
        refresh({commit}, refresh) {
            commit('request/REQUEST')

            return api.refresh(refresh)
                .then(({data}) => {
                    commit('request/SUCCESS', {message: 'Вы получили новый токен'})
                    commit('entity/SET_ITEM', data)
                    localStorage.setItem('auth', JSON.stringify(data))

                    return data
                })
                .catch(error => {
                    commit('request/ERROR', error)

                    return Promise.reject(error)
                })
        }
    }
}
