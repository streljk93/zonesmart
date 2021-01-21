<template lang="pug">
    zs-master
        template(#default)
            zs-header
                template(#title) Таблица заказов
                template(#actions)
                    zs-button(theme="primary" size="sm") Отправления
                    zs-button(size="sm") Экспортировать
            zs-orders-table-container
</template>

<script>
// Components
import ZsMaster from '@/components/layout/zs-master'
import ZsHeader from '@/components/ui/zs-header'
import ZsButton from '@/components/ui/zs-button'
import ZsOrdersTableContainer from '@/components/zs-orders-table-container'

export default {
    name: 'Orders',
    components: {ZsMaster, ZsHeader, ZsButton, ZsOrdersTableContainer},
}
</script>

<style lang="sass" scoped>

</style>
