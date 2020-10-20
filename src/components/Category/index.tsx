import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { CategoryContainer, CategoryTitle } from './styles'

export interface CategoryProps extends TouchableOpacityProps {
  name: string
  actived: boolean
}

export function Category({
  name,
  actived,
  onPress
}: CategoryProps): JSX.Element {
  return (
    <CategoryContainer name={name} actived={actived} onPress={onPress}>
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryContainer>
  )
}
