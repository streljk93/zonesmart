import ZsTag from '@/components/ui/zs-tag'

export default {
    title: 'Tags',
    component: ZsTag,
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {ZsTag},
    template: `
        <zs-tag :type="type" :theme="theme">{{value}}</zs-tag>
    `,
})

export const Default = Template.bind({})
Default.args = {
    type: 'text',
    value: 'ebay',
    theme: 'accent',
}

export const Icon = Template.bind({})
Icon.args = {
    type: 'icon',
    value: 'icon-check-copy-1',
    theme: 'accent',
}
