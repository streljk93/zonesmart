<template lang="pug">
    .zs-tag(:class="`zs-tag_${type}`")
        span(v-if="type === 'icon'")
            i(:class="$slots.default[0].text")
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
    },
    created() {
        console.log(this.$slots.default[0].text)
    }
}
</script>

<style lang="sass" scoped>
.zs-tag
    @include mix--typography-caption
    border-radius: $--border-sm
    display: inline-flex
    justify-content: center
    align-items: center
    background: $--color-accent
    color: $--color-white

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
