import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  AnimeContainer,
  AnimeImage,
  AnimeTitle,
  AnimeDescription
} from './styles'

type AnimeProps = {
  name: string
  description: string
  image: ImageSourcePropType
}

export function Anime({ name, description, image }: AnimeProps): JSX.Element {
  return (
    <AnimeContainer>
      <AnimeImage source={image} />
      <AnimeTitle>{name}</AnimeTitle>
      <AnimeDescription>{description}</AnimeDescription>
    </AnimeContainer>
  )
}
