<template lang="pug">
    .login-page
        .login-page--top
            .login-page--logo
                zs-logo
            .login-page--form
                zs-login-form-container
        .login-page--bottom
            .login-page--sign © 2020 ООО «ЗОНСМАРТ». Все права защищены.
</template>

<script>
// Components
import ZsLoginFormContainer from '@/components/zs-login-form-container'
import ZsLogo from '@/components/ui/zs-logo'

export default {
    name: 'Login',
    components: {ZsLoginFormContainer, ZsLogo},
}
</script>

<style lang="sass" scoped>
.login-page
    height: 100vh
    background: $--color-background
    display: flex
    flex-direction: column
    align-items: center
    &--top
        flex: 1
        max-width: 435px
        width: 100%
    &--bottom
        height: 50px
    &--logo
        margin-top: 60px
        margin-bottom: 105px
        text-align: center
    &--sign
        @include mix--typography-body2
        color: $--color-typo-label
</style>
