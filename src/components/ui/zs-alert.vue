<template lang="pug">
    .zs-alert(:class="`zs-alert_${type}`")
        .zs-alert--icon
            span
                i(:class="icon")
        .zs-alert--message
            slot
</template>

<script>
export default {
    name: 'ZsAlert',
    props: {
        type: {
            type: String,
            default: 'info',
        },
    },

    computed: {
        icon() {
            if (this.type === 'error') return 'icon-x-copy-1'

            return 'icon-check-copy-1'
        },
    },
}
</script>

<style lang="sass" scoped>
.zs-alert
    border-radius: $--border-radius-md
    display: inline-flex
    height: 45px
    padding: 0 20px
    align-items: center
    background: $--color-background
    &_success
        background: $--color-accent
    &_error
        background: $--color-error
        color: $--color-white
    &--icon span
        border-radius: 50%
        height: 26px
        width: 26px
        background: $--color-white
        display: inline-flex
        align-items: center
        justify-content: center
        margin-right: 15px
        i
            color: $--color-typo
            font-weight: bold
            font-size: 16px
    &--message
        @include mix--typography-body1
        flex: 1
</style>
