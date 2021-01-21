<template lang="pug">
    .zs-pagination
        .zs-pagination--arrow
            zs-button(
                type="icon"
                :disabled="left_is_disabled"
                @click="handleClickLeft"
            ) icon-arrow-left-copy-1
        .zs-pagination--text
            | {{(current_page - 1) * page_size}}
            | —
            | {{((current_page - 1) * page_size) + page_size}}
            | из
            | {{total}}
        .zs-pagination--arrow
            zs-button(
                type="icon"
                :disabled="right_is_disabled"
                @click="handleClickRight"
            ) icon-arrow-right-copy-1
</template>

<script>
// Components
import ZsButton from '@/components/ui/zs-button'

export default {
    name: 'ZsPagination',
    components: {ZsButton},
    props: {
        current_page: {
            type: Number,
            default: 1,
        },
        page_size: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
    },

    computed: {
        left_is_disabled() {
            return this.current_page === 1
        },
        right_is_disabled() {
            return this.current_page === Math.ceil(this.total / this.page_size)
        },
    },

    methods: {
        handleClickLeft() {
            const current_page = this.current_page - 1

            this.$emit('update:current_page', current_page)
            this.$emit('change-current', {
                current_page,
                page_size: this.page_size,
                total: this.total,
            })
        },
        handleClickRight() {
            const current_page = this.current_page + 1

            this.$emit('update:current_page', current_page)
            this.$emit('change-current', {
                current_page,
                page_size: this.page_size,
                total: this.total,
            })
        }
    }
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
