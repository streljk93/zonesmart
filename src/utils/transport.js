// app
import store from '@/store'
import router from '@/router'

export const handlerHttpError = (error) => {
    const code = error.response?.data?.code
    const status = error.response?.status

    switch (status) {
        case 401: {
            const token_not_valid = code === 'token_not_valid'
            const auth = JSON.parse(localStorage.getItem('auth'))
            const refresh = auth.refresh

            if (token_not_valid && refresh) {
                store.dispatch('auth/refresh', refresh)
            } else {
                router.push({name: '/Login'})
            }
            break
        }

    }
}
