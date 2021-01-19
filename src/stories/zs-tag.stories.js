import ZsTag from '@/components/ui/zs-tag'

export default {
    title: 'Tags',
    component: ZsTag,
}

const Template = () => ({
    components: {ZsTag},
    template: `
        <zs-tag>ebay</zs-tag>
    `,
})

export const Default = Template.bind({})
