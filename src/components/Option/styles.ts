import styled from 'styled-components/native'

import { OptionsProps } from '.'

export const OptionContainer = styled.TouchableOpacity<OptionsProps>`
  padding: 5px;
  margin: 10px 15px;

  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.actived ? '#395FFE' : '#0c0c0c'};
`

export const OptionTitle = styled.Text`
  color: white;
  font-family: 'Nunito_700Bold';
  font-size: 14px;
`