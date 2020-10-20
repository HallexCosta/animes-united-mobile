import styled from 'styled-components/native'

import { NavigateProps } from '.'

export const NavigateContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`

export const NavigateText = styled.Text<NavigateProps>`
  color: ${props => (props.actived ? '#3c5edf' : '#222222')};
  font-size: 12px;
`
