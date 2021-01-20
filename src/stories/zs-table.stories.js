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
            console.log('open')
        },
        handleSelect(selected) {
            console.log('selected', selected)
        },
    },
    template: `
        <zs-table
            :header="header"
            :data="tableData"
            with_select
            @select="handleSelect"
        >
            <template #cell.id="{value}">
                <zs-link
                    style="white-space: nowrap"
                    @click="handleOpen"
                >
                    {{value}}
                </zs-link>
            </template>
            <template #cell.items="{value}">
                <zs-link
                    style="white-space: nowrap; display: flex; align-items: center;"
                    @click="handleOpen"
                >
                    <i class="icon-x-copy-1" style="font-size: 18px; transform: rotate(45deg); margin-right: 8px" />
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
