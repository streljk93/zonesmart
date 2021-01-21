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
            if (!this.next_object) {
                return Number(this.previous_object.offset) + Number(this.previous_object.limit)
            }

            return this.next_object.offset - this.next_object.limit
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
