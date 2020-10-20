import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { NavigateContainer, NavigateText } from './styles'

type FeatherOptions = {
  name: string
  size: number
  color: string
}

export interface NavigateProps extends TouchableOpacityProps {
  name: string
  actived: boolean
  featherOptions: FeatherOptions
}

export function Navigate({
  name,
  actived,
  onPress,
  featherOptions
}: NavigateProps): JSX.Element {
  return (
    <NavigateContainer onPress={onPress}>
      <Feather
        name={featherOptions.name}
        size={featherOptions.size}
        color={featherOptions.color}
      />
      <NavigateText
        name={name}
        featherOptions={featherOptions}
        actived={actived}
      >
        {name}
      </NavigateText>
    </NavigateContainer>
  )
}
