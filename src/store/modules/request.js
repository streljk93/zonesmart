// app
import {EventBus} from '@/config/setting/event-bus'

export default {
    namespaced: true,
    state: {
        is_fetching: false,
    },

    mutations: {
        REQUEST(state) {
            state.is_fetching = true
        },
        SUCCESS(state, payload = {}) {
            const {message} = payload

            state.is_fetching = false
            message && EventBus.$emit('showMessage', {
                type: 'success',
                text: message,
            })
        },
        ERROR(state, error = {response: {status: null, statusText: 'empty'}}) {
            const response = error.response
            const mess = `${response.status} / ${response.statusText}`

            state.is_fetching = false
            if (response.status !== null) {
                EventBus.$emit('showMessage', {
                    type: 'error',
                    text: mess,
                })
            }
        },
    },
}
