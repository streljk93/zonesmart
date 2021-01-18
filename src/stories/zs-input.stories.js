import ZsInput from '@/components/zs-input';

export default {
    title: 'Controls/Input',
    component: ZsInput,
    argTypes: {
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
            label="E-mail или телефон"
            type="password"
            error_message="Введены неверные данные"
            @input="handleInput"
        ></zs-input>
    `
})

export const Default = Template.bind({});
