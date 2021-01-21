<template lang="pug">
    button.zs-button(
        v-bind="$attrs"
        :class="`zs-button_${theme} zs-button_${size} zs-button_${type}`"
        :disabled="$attrs.disabled || loading"
        @click="$emit('click')"
    )
        span(v-if="type === 'icon'")
            i(:class="$slots.default ? $slots.default[0].text : ''")
        slot(v-else-if="!loading")
        span(v-else) загрузка...
</template>

<script>
export default {
    name: 'ZsButton',
    props: {
        type: {
            type: String,
            default: 'flat',
        },
        theme: {
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
    border-radius: $--border-radius-md
    border-width: 0
    color: $--color-white
    cursor: pointer
    display: inline-flex
    align-items: center
    justify-content: center

    &_icon
        background: none !important
        font-size: 24px
        height: 24px !important
        width: 24px
        padding: 0 !important
        &:hover i
            color: $--color-typo
        i
            color: $--color-typo-label

    &_accent
        background: $--color-accent
        &:hover, &:active
            background: $--color-accent-dark-1
    &_primary
        background: $--color-primary
        &:hover, &:active
            background: $--color-primary-dark-1

    &_md
        height: 52px
        padding: 0 32px
    &_sm
        height: 32px
        padding: 0 12px

    &:disabled
        background: $--color-gray
        cursor: auto
</style>
