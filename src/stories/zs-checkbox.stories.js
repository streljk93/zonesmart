import ZsCheckbox from '@/components/ui/zs-checkbox'

export default {
    title: 'Controls/Checkbox',
    component: ZsCheckbox,
}

const Template = () => ({
    components: {ZsCheckbox},
    data() {
        return {
            checked: true,
        }
    },
    template: `
        <zs-checkbox v-model="checked" />
    `,
})

export const Default = Template.bind({})
