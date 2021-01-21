// app
import {EventBus} from '@/config/setting/event-bus'

export default {
    namespaced: true,
    state: {
        isFetching: false,
    },

    mutations: {
        REQUEST(state) {
            state.isFetching = true
        },
        SUCCESS(state, payload = {}) {
            const {message} = payload

            state.isFetching = false
            message && EventBus.$emit('showMessage', {
                type: 'success',
                text: message,
            })
        },
        ERROR(state, error = {response: {status: null, statusText: 'empty'}}) {
            const response = error.response
            const mess = `${response.status} / ${response.statusText}`

            state.isFetching = false
            if (response.status !== null) {
                EventBus.$emit('showMessage', {
                    type: 'error',
                    text: mess,
                })
            }
        },
    },
}
