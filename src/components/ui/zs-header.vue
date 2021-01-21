<template lang="pug">
    .zs-header
        .zs-header--title
            slot(name="title")
        .zs-header--actions
            slot(name="actions")
</template>

<script>
export default {
    name: 'ZsHeader',
}
</script>

<style lang="sass" scoped>
.zs-header
    display: flex
    justify-content: space-between
    padding: 33px 0
    &--title
        @include mix--typography-heading4
        color: $--color-typo
        font-weight: 500
    &--actions
        > *
            margin-right: 10px
            &:last-child
                margin-right: 0
</style>
