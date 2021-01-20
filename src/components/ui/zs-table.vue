<template lang="pug">
    .zs-table
        table
            thead
                tr
                    th(v-if="with_select")
                        zs-checkbox(
                            @input="handleMultiSelect"
                        )
                    th(v-for="(head, index) in header" :key="index")
                        slot(:name="`header.${head.value}`")
                            | {{head.label}}
            tbody
                tr(v-for="(item, index) in data" :key="index")
                    td(v-if="with_select")
                        zs-checkbox(
                            :ref="`checkbox-${index}`"
                            @input="handleSelect(index, $event, item)"
                        )
                    td(
                        v-for="(head, index) in header"
                        :key="index"
                        :class="`zs-table--align-${head.align ? head.align : 'left'}`"
                    )
                        slot(:name="`cell.${head.value}`" :value="item[head.value]")
                            | {{item[head.value]}}
</template>

<script>
// components
import ZsCheckbox from '@/components/ui/zs-checkbox'

export default {
    name: 'ZsTable',
    components: {ZsCheckbox},
    props: {
        header: {
            type: Array,
            default: () => [],
        },
        data: {
            type: Array,
            default: () => [],
        },
        with_select: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            selected: {},
        }
    },

    methods: {
        handleMultiSelect(is_select) {
            for (const index in this.$refs) {
                if (!Object.prototype.hasOwnProperty.call(this.$refs, index)) continue
                if (index.search('checkbox-') === -1) continue

                this.$refs[index][0].value_state = is_select
            }
        },
        handleSelect(index, is_select, item) {
            if (is_select) {
                this.selected[index] = item
            } else {
                delete this.selected[index]
            }

            this.$emit('select', Object.values(this.selected))
        }
    }
}
</script>

<style lang="sass" scoped>
.zs-table
    // common
    color: $--color-typo
    width: 100%
    overflow-x: scroll
    &--align
        &-left
            text-align: left
        &-center
            text-align: center
        &-right
            text-align: right
    table
        width: 100%
    table, a
        @include mix--typography-body2
        line-height: 14px
    table, th, td
        border: 0 solid transparent
        border-collapse: collapse
    thead th
        &:first-child
            border-radius: $--border-radius-lg 0 0 $--border-radius-lg
        &:last-child
            border-radius: 0 $--border-radius-lg $--border-radius-lg 0
    tbody tr
        &:first-child
            td
                &:first-child
                    border-radius: $--border-radius-lg 0 0 0
                &:last-child
                    border-radius: 0 $--border-radius-lg 0 0
        &:last-child
            td
                &:first-child
                    border-radius: 0 0 0 $--border-radius-lg
                &:last-child
                    border-radius: 0 0 $--border-radius-lg 0

    // separating
    tbody:before
        content: '-'
        display: block
        line-height: 1em
        color: transparent
    table
        position: relative
    tbody tr:not(:first-child):after
        content: ''
        display: block
        background: $--color-gray
        position: absolute
        left: 0
        right: 0
        height: 1px
        margin: 0 20px

    // row + cell
    tr
        background: $--color-white

    th
        color: $--color-typo-label
        font-weight: 400
        white-space: nowrap
        text-align: left

    th, td
        height: 57px
        padding: 0 20px
</style>
