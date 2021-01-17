import ZsInput from '@/components/zs-input';

export default {
    title: 'Controls/Input',
    component: ZsInput,
    argTypes: {},
}

const Template = () => ({
    components: {ZsInput},
    language: 'pug',
    template: `
        <zs-input />
    `
})

export const Default = Template.bind({});
