<template lang="pug">
    .zs-tag ebay
</template>

<script>
export default {
    name: 'ZsTag',
}
</script>

<style lang="sass" scoped>
.zs-tag
    @include mix--typography-caption
    border-radius: $--border-sm
    display: inline-flex
    align-items: center
    height: 22px
    padding: 0 8px
    background: $--color-accent
    color: $--color-white
</style>
