<template lang="pug">
    div
        zs-message(ref="message")
        router-view
</template>

<script>
// components
import ZsMessage from '@/components/ui/zs-message'

export default {
    name: 'App',
    components: {ZsMessage},

    mounted() {
        this.$EventBus.$on('showMessage', (data) => {
            this.$refs.message.show(data)
        })
    }
}
</script>

<style lang="sass">
</style>
