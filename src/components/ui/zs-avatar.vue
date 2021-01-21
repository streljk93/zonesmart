<template lang="pug">
    .zs-avatar(
        :class="{'zs-avatar--background': !src}"
        :style="`width: ${size}px; height: ${size}px;`"
    )
        img(
            v-if="src"
            :src="src"
        )
</template>

<script>
export default {
    name: 'ZsAvatar',
    props: {
        src: {
            type: String,
            default: '',
        },
        size: {
            type: Number,
            default: 40,
        }
    },
}
</script>

<style lang="sass" scoped>
.zs-avatar
    border-radius: $--border-radius-md
    overflow: hidden
    &--background
        background: $--color-gray
    img
        display: inline-block
        object-fit: cover
        height: 100%
        width: 100%
</style>
