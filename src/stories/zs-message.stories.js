import ZsMessage from '@/components/ui/zs-message'

export default {
    title: 'Messages',
    component: ZsMessage,
    argTypes: {
        value: {
            control: 'boolean',
            defaultValue: true,
        },
        delay: {
            control: 'number',
            defaultValue: 2000,
        },
        type: {
            control: {
                type: 'inline-radio',
                options: ['info', 'success'],
            },
            defaultValue: 'info',
        },
    },
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {ZsMessage},
    data() {
        return {
            visibility: true,
        }
    },
    template: `
        <zs-message
            v-model="visibility"
            :type="type"
            :delay="delay"
        >
            Пароль от zonesmart@gmail.ru был успешно изменен
        </zs-message>
    `,
    watch: {
        value(v) {
            if (v) {
                this.visibility = v
            }
        },
    }
})

export const Default = Template.bind({})
