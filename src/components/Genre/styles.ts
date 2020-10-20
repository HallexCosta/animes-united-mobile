import styled from 'styled-components/native'

import { GenreProps } from '.'

export const GenreContainer = styled.TouchableOpacity<GenreProps>`
  background: ${props => (props.actived ? '#3c5edf' : '#0c0e15')};

  margin-right: 12px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`

export const GenreTitle = styled.Text<GenreProps>`
  color: ${props => (props.actived ? '#f9f8f7' : '#444444')};

  font-family: 'Nunito_400Regular';
  font-size: 14px;

  margin: 5px 10px;
`
