import styled from 'styled-components/native'
import { OptionsProps } from '.'

// Margin Left -> 10px
// Margin Right -> 10px

export const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;

  background-color: #0c0c0c;
`

export const HeaderBackground = styled.ImageBackground`
  width: 100%;
  opacity: .4;
  height: 30%;
  position: absolute;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 50px;
`

export const AnimeImageContainer = styled.View``

export const AnimeImage = styled.Image`
  width: 100px;
  height: 150px;
  margin-left: 10px;
`

export const AnimeInfo = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;

  margin: 0 15px;
  margin-top: 25px; 
`

export const AnimeInfoTitle = styled.Text`
  width: 150px;
  font-family: 'Nunito_700Bold';
  color: white;
  font-size: 16px;
`

export const AnimeInfoDescriptionContainer = styled.View`
  margin-top: 20px;
`

export const AnimeInfoDescriptionScoreContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

export const AnimeInfoDescriptionScoreTitle = styled.Text`
  color: #f9f8f788;
  font-size: 10px;
  color: #f9f8f788;
  font-family: 'Nunito_400Regular';
`

export const AnimeInfoDescriptionScore = styled.Text`
  color: white;
  font-size: 10px;
  font-family: 'Nunito_700Bold';
`

export const AnimeInfoDescriptionQuailityStreamingContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

export const AnimeInfoDescriptionQuailityStreamingTitle = styled.Text`
  color: #f9f8f788;
  font-size: 10px;
  font-family: 'Nunito_400Regular';
`

export const AnimeInfoDescriptionQuailityStreaming = styled.Text`
  color: white;
  font-size: 10px;
  font-family: 'Nunito_700Bold';
`

export const AnimeInfoDescriptionStatusContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

export const AnimeInfoDescriptionStatusTitle = styled.Text`
  color: #f9f8f788;
  font-size: 10px;
  font-family: 'Nunito_400Regular';
`

export const AnimeInfoDescriptionStatus = styled.Text`
  color: white;
  font-size: 10px;
  font-family: 'Nunito_700Bold';
`

export const AnimeInfoDescriptionTotalEpisodieContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

export const AnimeInfoDescriptionTotalEpisodieTitle = styled.Text`
  color: #f9f8f788;
  font-size: 10px;
  font-family: 'Nunito_400Regular';
`

export const AnimeInfoDescriptionTotalEpisodie = styled.Text`
  color: white;
  font-size: 10px;
  font-family: 'Nunito_700Bold';
`

export const Main = styled.View`
  flex: 1;
  width: 100%;
  height: 75%;
`

export const OptionContainer = styled.View`
  flex-direction: row;

  margin-top: 25px;
  margin-bottom: 5px;
`

export const AnimeDescriptionContainer = styled.View`
  margin-left: 10px;
  margin-bottom: 5px;
`

export const AnimeDescription = styled.Text`
  color: #ffffee;
  font-family: 'Nunito_400Regular';
  font-size: 14px;
  line-height: 20px;
`

export const MoreButton = styled.TouchableOpacity`
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-top: 2px;
  margin-bottom: 5px;
`

export const MoreButtonTitle = styled.Text`
  color: #b7b7b7;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 3px;
`

export const EpisodiesContainer = styled.ScrollView`
  margin-top: 30px;
  margin: 0 10px;

  height: 250px;
`

export const FavoriteButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #365AF1;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const FavoriteButtonText = styled.Text`
  color: white;
  font-family: 'Nunito_900Black';

  font-size: 18px;

  margin-right: 8px;
`