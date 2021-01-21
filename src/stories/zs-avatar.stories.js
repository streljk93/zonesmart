import ZsAvatar from '@/components/ui/zs-avatar'

export default {
    title: 'Avatars',
    component: ZsAvatar,
}

const Template = () => ({
    components: {ZsAvatar},
    template: `
        <zs-avatar
            src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        />
    `,
})

export const Default = Template.bind({})
