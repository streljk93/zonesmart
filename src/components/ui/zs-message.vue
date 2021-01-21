<template lang="pug">
    .zs-message(:class="{'zs-message_visible': value}")
        zs-alert(:type="type") {{text}}
</template>

<script>
// component
import ZsAlert from '@/components/ui/zs-alert'

export default {
    name: 'ZsMessage',
    components: {ZsAlert},

    data() {
        return {
            timeout: null,
            value: false,
            type: 'info',
            text: 'Текст по умполчанию',
            delay: 5000,
        }
    },

    methods: {
        show({type, text, options}) {
            this.type = type
            this.text = text

            // set options
            if (options) {
                this.delay = options.delay
            }

            this.value = true
        }
    },

    watch: {
        value(v) {
            if (v && this.delay) {
                clearTimeout(this.timeout)
                this.timeout = setTimeout(() => {
                    this.value = false
                }, this.delay)
            }
        },
    },
}
</script>

<style lang="sass" scoped>
.zs-message
    position: fixed
    top: 0
    left: 50%
    transform: translate(-50%, -100%)
    transition: .2s
    opacity: 0
    &_visible
        transform: translate(-50%, calc(100% + 78px))
        opacity: 1
</style>
