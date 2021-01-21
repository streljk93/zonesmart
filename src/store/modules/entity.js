export default {
    namespaced: true,

    state: {
        item: null,
        list: [],
    },

    mutations: {
        CLEAR_ENTITY(state) {
            state.item = null
            state.list = []
        },
        SET_LIST(state, list) {
            state.list = list
        },
        SET_ITEM(state, item) {
            state.item = item
        }
    },
}
