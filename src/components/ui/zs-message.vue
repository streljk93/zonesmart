<template lang="pug">
    .zs-message(:class="{'zs-message_visible': value_state}")
        zs-alert(:type="type")
            slot
</template>

<script>
// component
import ZsAlert from '@/components/ui/zs-alert'

export default {
    name: 'ZsMessage',
    components: {ZsAlert},
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'info',
        },
        delay: {
            type: Number,
            default: null,
        },
    },

    data() {
        return {
            timeout: null
        }
    },
    computed: {
        value_state: {
            get() {
                return this.value
            },
            set(v) {
                this.$emit('input', v)
            },
        }
    },

    watch: {
        value: {
            handler(v) {
                if (v && this.delay) {
                    console.log('okkk')
                    this.timeout = setTimeout(() => {
                        this.value_state = false
                    }, this.delay)
                }
            },
            immediate: true,
        }
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
