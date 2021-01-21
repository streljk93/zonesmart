import ZsExpandTransition from '@/components/ui/zs-expand-transition'
import ZsButton from '@/components/ui/zs-button'
import ZsSheet from '@/components/ui/zs-sheet'

export default {
    title: 'ExpandTransition',
    component: ZsExpandTransition,
}

const Template = () => ({
    components: {ZsExpandTransition, ZsButton, ZsSheet},
    data() {
        return {
            value: false,
        }
    },
    template: `
        <div>
            <zs-button @click="value = !value">
                {{value ? 'закрыть' : 'открыть'}}
            </zs-button>
            <zs-expand-transition v-model="value">
                <zs-sheet>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloremque iste nulla quia tempora. Beatae natus perferendis quia! Aspernatur distinctio esse eum excepturi impedit itaque, nisi non numquam ratione repudiandae!
                </zs-sheet>
            </zs-expand-transition>
        </div>
    `,
})

export const Default = Template.bind({})
