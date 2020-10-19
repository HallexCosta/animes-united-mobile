import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { CategoryContainer, CategoryTitle } from './styles'

export interface Props extends TouchableOpacityProps {
  name: string
  actived: boolean
}

export function Category({ name, actived }: Props): JSX.Element {
  return (
    <CategoryContainer actived={actived}>
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryContainer>
  )
}
