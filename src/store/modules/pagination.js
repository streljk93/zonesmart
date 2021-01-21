// App
import {getParamsFromUrl} from '@/utils/url'

export default {
    namespaced: true,

    state: {
        previous: '',
        next: '',
        count: 0,
    },

    mutations: {
        SET(state, {count, next, previous}) {
            state.previous = previous
            state.next = next
            state.count = count
        },
    },

    getters: {
        previous_object(state) {
            return getParamsFromUrl(state.previous, ['offset', 'limit'])
        },
        next_object(state) {
            return getParamsFromUrl(state.next, ['offset', 'limit'])
        }
    },
}
