<template lang="pug">
    validation-observer.zs-login-form(v-slot="{invalid}")
        zs-alert.zs-login-form--alert(
            type="error"
            style="width: 100%"
        ) Логин или пароль неверны
        .zs-login-form--sheet
            zs-sheet
                .zs-login-form--title Вход
                .zs-login-form--item
                    validation-provider(rules="required" v-slot="{errors}")
                        zs-input(v-model="login" label="E-mail или телефон" :error_message="errors[0]")
                .zs-login-form--item
                    validation-provider(rules="required" v-slot="{errors}")
                        zs-input(v-model="password" label="Пароль" type="password" :error_message="errors[0]")
                    zs-link(style="margin-top: 10")
                .zs-login-form--actions
                    div
                        zs-button(
                            :disabled="invalid"
                            style="width: 100%"
                        ) Войти
                    div(style="text-align: center")
                        zs-link Зарегистрироваться

</template>

<script>
// Components
import ZsSheet from '@/components/ui/zs-sheet'
import ZsInput from '@/components/ui/zs-input'
import ZsLink from '@/components/ui/zs-link'
import ZsButton from '@/components/ui/zs-button'
import ZsAlert from '@/components/ui/zs-alert'

export default {
    name: 'ZsLoginFormContainer',
    components: {
        ZsSheet,
        ZsInput,
        ZsLink,
        ZsButton,
        ZsAlert,
    },

    data() {
        return {
            login: '',
            password: '',
        }
    },
}
</script>

<style lang="sass" scoped>
.zs-login-form
    width: 100%
    display: inline-flex
    flex-direction: column
    align-items: center
    position: relative
    &--alert
        position: absolute
        top: -75px
    &--sheet
        width: 100%
        padding-left: 14px
        padding-right: 14px
    &--title
        @include mix--typography-heading4
        margin-bottom: 40px
        text-align: center
    &--item
        margin-bottom: 30px
    &--actions
        > *
            margin-bottom: 20px
            &:last-child
                margin-bottom: 0
</style>
