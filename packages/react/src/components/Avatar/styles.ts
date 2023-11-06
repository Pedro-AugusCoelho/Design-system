import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '$12',
  height: '$12',
  borderRadius: '$full',
  objectFit: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '$12',
  height: '$12',
  borderRadius: '$full',
  objectFit: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
