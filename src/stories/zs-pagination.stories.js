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
        <zs-pagination
            :current_page.sync="current_page"
            :total="180"
            @change-current="handleChangeCurrent"
        />
    `
})

export const Default = Template.bind({})
