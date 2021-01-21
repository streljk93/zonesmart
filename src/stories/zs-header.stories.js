import ZsHeader from '@/components/ui/zs-header'
import ZsButton from '@/components/ui/zs-button'

export default {
    title: 'Headers',
    component: ZsHeader,
}

const Template = () => ({
    components: {ZsHeader, ZsButton},
    template: `
        <zs-header>
          <template #title>Таблица заказов</template>
          <template #actions>
              <zs-button theme="primary">Отправления</zs-button>
              <zs-button>Экспортировать</zs-button>
          </template>
        </zs-header>
    `,
})

export const Default = Template.bind({})
