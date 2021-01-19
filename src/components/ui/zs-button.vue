<template lang="pug">
    button.zs-button(
        v-bind="$attrs"
        :class="`zs-button--${type} zs-button--${size}`"
        :disabled="$attrs.disabled || loading"
    )
        slot(v-if="!loading")
        span(v-else) загрузка...
</template>

<script>
export default {
    name: 'ZsButton',
    props: {
        type: {
            type: String,
            default: 'accent'
        },
        size: {
            type: String,
            default: 'md',
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="sass" scoped>
.zs-button
    @include mix--typography-button
    border-radius: $--border-md
    border-width: 0
    color: $--color-white
    cursor: pointer
    display: inline-flex
    align-items: center
    justify-content: center

    &--accent
        background: $--color-accent
        &:hover, &:active
            background: $--color-accent-dark-1
    &--primary
        background: $--color-primary
        &:hover, &:active
            background: $--color-primary-dark-1

    &--md
        height: 52px
        padding: 0 32px
    &--sm
        height: 32px
        padding: 0 12px

    &:disabled
        background: $--color-gray
        cursor: auto
</style>
