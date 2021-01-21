import ZsMessage from '@/components/ui/zs-message'
import ZsButton from '@/components/ui/zs-button'

export default {
    title: 'Messages',
    component: ZsMessage,
}

const Template = () => ({
    components: {ZsMessage, ZsButton},
    methods: {
        handleOpen() {
            this.$refs.message.show({
                type: 'success',
                text: 'Пароль от zonesmart@gmail.ru был успешно изменен',
            })
        },
    },
    template: `
        <div>
            <zs-message ref="message" />
            <zs-button @click="handleOpen">open</zs-button>
        </div>
    `,
})

export const Default = Template.bind({})
