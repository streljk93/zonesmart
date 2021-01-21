// App
import {getParamsFromUrl} from '@/utils/url'
import {LIMIT} from '@/constants/pagination'

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
        current_object(state, getters) {
            if (!getters.next_object && !getters.previous_object) {
                return {
                    offset: 0,
                    limit: LIMIT,
                }
            }

            if (!getters.next_object) {
                return {
                    offset: Number(getters.previous_object.offset) + LIMIT,
                    limit: LIMIT,
                }
            }

            return {
                offset: getters.next_object.offset - LIMIT,
                limit: LIMIT,
            }
        },
        previous_object(state) {
            return getParamsFromUrl(state.previous, ['offset', 'limit'])
        },
        next_object(state) {
            return getParamsFromUrl(state.next, ['offset', 'limit'])
        }
    },
}
