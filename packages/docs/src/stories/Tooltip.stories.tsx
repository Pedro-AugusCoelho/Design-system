import { StoryObj, Meta} from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@ignite-ui/react'
import { space } from '@ignite-ui/tokens'

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        text: 'Tooltip Test',
        children: <Button variant="primary">Hover here</Button>
    },
    decorators: [
        (Story) => {
            return  (
                <div style={{ padding: space[10] }}>{Story()}</div>
            )
        }
    ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
    args: {}
}