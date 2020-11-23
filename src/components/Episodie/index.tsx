import { Feather } from "@expo/vector-icons"
import { Icon } from "@expo/vector-icons/build/createIconSet"
import React from 'react'
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

import {
  EpisodieContainer,
  EpisodieImage,
  EpisodieTitle,
  EpisodieDetail,
  EpisodieNumber,
  PlayCircleIconContainer
} from './styles'

export interface EpisodieProps extends TouchableOpacityProps {
  title: string
  number: number
  image: ImageSourcePropType | string
  focused: boolean
}

export function Episodie({
  title,
  number,
  image,
  focused,
  ...rest
}: EpisodieProps): JSX.Element {
  return (
    <EpisodieContainer
      {...rest}
      activeOpacity={.65}
    >
      <EpisodieImage
        style={{ 
          opacity: focused ? .45 : 1
        }}
        source={typeof image !== 'string'  ? image : { uri: image }}
      />
      <EpisodieDetail>
        <EpisodieTitle>{title}</EpisodieTitle>
        <EpisodieNumber>Ep - {number}</EpisodieNumber>
      </EpisodieDetail>
      
      {focused && (
        <PlayCircleIconContainer>
          <Feather name="play-circle" size={50} color="#eeeeee66" />
        </PlayCircleIconContainer>
      )}
    </EpisodieContainer>
  )
}
