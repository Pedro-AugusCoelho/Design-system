import {
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastProvider,
  ToastClose,
} from '@radix-ui/react-toast'

import { ToastRoot } from './styles'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({
  description,
  title,
  onOpenChange,
  open,
  ...props
}: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={true}
        {...props}
        duration={1000000}
      >
        <div>
          <ToastTitle>
            <h2>{title}</h2>
          </ToastTitle>

          <ToastClose asChild>
            <X weight="bold" size={20} />
          </ToastClose>
        </div>

        <ToastDescription asChild>
          <span>{description}</span>
        </ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
