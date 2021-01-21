// api
import * as api from '@/api/orders'

// modules
import entity from '@/store/modules/entity'
import request from '@/store/modules/request'

export default {
    namespaced: true,
    modules: {entity, request},

    actions: {
        fetchZonesmartOrders({commit}, data) {
            commit('request/REQUEST')

            return api.fetchZonesmartOrders(data)
                .then(({data}) => {
                    commit('request/SUCCESS')
                    commit('entity/SET_LIST', data)

                    return data
                })
                .catch(error => {
                    commit('request/ERROR', error)

                    throw error
                })
        }
    }
}
