<template lang="pug">
    a.zs-link(:href="to" @click="handleClick")
        slot
</template>

<script>
export default {
    name: 'ZsLink',
    props: {
        to: {
            type: [String, Object],
            default: '',
        },
    },

    methods: {
        handleClick(e) {
            if (!this.to) {
                e.preventDefault()
                this.$emit('click')
                return
            }
            if (!this.$router) return false

            e.preventDefault()

            this.$router.push(this.to)
        },
    },
}
</script>

<style lang="sass" scoped>
.zs-link
    @include mix--typography-body2
    color: $--color-accent
    text-decoration: none
    cursor: pointer
    &:hover
        color: $--color-typo
</style>
