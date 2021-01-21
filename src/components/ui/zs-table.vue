<template lang="pug">
    .zs-table
        table
            colgroup
                col(v-if="with_select")
                col(
                    v-for="(head, index) in header"
                    :key="index"
                    :name="`zs-table-col-${head.value}`"
                    :width="head.width || 'auto'"
                )
            thead(:class="{'zs-table--simple-header': with_simple_header}")
                tr
                    th(v-if="with_select")
                        zs-checkbox(
                            @input="handleMultiSelect"
                        )
                    th(v-for="(head, index) in header" :key="index")
                        slot(:name="`header.${head.value}`")
                            div(v-if="has_selected" style="position: relative")
                                div(v-if="!index" style="position: absolute; z-index: 1;")
                                    slot(name="actions" :selected="Object.values(selected)")
                                div(style="visibility: hidden") {{head.label}}
                            div(v-else) {{head.label}}
            tbody
                template(v-for="(item, index) in data")
                    tr(:key="index" :class="{'zs-table--hr-hidden': items_of_expands[index]}")
                        td(v-if="with_select")
                            zs-checkbox(
                                :ref="`checkbox-${index}`"
                                @input="handleSelect(index, $event, item)"
                            )
                        td(
                            v-for="(head, index_of_head) in header"
                            :key="index_of_head"
                            :id="`zs-table-col-${head.value}`"
                            :class="`zs-table--align-${head.align ? head.align : 'left'}`"
                        )
                            slot(
                                :name="`cell.${head.value}`"
                                :index="index"
                                :value="item[head.value]"
                                :items_of_expands="items_of_expands"
                                :handleToggleSubrow="handleToggleSubrow"
                            )
                                | {{item[head.value]}}

                    transition(name="zs-table--subrow")
                        tr(v-if="with_expand && items_of_expands[index]" :key="`subtr-${index}`")
                            td(:colspan="cell_length + unknown_cell_length" class="zs-table--subcell")
                                slot(name="expand" :value="item")
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
        with_expand: {
            type: Boolean,
            default: false,
        },
        with_simple_header: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            selected: {},
            items_of_expands: {},
        }
    },
    computed: {
        unknown_cell_length() {
            let unknown = 0

            if (this.with_select) unknown += 1

            return unknown
        },
        cell_length() {
            return Object.keys(this.data[0]).length
        },
        has_selected() {
            return Object.values(this.selected).length
        },
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
                this.$set(this.selected, index, item)
            } else {
                this.$delete(this.selected, index)
            }

            this.$emit('select', Object.values(this.selected))
        },
        handleToggleSubrow(index) {
            if (!this.with_expand) return false

            this.$set(this.items_of_expands, index, !this.items_of_expands[index])
        }
    },

    watch: {
        data() {
            // expandable
            if (this.with_expand) {
                this.items_of_axpands = {}
            }
        },
    },
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

    &--subrow
        &-enter-active, &-leave-active
            transition: opacity .3s
        &-enter, &-leave-to
            opacity: 0

    tr td.zs-table--subcell
        > div
            border-radius: $--border-radius-lg
            background: $--color-background
            padding: 28px 19px 20px 63px
            margin-bottom: 20px

    // separating
    tbody:before
        content: '-'
        display: block
        line-height: 1em
        color: transparent
    table
        position: relative

    .zs-table--hr-hidden + tr:after
        opacity: 0 !important
    tbody tr:not(:first-child):after
        opacity: 1
        transition: opacity .5s
        content: ''
        display: block
        background: $--color-gray
        position: absolute
        left: 0
        right: 0
        height: 1px
        margin: 0 20px

    // row + cell
    thead.zs-table--simple-header tr
        background: none
        th
            height: auto
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
