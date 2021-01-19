<template lang="pug">
    .zs-sheet
        slot
</template>

<script>
export default {
    name: "zs-sheet"
}
</script>

<style lang="sass" scoped>
.zs-sheet
    @include mix--typography-body1
    box-shadow: $--shadow-lg
    border-radius: $--border-lg
    background: $--color-white
    padding: 40px 50px
</style>
