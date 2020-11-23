import styled from 'styled-components/native'
import { EpisodieProps } from "."

export const EpisodieContainer = styled.TouchableOpacity`
  width: 47%;
  height: 120px;

  align-items: center;

  margin-bottom: 5px;
`

export const EpisodieDetail = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;
  justify-content: space-between;
`

export const EpisodieImage = styled.Image`
  width: 100%;
  height: 100px;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const EpisodieTitle = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: white;
  font-size: 11px;
`

export const EpisodieNumber = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: white;
  font-size: 11px;
`

export const PlayCircleIconContainer = styled.View`
  position: absolute;
  top: 22%;
`