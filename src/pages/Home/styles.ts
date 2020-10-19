import styled from 'styled-components/native'

import { HomeProps } from './index'

export const Container = styled.View`
  flex: 1;
  background: #0c0c0c;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;
  margin-right: 15px;

  margin-left: 15px;
`

export const Title = styled.Text`
  font-family: 'Nunito_900Black';
  color: #f9f8f7;
  font-size: 32px;
  line-height: 50px;
`

export const CategoriesContainer = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 15px;
`

export const Category = styled.TouchableOpacity<HomeProps>`
  border-style: solid;
  border-bottom-width: ${props => (props.categoryActived ? '2px' : '0')};

  border-bottom-color: ${props => (props.categoryActived ? '#0C1EDF' : '#000')};

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

export const Main = styled.ScrollView`
  width: 100%;
  height: 75%;

  margin-left: 15px;
`

export const AnimesContainer = styled.ScrollView`
  flex-direction: row;
`

export const Anime = styled.View`
  margin-right: 15px;
`

export const AnimeTitle = styled.Text`
  font-family: 'Nunito_700Bold';
  margin-top: 10px;
  color: #f9f8f7;
  font-size: 14px;
`

export const AnimeDescription = styled.Text`
  font-family: 'Nunito_300Light';
  color: #444444ee;
  font-size: 12px;

  margin-top: 5px;
`

export const SubTitleLastEpisodieTitle = styled.Text`
  margin-top: 35px;
  margin-bottom: 15px;

  font-family: 'Nunito_700Bold';
  color: #f9f8f7;
  font-size: 25px;
`

export const LastEpisodiesContainer = styled.ScrollView``

export const LastEpisodie = styled.View`
  margin-right: 15px;
`

export const LastEpisodieImage = styled.Image`
  width: 135px;
  height: 80px;

  opacity: 0.4;
`

export const LastEpisodieDescription = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 12px;
  position: absolute;
  color: #f9f8f7;
  bottom: 30%;
  margin-left: 10px;
`

export const LastEpisodieAnimeName = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 12px;
  position: absolute;
  color: #f9f8f7;
  bottom: 10%;
  margin-left: 10px;
`

export const SubTitleGenresTitle = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #f9f8f7;
  font-size: 25px;
  line-height: 50px;

  margin-top: 10px;
`

export const GenresContainer = styled.View`
  flex-direction: row;

  margin-bottom: 25px;
`

export const Genre = styled.TouchableOpacity<HomeProps>`
  background: ${props => (props.genreActived ? '#3c5edf' : '#0c0e15')};

  margin-right: 12px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`

export const GenreTitle = styled.Text<HomeProps>`
  color: ${props => (props.genreActived ? '#f9f8f7' : '#444444')};

  font-family: 'Nunito_400Regular';
  font-size: 14px;

  margin: 5px 10px;
`

export const Footer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  background: #0c0e15;

  align-items: center;
  justify-content: space-around;

  border-radius: 8px;
`

export const NavigateContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`

export const NavigateText = styled.Text<HomeProps>`
  color: ${props => (props.navigateActived ? '#3c5edf' : '#222222')};
  font-size: 12px;
`
