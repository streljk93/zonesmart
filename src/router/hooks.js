// app
import store from '@/store'

export default (router) => {

    // guard hook
    router.beforeEach((to, from, next) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const isAuth = auth && auth.access && auth.refresh

        if (to.name !== 'Login' && !isAuth) {
            next({ name: 'Login' })
        } else {
            store.commit('auth/entity/SET_ITEM', auth)
            next()
        }
    })

}
