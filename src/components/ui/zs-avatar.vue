<template lang="pug">
    img.zs-avatar(:src="src" :style="`width: ${size}px; height: ${size}px;`")
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
    display: inline-block
    object-fit: cover
</style>
