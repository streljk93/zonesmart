import ZsTable from '@/components/ui/zs-table'
import ZsLink from '@/components/ui/zs-link'
import ZsCheckbox from '@/components/ui/zs-checkbox'
import ZsTag from '@/components/ui/zs-tag'

export default {
    title: 'Tables',
    component: ZsTable,
    parameters: {
        backgrounds: {
            default: 'zonesmart',
            values: [
                {name: 'white', value: 'white'},
                {name: 'zonesmart', value: '#F6F9FC'},
            ],
        },
    }
}

const Template = () => ({
    components: {ZsTable, ZsLink, ZsCheckbox, ZsTag},
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
            tableData: [{
                id: 1034,
                items: [{
                    name: 'Какое-то название',
                    label: 'mac_pro_16_10',
                    length: 1,
                    price: 10,
                    amount: 10,
                }, {
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
            }, {
                id: 1034,
                items: [{
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
            }, {
                id: 1034,
                items: [{
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
            console.info('open')
        },
        handleSelect(selected) {
            console.info('selected', selected)
        },
        handlePrint(selected) {
            console.info('print', selected)
        },
    },
    template: `
        <zs-table
            :header="header"
            :data="tableData"
            with_select
            with_expand
            @select="handleSelect"
        >
            <template #actions="{selected}">
                <zs-link style="font-weight: 500;" @click="handlePrint(selected)">Распечатать инвойс</zs-link>
            </template>
            <template #expand="{value}">
                <zs-table
                    :header="[{
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
                    }]"
                    :data="value.items"
                    with_simple_header
                ></zs-table>
            </template>
            <template #cell.id="{value}">
                <zs-link
                    style="white-space: nowrap"
                    @click="handleOpen"
                >
                    {{value}}
                </zs-link>
            </template>
            <template #cell.items="{value, index, items_of_expands, handleToggleSubrow}">
                <zs-link
                    style="white-space: nowrap; display: flex; align-items: center;"
                    @click="handleToggleSubrow(index)"
                >
                    <i
                        class="icon-x-copy-1"
                        :style="'font-size: 18px; transform: rotate(' + (items_of_expands[index] ? '0deg' : '45deg') + '); margin-right: 8px'"
                    />
                    {{value.length}} товар(а)
                </zs-link>
            </template>
            <template #cell.is_paid="{value}">
                <zs-tag type="icon">icon-check-copy-1</zs-tag>
            </template>
            <template #cell.is_sent="{value}">
                <zs-tag type="icon">icon-check-copy-1</zs-tag>
            </template>
            <template #cell.is_delivered="{value}">
                <zs-tag theme="background" type="icon" />
            </template>
            <template #cell.channel="{value}">
                <zs-tag>{{value}}</zs-tag>
            </template>
            <template #cell.amount="{value}">
                &#36;{{value}}
            </template>
        </zs-table>
    `,
})

export const Default = Template.bind({})
