<template lang="pug">
    .zs-orders-table
        .zs-orders-table--actions
            zs-button(theme="primary" style="margin-right: 29px") Фильтр
            zs-input(v-model="search" label="Поиск" style="width: 100%" @input="handleSearch")
                template(#append)
                    i.icon-search-copy-1
        zs-table(
            :header="header"
            :data="table_data"
            with_select
            with_expand
        )
            template(#actions="{selected}")
                zs-link(
                    style="font-weight: 500; margin-right: 24px;"
                    @click="handleUpdate(selected)"
                ) Обновить
                zs-link(
                    style="font-weight: 500; margin-right: 24px;"
                    @click="handleDelete(selected)"
                ) Удалить
                zs-link(
                    style="font-weight: 500; margin-right: 24px;"
                    @click="handlePrint(selected)"
                ) Распечатать инвойс

            template(#expand="{value}")
                zs-table(
                    :header="sub_header"
                    :data="value.items"
                    with_simple_header
                )
                    template(#cell.name="{item}")
                        div(style="display: flex; align-items: center;")
                            zs-avatar(:src="item.image")
                            div(class="zs-orders-table--sku")
                                div {{item.title}}
                                div {{item.sku}}


            template(#cell.order_id="{value}")
                zs-link(
                    style="white-space: nowrap"
                    @click="handleOpen(value)"
                ) {{value}}

            template(#cell.items="{value, index, items_of_expands, handleToggleSubrow}")
                zs-link(
                    style="white-space: nowrap; display: flex; align-items: center;"
                    @click="handleToggleSubrow(index)"
                )
                    i(
                        class="icon-x-copy-1"
                        :style="'font-size: 18px; transform: rotate(' + (items_of_expands[index] ? '0deg' : '45deg') + '); margin-right: 8px; transition: .3s;'"
                    )
                    | {{value.length}} товар(а)

            template(#cell.create_date="{value}") {{value | simple_date}}

            template(#cell.is_paid="{value}")
                zs-tag(type="icon") icon-check-copy-1

            template(#cell.is_shipped="{value}")
                zs-tag(type="icon") icon-check-copy-1

            template(#cell.is_open="{value}")
                zs-tag(theme="background" type="icon")

            template(#cell.shipping_method="{value}") {{value || '–'}}

            template(#cell.total_price="{value}") &#36;{{value}}

        .zs-orders-table--pagination
            zs-pagination(
                :value="pagination"
                @click_previous="handlePagination"
                @click_next="handlePagination"
            )
</template>

<script>
// Components
import ZsTable from '@/components/ui/zs-table'
import ZsLink from '@/components/ui/zs-link'
import ZsCheckbox from '@/components/ui/zs-checkbox'
import ZsTag from '@/components/ui/zs-tag'
import ZsPagination from '@/components/ui/zs-pagination'
import ZsButton from '@/components/ui/zs-button'
import ZsInput from '@/components/ui/zs-input'
import ZsAvatar from '@/components/ui/zs-avatar'

export default {
    name: 'ZsOrdersTableContainer',
    components: {
        ZsTable,
        ZsLink,
        ZsCheckbox,
        ZsTag,
        ZsPagination,
        ZsButton,
        ZsInput,
        ZsAvatar,
    },

    data() {
        return {
            header: [{
                label: 'ID',
                value: 'order_id',
            }, {
                label: 'Товары',
                value: 'items',
            }, {
                label: 'Дата заказа',
                value: 'create_date',
            }, {
                label: 'Оплачено',
                value: 'is_paid',
                align: 'center',
            }, {
                label: 'Отправлено',
                value: 'is_shipped',
                align: 'center',
            }, {
                label: 'Доставлено',
                value: 'is_open',
                align: 'center',
            }, {
                label: 'Покупатель',
                value: 'buyer',
            }, {
                label: 'Метод отправки',
                value: 'shipping_method',
                align: 'center',
            }, {
                label: 'Стоимтость',
                value: 'total_price',
                align: 'right',
            }],
            sub_header: [{
                label: 'Название/SKU',
                value: 'name',
            }, {
                label: 'Заказанное количество',
                value: 'quantity',
            }, {
                label: 'Цена',
                value: 'price',
            }, {
                label: 'Стоимость',
                value: 'total_price',
            }],
            current_page: 1,
            search: '',
        }
    },
    computed: {
        table_data() {
            return this.$store.state.orders.entity.list
        },
        pagination() {
            return this.$store.state.orders.pagination
        },
        sync() {
            return true
        },
    },

    methods: {
        fetchData(options) {
            this.$store.dispatch('orders/fetchZonesmartOrders', options)
        },
        handlePagination(params) {
            params && this.fetchData({...params, search: this.search})
        },
        handleSearch(value) {
            clearTimeout(this.$options.$_timeout)

            this.$options.$_timeout = setTimeout(() => {

                const pagination = this.$store.getters['orders/pagination/current_object']
                pagination.search = value

                this.fetchData(pagination)

            }, 700)
        },
        handleOpen(value) {
            console.info(`open ${value}`)
        },
        handlePrint(selected) {
            console.info('print', selected)
        },
        handleUpdate(selected) {
            console.info('Обновляю', selected.map(item => item.order_id))
        },
        handleDelete(selected) {
            console.info('Удаляю', selected.map(item => item.order_id))
        },
    },

    watch: {
        sync: {
            handler() {
                this.fetchData({limit: 10, offset: 0})
            },
            immediate: true,
        }
    }
}
</script>

<style lang="sass" scoped>
.zs-orders-table
    background: $--color-background
    &--actions
        margin-bottom: 21px
        display: flex
    &--pagination
        display: flex
        justify-content: flex-end
        margin-top: 23px
    &--sku
        margin-left: 19px
        display: flex
        flex-direction: column
        justify-content: space-between
        width: 180px
        div
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            &:first-child
                @include mix--typography-body1
                font-weight: 500
            &:last-child
                @include mix--typography-body2
                color: $--color-typo-label

</style>
