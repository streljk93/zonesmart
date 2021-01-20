<template lang="pug">
    label.zs-checkbox
        input(
            type="checkbox"
            :checked="value"
            @change="$emit('input', $event.target.checked)"
        )
        div
            i.icon-check-copy-1
</template>

<script>
export default {
    name: 'ZsCheckbox',
    props: {
        value: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="sass" scoped>
.zs-checkbox
    position: relative
    cursor: pointer
    input
        position: absolute
        height: 0
        width: 0
        opacity: 0
        &:checked + div i
            opacity: 1
    div
        border: 1px solid $--color-gray
        border-radius: $--border-radius-md
        background: $--color-white
        height: 24px
        width: 24px
        display: inline-flex
        justify-content: center
        align-items: center
        &:hover
            background: $--color-background
        i
            font-size: 20px
            opacity: 0
</style>
