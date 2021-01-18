import ZsInput from '@/components/ui/zs-input';

export default {
    title: 'Controls/Input',
    component: ZsInput,
    argTypes: {
        label: {
            control: 'text',
            defaultValue: 'E-mail или телефон',
        },
        is_password: {
            control: {
                type: 'inline-radio',
                options: [true, false],
            },
            defaultValue: false,
        },
        show_error: {
            control: {
                type: 'inline-radio',
                options: [true, false],
            },
            defaultValue: false,
        },
        error_message: {
            control: 'text',
            defaultValue: 'Введены неверные данные',
        },
        handleInput: {
            action: 'input',
        },
    },
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {ZsInput},
    data() {
       return {
           text: 'hello',
       }
    },
    template: `
        <zs-input
            v-model="text"
            :label="label"
            :type="is_password ? 'password' : 'text'"
            :error_message="show_error ? error_message : ''"
            @input="handleInput"
        ></zs-input>
    `
})

export const Default = Template.bind({})
