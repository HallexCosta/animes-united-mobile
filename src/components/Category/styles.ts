import styled from 'styled-components/native'

import { Props } from '.'

export const CategoryContainer = styled.TouchableOpacity<Props>`
  border-style: solid;
  border-bottom-width: ${props => (props.actived ? '2px' : '0')};

  border-bottom-color: ${props => (props.actived ? '#0C1EDF' : '#000')};

  margin-right: 15px;

  align-items: center;
  justify-content: center;
`

export const CategoryTitle = styled.Text`
  color: #f9f8f7;
  font-size: 14px;
  line-height: 45px;
  font-family: 'Nunito_700Bold';

  margin: 0 15px;
`
