import { BackIcon } from '@/icons'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BackButtonContainer } from './BackButton.styles'

export const BackButton = (props: TouchableOpacityProps) => {
  return (
    <BackButtonContainer {...props}>
        <BackIcon />
    </BackButtonContainer>
  )
}
