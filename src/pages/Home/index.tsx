import React, { useState } from 'react'
import { Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { Utils } from '../../utils'

import { Genre } from '../../components/Genre'
import { Category } from '../../components/Category'
import { Anime } from '../../components/Anime'
import { LastEpisodie } from '../../components/LastEpisodie'
import { Navigate } from '../../components/Navigate'

import animeImg from '../../assets/images/darling-in-the-fran-xx.jpg'
import animeThumbnailImg from '../../assets/images/anime-gataris-thumbnail.png'

import {
  Container,
  Header,
  Title,
  Main,
  CategoriesContainer,
  AnimesContainer,
  SubTitleLastEpisodieTitle,
  LastEpisodiesContainer,
  SubTitleGenresTitle,
  GenresContainer,
  Footer
} from './styles'

export type CategoriesStateProps = {
  all: boolean
  tv: boolean
  movie: boolean
  ova: boolean
  shoujo: boolean
  academy: boolean
}

export type GenresStateProps = {
  action: boolean
  adventure: boolean
  harem: boolean
  romance: boolean
}

export type NavigatesStateProps = {
  home: boolean
  browse: boolean
  schedule: boolean
  library: boolean
}

export function Home(): JSX.Element {
  // State effect
  const [categories, setCategories] = useState<CategoriesStateProps>({
    all: true,
    tv: false,
    movie: false,
    ova: false,
    shoujo: false,
    academy: false
  })

  const [genres, setGenres] = useState<GenresStateProps>({
    action: true,
    adventure: false,
    harem: false,
    romance: false
  })

  const [navigates, setNavigates] = useState<NavigatesStateProps>({
    home: true,
    browse: false,
    schedule: false,
    library: false
  })

  function handleActiveCategoryButton(currentCategory: string) {
    setCategories(
      Utils.activeButton<CategoriesStateProps>(categories, currentCategory)
    )
  }

  function handleActiveGenreButton(currentGenre: string) {
    setGenres(Utils.activeButton<GenresStateProps>(genres, currentGenre))
  }

  function handleActiveNavigateButton(curretNavigate: string) {
    setNavigates(
      Utils.activeButton<NavigatesStateProps>(navigates, curretNavigate)
    )
  }

  return (
    <Container>
      <Header>
        <Title>Browse</Title>
        <Feather name="search" size={24} color="#fff" />
      </Header>

      <Main>
        <CategoriesContainer showsHorizontalScrollIndicator={false} horizontal>
          <Category
            name={'All'}
            actived={categories.all}
            onPress={() => handleActiveCategoryButton('all')}
          />
          <Category
            name={'TV'}
            actived={categories.tv}
            onPress={() => handleActiveCategoryButton('tv')}
          />
          <Category
            name={'Movie'}
            actived={categories.movie}
            onPress={() => handleActiveCategoryButton('movie')}
          />
          <Category
            name={'Ova'}
            actived={categories.ova}
            onPress={() => handleActiveCategoryButton('ova')}
          />
          <Category
            name={'Shoujo'}
            actived={categories.shoujo}
            onPress={() => handleActiveCategoryButton('shoujo')}
          />
          <Category
            name={'Academy'}
            actived={categories.academy}
            onPress={() => handleActiveCategoryButton('academy')}
          />
        </CategoriesContainer>

        <AnimesContainer showsHorizontalScrollIndicator={false} horizontal>
          <Anime
            name={'Owarimonogatari'}
            description={'2018 - 24 eps'}
            image={animeImg}
          />
          <Anime
            name={'Owarimonogatari'}
            description={'2018 - 24 eps'}
            image={animeImg}
          />
          <Anime
            name={'Owarimonogatari'}
            description={'2018 - 24 eps'}
            image={animeImg}
          />
          <Anime
            name={'Owarimonogatari'}
            description={'2018 - 24 eps'}
            image={animeImg}
          />
          <Anime
            name={'Owarimonogatari'}
            description={'2018 - 24 eps'}
            image={animeImg}
          />
        </AnimesContainer>

        <SubTitleLastEpisodieTitle>
          Last <Text style={{ color: '#1c5edf' }}>Episode</Text>
        </SubTitleLastEpisodieTitle>

        <LastEpisodiesContainer
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <LastEpisodie
            description={'EP - 20 Realeased'}
            name={'Aldnoah Zero'}
            image={animeThumbnailImg}
          />
          <LastEpisodie
            description={'EP - 20 Realeased'}
            name={'Aldnoah Zero'}
            image={animeThumbnailImg}
          />
          <LastEpisodie
            description={'EP - 20 Realeased'}
            name={'Aldnoah Zero'}
            image={animeThumbnailImg}
          />
          <LastEpisodie
            description={'EP - 20 Realeased'}
            name={'Aldnoah Zero'}
            image={animeThumbnailImg}
          />
          <LastEpisodie
            description={'EP - 20 Realeased'}
            name={'Aldnoah Zero'}
            image={animeThumbnailImg}
          />
        </LastEpisodiesContainer>

        <SubTitleGenresTitle>Genres</SubTitleGenresTitle>

        <GenresContainer>
          <Genre
            name={'Action'}
            onPress={() => handleActiveGenreButton('action')}
            actived={genres.action}
          />
          <Genre
            name={'Adventure'}
            onPress={() => handleActiveGenreButton('adventure')}
            actived={genres.adventure}
          />
          <Genre
            name={'Harem'}
            onPress={() => handleActiveGenreButton('harem')}
            actived={genres.harem}
          />
          <Genre
            name={'Romance'}
            onPress={() => handleActiveGenreButton('romance')}
            actived={genres.romance}
          />
        </GenresContainer>
      </Main>

      <Footer>
        <Navigate
          name={'Home'}
          actived={navigates.home}
          featherOptions={{
            name: 'home',
            color: navigates.home ? '#3c5edf' : '#222222',
            size: 20
          }}
          onPress={() => handleActiveNavigateButton('home')}
        />
        <Navigate
          name={'Browse'}
          actived={navigates.browse}
          featherOptions={{
            name: 'folder',
            color: navigates.browse ? '#3c5edf' : '#222222',
            size: 20
          }}
          onPress={() => handleActiveNavigateButton('browse')}
        />
        <Navigate
          name={'Schedule'}
          actived={navigates.schedule}
          featherOptions={{
            name: 'calendar',
            color: navigates.schedule ? '#3c5edf' : '#222222',
            size: 20
          }}
          onPress={() => handleActiveNavigateButton('schedule')}
        />
        <Navigate
          name={'Library'}
          actived={navigates.library}
          featherOptions={{
            name: 'user',
            color: navigates.library ? '#3c5edf' : '#222222',
            size: 20
          }}
          onPress={() => handleActiveNavigateButton('library')}
        />
      </Footer>
    </Container>
  )
}
