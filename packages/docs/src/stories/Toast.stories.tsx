import { StoryObj, Meta} from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { useState } from 'react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        title: 'Scheduling made',
        description: 'Monday, January 23rd at 2pm',
      },
      decorators: [
        (_, { allArgs }) => {
          const [open, setOpen] = useState(false)
    
          const ToggleToast = (newState: boolean) => {
            setOpen(newState)
          }
    
          return (
            <>
              <Button size="sm" onClick={() => ToggleToast(true)}>
                Add
              </Button>
              <Toast {...allArgs} open={open} onOpenChange={ToggleToast} />
            </>
          )
        },
      ],
    
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}