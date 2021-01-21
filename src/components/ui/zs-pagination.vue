<template lang="pug">
    .zs-pagination
        .zs-pagination--arrow
            zs-button(
                type="icon"
                :disabled="!value.previous"
                @click="$emit('click_previous', previous_object)"
            ) icon-arrow-left-copy-1
        .zs-pagination--text
            | {{from_size}}
            | —
            | {{to_size}}
            | из
            | {{value.count}}
        .zs-pagination--arrow
            zs-button(
                type="icon"
                :disabled="!value.next"
                @click="$emit('click_next', next_object)"
            ) icon-arrow-right-copy-1
</template>

<script>
// Constanst
import {LIMIT} from '@/constants/pagination'

// Components
import ZsButton from '@/components/ui/zs-button'

export default {
    name: 'ZsPagination',
    components: {ZsButton},
    props: {
        value: {
            type: Object,
            default: () => ({
                previous: '',
                next: '',
                count: 0,
            }),
        },
    },

    computed: {
        previous_object() {
            return this.$store.getters['orders/pagination/previous_object']
        },
        next_object() {
            return this.$store.getters['orders/pagination/next_object']
        },
        from_size() {
            if (!this.next_object && !this.previous_object) {
                return 0
            }

            if (!this.next_object.offset && !this.previous_object.offset) {
                return LIMIT
            }

            if (!this.next_object) {
                return Number(this.previous_object.offset) + LIMIT
            }

            if (!this.previous_object) {
                return Number(this.next_object.offset) - LIMIT
            }

            return this.next_object.offset - LIMIT
        },
        to_size() {
            if (!this.next_object) return this.value.count

            return this.next_object.offset
        }
    },
}
</script>

<style lang="sass" scoped>
.zs-pagination
    display: inline-flex
    align-items: center
    &--text
        @include mix--typography-body1
        color: $--color-typo-label
        padding: 0 5px
</style>
