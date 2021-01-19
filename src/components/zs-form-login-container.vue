<template lang="pug">
    .zs-form-login
        zs-alert.zs-form-login--alert(
            type="error"
            style="width: 100%"
        ) Логин или пароль неверны
        .zs-form-login--sheet
            zs-sheet
                .zs-form-login--title Вход
                .zs-form-login--item
                    zs-input(label="E-mail или телефон")
                .zs-form-login--item
                    zs-input(label="Пароль" type="password")
                    zs-link(style="margin-top: 10")
                .zs-form-login--actions
                    div
                        zs-button(style="width: 100%") Войти
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
    name: 'ZsFormLoginContainer',
    components: {
        ZsSheet,
        ZsInput,
        ZsLink,
        ZsButton,
        ZsAlert,
    },
}
</script>

<style lang="sass" scoped>
.zs-form-login
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
