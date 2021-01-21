import ZsPagination from '@/components/ui/zs-pagination'

export default {
    title: 'Paginations',
    component: ZsPagination,
}

const Template = () => ({
    components: {ZsPagination},
    data() {
       return {
           current_page: 1,
       }
    },
    methods: {
       handleChangeCurrent(v) {
           console.warn(v)
       }
    },
    template: `
        <zs-pagination />
    `
})

export const Default = Template.bind({})
