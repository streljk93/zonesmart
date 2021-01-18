<template lang="pug">
    a.zs-link(:href="$attrs.to" @click="handleClick")
        slot
</template>

<script>
export default {
    name: 'ZsLink',

    methods: {
        handleClick(e) {
            if (!this.$router) return false

            e.preventDefault()

            this.$router.push(this.$attrs.to)
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
