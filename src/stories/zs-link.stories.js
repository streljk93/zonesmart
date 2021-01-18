import ZsLink from '@/components/ui/zs-link'

export default {
    title: 'Links',
    component: ZsLink,
}

const Template = () => ({
    components: {ZsLink},
    template: `
        <zs-link to="/home">Зарегистрироваться</zs-link>
    `,
})

export const Default = Template.bind({})
