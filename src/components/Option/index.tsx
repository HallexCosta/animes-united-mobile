import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
  OptionContainer,
  OptionTitle
} from './styles'

export interface OptionsProps extends TouchableOpacityProps {
  name: string
  actived: boolean
}

export function Option({ 
  actived,
  name,
  ...rest
}: OptionsProps): JSX.Element {
  return (
    <OptionContainer actived={actived} name={name} {...rest}>
      <OptionTitle>{name}</OptionTitle>
    </OptionContainer>
  )
}