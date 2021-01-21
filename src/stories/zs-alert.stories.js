import ZsAlert from '@/components/ui/zs-alert'

export default {
    title: 'Alerts',
    component: ZsAlert,
}

const Template = () => ({
    components: {ZsAlert},
    template: `
        <zs-alert type="success">Пароль от zonesmart@gmail.ru был успешно изменен</zs-alert>
    `,
})

export const Default = Template.bind({})
