export default {
    namespaced: true,

    state: {
        requests: [],
    },

    mutations: {
        SAVE_REQUEST(state, request) {
            state.requests.push(request)
        },
        REMOVE_REQUESTS(state) {
            state.requests = []
        },
    },

    actions: {
        runRequests({state, commit, dispatch}) {
            state.requests.forEach((request) => {
                dispatch(request.name, request.params, {root: true})
            })

            commit('REMOVE_REQUESTS')
        }
    },
}
