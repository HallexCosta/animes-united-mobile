import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { GenreContainer, GenreTitle, GenreContainerView } from './styles'

export interface GenreProps extends TouchableOpacityProps {
  name: string
  actived: boolean
}

export function Genre({ name, actived, onPress }: GenreProps): JSX.Element {
  return (
    <GenreContainer actived={actived} name={name} onPress={onPress}>
      <GenreTitle actived={actived} name={name}>
        {name}
      </GenreTitle>
    </GenreContainer>
  )
}
