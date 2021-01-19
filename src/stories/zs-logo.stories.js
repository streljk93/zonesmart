import ZsLogo from '@/components/ui/zs-logo'

export default {
    title: 'Logo',
    component: ZsLogo,
}

const Template = () => ({
    components: {ZsLogo},
    template: `
        <zs-logo />
    `,
})

export const Default = Template.bind({})
