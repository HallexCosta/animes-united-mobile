import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  LastEpisodieContainer,
  LastEpisodieImage,
  LastEpisodieDescription,
  LastEpisodieAnimeName
} from './styles'

type LastEpisodieProps = {
  name: string
  description: string
  image: ImageSourcePropType
}

export function LastEpisodie({
  name,
  description,
  image
}: LastEpisodieProps): JSX.Element {
  return (
    <LastEpisodieContainer>
      <LastEpisodieImage source={image} />
      <LastEpisodieDescription>{description}</LastEpisodieDescription>
      <LastEpisodieAnimeName>{name}</LastEpisodieAnimeName>
    </LastEpisodieContainer>
  )
}
