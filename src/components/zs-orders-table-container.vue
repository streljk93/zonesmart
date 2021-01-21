<template lang="pug">
    .zs-orders-table
        .zs-orders-table--actions
            zs-button(theme="primary" style="margin-right: 29px") Фильтр
            zs-input(label="Поиск" style="width: 100%")
                template(#append)
                    i.icon-search-copy-1
        zs-table(
            :header="header"
            :data="table_data"
            with_select
            with_expand
            @select="handleSelect"
        )
            template(#actions="{selected}")
                zs-link(
                    style="font-weight: 500;"
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
                            zs-avatar(:src="item.picture")
                            div(class="zs-orders-table--sku")
                                div {{item.name}}
                                div {{item.label}}


            template(#cell.id="{value}")
                zs-link(
                    style="white-space: nowrap"
                    @click="handleOpen"
                ) {{value}}

            template(#cell.items="{value, index, items_of_expands, handleToggleSubrow}")
                zs-link(
                    style="white-space: nowrap; display: flex; align-items: center;"
                    @click="handleToggleSubrow(index)"
                )
                    i(
                        class="icon-x-copy-1"
                        :style="'font-size: 18px; transform: rotate(' + (items_of_expands[index] ? '0deg' : '45deg') + '); margin-right: 8px'"
                    )
                    | {{value.length}} товар(а)

            template(#cell.is_paid="{value}")
                zs-tag(type="icon") icon-check-copy-1

            template(#cell.is_sent="{value}")
                zs-tag(type="icon") icon-check-copy-1

            template(#cell.is_delivered="{value}")
                zs-tag(theme="background" type="icon")

            template(#cell.channel="{value}")
                zs-tag {{value}}

            template(#cell.amount="{value}") &#36;{{value}}

        .zs-orders-table--pagination
            zs-pagination(:total="3")
</template>

<script>
// Components
import ZsTable from '@/components/ui/zs-table'
import ZsLink from '@/components/ui/zs-link'
import ZsCheckbox from '@/components/ui/zs-checkbox'
import ZsTag from '@/components/ui/zs-tag'
import ZsPagination from '@/components/ui/zs-pagination';
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
                value: 'id',
            }, {
                label: 'Товары',
                value: 'items',
            }, {
                label: 'Дата заказа',
                value: 'date',
            }, {
                label: 'Статус',
                value: 'status',
            }, {
                label: 'Оплачено',
                value: 'is_paid',
                align: 'center',
            }, {
                label: 'Отправлено',
                value: 'is_sent',
                align: 'center',
            }, {
                label: 'Доставлено',
                value: 'is_delivered',
                align: 'center',
            }, {
                label: 'Канал продаж',
                value: 'channel',
                align: 'center',
            }, {
                label: 'Покупатель',
                value: 'buyer',
            }, {
                label: 'Метод отправки',
                value: 'method',
            }, {
                label: 'Стоимтость',
                value: 'amount',
                align: 'right',
            }],
            sub_header: [{
                label: 'Название/SKU',
                value: 'name',
            }, {
                label: 'Заказанное количество',
                value: 'length',
            }, {
                label: 'Отправленное количество',
                value: 'length',
            }, {
                label: 'Цена',
                value: 'price',
            }, {
                label: 'Стоимость',
                value: 'amount',
            }],
            table_data: [{
                id: 1034,
                items: [{
                    picture: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
                    name: 'Какое-то название',
                    label: 'mac_pro_16_10',
                    length: 1,
                    price: 10,
                    amount: 10,
                }, {
                    picture: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
                    name: 'Какое-то название',
                    label: 'mac_pro_16_10',
                    length: 1,
                    price: 10,
                    amount: 10,
                }],
                date: '01.11.2020',
                status: 'В ожидании оплаты',
                is_paid: false,
                is_sent: false,
                is_delivered: false,
                channel: 'ebay',
                buyer: 'Harry Potter',
                method: 'Сова',
                amount: 10,
            }],
        }
    },

    methods: {
        handleOpen() {
            console.log('open')
        },
        handleSelect(selected) {
            console.log('selected', selected)
        },
        handlePrint(selected) {
            console.log('print', selected)
        },
    },
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
        div
            &:first-child
                @include mix--typography-body1
                font-weight: 500
            &:last-child
                @include mix--typography-body2
                color: $--color-typo-label

</style>
