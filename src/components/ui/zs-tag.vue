<template lang="pug">
    .zs-tag(:class="`zs-tag_${type} zs-tag_${theme}`")
        span(v-if="type === 'icon'")
            i(:class="$slots.default ? $slots.default[0].text : ''")
        span(v-else)
            slot
</template>

<script>
export default {
    name: 'ZsTag',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        theme: {
            type: String,
            default: 'accent',
        }
    },
}
</script>

<style lang="sass" scoped>
.zs-tag
    @include mix--typography-caption
    border-radius: $--border-radius-sm
    display: inline-flex
    justify-content: center
    align-items: center
    span
        display: inline-flex
        align-items: center

    &_accent
        background: $--color-accent
        color: $--color-white
    &_background
        background: $--color-background
        color: $--color-typo

    &_text
        height: 22px
        padding: 0 8px
    &_icon
        border-radius: 50%
        height: 20px
        width: 20px
        padding: 0
        i
            font-size: 14px
            font-weight: 900
</style>
