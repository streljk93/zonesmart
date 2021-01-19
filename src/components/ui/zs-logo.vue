<template lang="pug">
    .zs-logo
        span Zone
        span smart
</template>

<script>
export default {
    name: "zs-logo"
}
</script>

<style lang="sass" scoped>
.zs-logo
    font-size: 24px
    line-height: 28.13px
    font-weight: 900
    letter-spacing: -0.71px
    span:first-child
        color: $--color-accent
    span:last-child
        color: $--color-typo
</style>
