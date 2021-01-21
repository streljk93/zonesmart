<template lang="pug">
    .zs-master
        .zs-master--appbar
        .zs-master--sidebar
        .zs-master--content
            .zs-master--wrap
                slot
</template>

<script>
export default {
    name: 'ZsMaster',
}
</script>

<style lang="sass" scoped>
.zs-master
    height: 100vh
    display: grid
    grid-template-columns: 220px 1fr
    grid-template-rows: 63px auto
    grid-template-areas: "sidebar appbar" "sidebar content"
    @media screen and (max-width: $--breakpoint-sm)
        grid-template-columns: 1fr
        grid-template-rows: auto
        grid-template-areas: "appbar" "content"
    &--appbar
        grid-area: appbar
        background: $--color-white
    &--sidebar
        grid-area: sidebar
        background: $--color-primary
    &--content
        grid-area: content
        background: $--color-background
        overflow: hidden
    &--wrap
        max-width: 1320px
        padding: 0 30px
        margin: 0 auto
</style>
