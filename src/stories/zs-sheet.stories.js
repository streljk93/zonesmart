import ZsSheet from '@/components/ui/zs-sheet'

export default {
    title: 'Sheets',
    component: ZsSheet,
}

const Template = () => ({
    components: {ZsSheet},
    template: `
        <zs-sheet style="width: 453px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur distinctio enim et incidunt ipsum laborum molestias nobis odit praesentium quas quisquam quo quos reiciendis temporibus totam, veniam voluptas voluptate.
        </zs-sheet>
    `,
})

export const Default = Template.bind({})
