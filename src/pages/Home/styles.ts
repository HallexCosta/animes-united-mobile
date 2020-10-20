import styled from 'styled-components/native'

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

export const Main = styled.ScrollView`
  width: 100%;
  height: 75%;

  margin-left: 15px;
`

export const AnimesContainer = styled.ScrollView`
  flex-direction: row;
`

export const SubTitleLastEpisodieTitle = styled.Text`
  margin-top: 35px;
  margin-bottom: 15px;

  font-family: 'Nunito_700Bold';
  color: #f9f8f7;
  font-size: 25px;
`

export const LastEpisodiesContainer = styled.ScrollView``

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

export const Footer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  background: #0c0e15;

  align-items: center;
  justify-content: space-around;

  border-radius: 8px;
`
