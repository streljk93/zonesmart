import ZsButton from '@/components/ui/zs-button';

export default {
    title: 'Buttons',
    component: ZsButton,
    argTypes: {
        theme: {
            control: {
                type: 'inline-radio',
                options: ['accent', 'primary'],
            },
            defaultValue: 'accent',
        },
        size: {
            control: {
                type: 'inline-radio',
                options: ['sm', 'md'],
            },
            defaultValue: 'md',
        },
        loading: {
            control: 'boolean',
            defaultValue: false,
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {ZsButton},
    template: `
        <zs-button
            :theme="theme"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            кнопка
        </zs-button>
    `
})

export const Default = Template.bind({});

export const Icon = () => ({
    components: {ZsButton},
    template: `
        <zs-button type="icon">
            icon-arrow-right-copy-1
        </zs-button>
    `
})
