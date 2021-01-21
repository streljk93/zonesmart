<template lang="pug">
    .zs-expand-transition(:class="{'zs-expand-transition_visible': value}")
        slot
</template>

<script>
export default {
    name: 'ZsExpandTransition',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="sass" scoped>
.zs-expand-transition
    opacity: 0
    transform: scaleY(0)
    transform-origin: top
    transition: .4s
    &_visible
        opacity: 1
        transform: scaleY(1)
</style>
