import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'

import { 
  Container,
  HeaderBackground,
  Header,
  AnimeImageContainer,
  AnimeImage,
  AnimeInfo,
  AnimeInfoTitle,
  AnimeInfoDescriptionContainer,
  AnimeInfoDescriptionScoreContainer,
  AnimeInfoDescriptionScoreTitle,
  AnimeInfoDescriptionScore,

  AnimeInfoDescriptionQuailityStreamingContainer,
  AnimeInfoDescriptionQuailityStreamingTitle,
  AnimeInfoDescriptionQuailityStreaming,

  AnimeInfoDescriptionStatusContainer,
  AnimeInfoDescriptionStatusTitle,
  AnimeInfoDescriptionStatus,

  AnimeInfoDescriptionTotalEpisodieContainer,
  AnimeInfoDescriptionTotalEpisodieTitle,
  AnimeInfoDescriptionTotalEpisodie,

  Main,
  OptionContainer,

  AnimeDescriptionContainer,
  AnimeDescription,

  MoreButton,
  MoreButtonTitle,

  EpisodiesContainer,

  FavoriteButton,
  FavoriteButtonText
} from './styles'

import { Utils } from '../../utils'

//import headerBg from '../../assets/images/anime-detail-none-header-background.jpg'
import animeImg from '../../assets/images/darling-in-the-fran-xx.jpg'
import headerBg from '../../assets/images/904147.jpg'

import { Episodie } from '../../components/Episodie'
import { Option } from '../../components/Option'

export type OptionsStateProps = {
  synopsis: boolean
  franchise: boolean
  recomendations: boolean
}

type Episodie = { 
  number: number,
  focused: boolean
}

export function AnimeDetail(): JSX.Element {
  const [episodie, setEpisodie] = useState<number>(1)
  
  const [options, setOptions] = useState<OptionsStateProps>({
    synopsis: true,
    franchise: false,
    recomendations: false
  })

  function handleActiveOptionButton(currentOption: string) {
    const activeButtons = Utils.activeButton<OptionsStateProps>(options, currentOption)

    setOptions(activeButtons)
  }

  function handleSelectEpisodie(episodieSelected: number) {
    setEpisodie(episodieSelected)
  }

  return (
    <Container>

      <HeaderBackground source={headerBg} />

      <Header>
        <AnimeImageContainer>
          <AnimeImage source={animeImg} />
        </AnimeImageContainer>
        
        <AnimeInfo>
          <AnimeInfoTitle>Owarimonogatari 2nd Season</AnimeInfoTitle>

          <AnimeInfoDescriptionContainer>
            <AnimeInfoDescriptionScoreContainer>
              <AnimeInfoDescriptionScoreTitle>AVG.SCORE</AnimeInfoDescriptionScoreTitle>
              <AnimeInfoDescriptionScore>4.98/5</AnimeInfoDescriptionScore>
            </AnimeInfoDescriptionScoreContainer>

            <AnimeInfoDescriptionQuailityStreamingContainer>
              <AnimeInfoDescriptionQuailityStreamingTitle>QUALITY</AnimeInfoDescriptionQuailityStreamingTitle>
              <AnimeInfoDescriptionQuailityStreaming>HD</AnimeInfoDescriptionQuailityStreaming>
            </AnimeInfoDescriptionQuailityStreamingContainer>

            <AnimeInfoDescriptionStatusContainer>
              <AnimeInfoDescriptionStatusTitle>STATUS</AnimeInfoDescriptionStatusTitle>
              <AnimeInfoDescriptionStatus>{"Completed".toUpperCase()}</AnimeInfoDescriptionStatus>
            </AnimeInfoDescriptionStatusContainer>

            <AnimeInfoDescriptionTotalEpisodieContainer>
              <AnimeInfoDescriptionTotalEpisodieTitle>EPS</AnimeInfoDescriptionTotalEpisodieTitle>
              <AnimeInfoDescriptionTotalEpisodie>12</AnimeInfoDescriptionTotalEpisodie>
            </AnimeInfoDescriptionTotalEpisodieContainer>
          </AnimeInfoDescriptionContainer>
        </AnimeInfo>
      </Header>

      <Main>
        <OptionContainer>
          <Option 
            onPress={() => handleActiveOptionButton('synopsis')}
            actived={options.synopsis}
            name="Synopsis"
          />
          <Option 
            onPress={() => handleActiveOptionButton('franchise')}
            actived={options.franchise}
            name="Franchise"
          />
          <Option 
            onPress={() => handleActiveOptionButton('recomendations')}
            actived={options.recomendations}
            name="Recomendations"
          />
        </OptionContainer>

        <AnimeDescriptionContainer >
          <AnimeDescription>"In order for something to be obtained,
            something Alchemy is bound by this Law of equivalent Exchange-something the young brothers Edward</AnimeDescription>
            <MoreButton>
              <MoreButtonTitle>More</MoreButtonTitle>
              <Feather name="chevron-down" size={16} color="#b7b7b7" />
            </MoreButton>
        </AnimeDescriptionContainer>

        <EpisodiesContainer
          contentContainerStyle={{ 
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          {Array.from(Array(10).keys()).map(index => {
            const currentEpisodie = index + 1
            return (
              <Episodie
                key={index}
                title="Bouqouet"
                number={currentEpisodie}
                image="https://yayanimes.net/Miniaturas/2015/Charlotte/Charlotte01.jpg"
                onPress={() => handleSelectEpisodie(currentEpisodie)}
                focused={episodie === currentEpisodie ? true : false}
              />
            )
          })}
        </EpisodiesContainer>

        <FavoriteButton
          activeOpacity={.85}
        >
          <FavoriteButtonText>ADD TO LIST</FavoriteButtonText>
          <Feather name="plus" size={24} color="white" />
        </FavoriteButton>
      </Main>
    </Container>
  )
}

