import React, { useState } from 'react'
import { Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

import animeImg from '../../assets/images/darling-in-the-fran-xx.jpg'
import animeThumbnailImg from '../../assets/images/anime-gataris-thumbnail.png'

import { Utils } from '../../utils'

import { Category } from '../../components/Category'
import { Anime } from '../../components/Anime'
import { LastEpisodie } from '../../components/LastEpisodie'

import {
  Container,
  Header,
  Title,
  Main,
  CategoriesContainer,
  // Category,
  // CategoryTitle,
  AnimesContainer,
  // Anime,
  // AnimeTitle,
  // AnimeDescription,
  SubTitleLastEpisodieTitle,
  LastEpisodiesContainer,
  // LastEpisodieImage,
  // LastEpisodie,
  // LastEpisodieDescription,
  // LastEpisodieAnimeName,
  SubTitleGenresTitle,
  GenresContainer,
  Genre,
  GenreTitle,
  Footer,
  NavigateContainer,
  NavigateText
} from './styles'

export type CategoriesProps = {
  all: boolean
  tv: boolean
  movie: boolean
  ova: boolean
  shoujo: boolean
  academy: boolean
}

export type GenresProps = {
  action: boolean
  adventure: boolean
  harem: boolean
  romance: boolean
}

export type NavigatesProps = {
  home: boolean
  browse: boolean
  schedule: boolean
  library: boolean
}

export type HomeProps = {
  categoryActived?: boolean
  genreActived?: boolean
  navigateActived?: boolean
}

export function Home(): JSX.Element {
  // State effect
  const [categories, setCategories] = useState<CategoriesProps>({
    all: true,
    tv: false,
    movie: false,
    ova: false,
    shoujo: false,
    academy: false
  })

  const [genres, setGenres] = useState<GenresProps>({
    action: true,
    adventure: false,
    harem: false,
    romance: false
  })

  const [navigates, setNavigates] = useState<NavigatesProps>({
    home: true,
    browse: false,
    schedule: false,
    library: false
  })

  function handleActiveCategoryButton(currentCategory: string) {
    setCategories(
      Utils.activeButton<CategoriesProps>(categories, currentCategory)
    )
  }

  function handleActiveGenreButton(currentGenre: string) {
    setGenres(Utils.activeButton<GenresProps>(genres, currentGenre))
  }

  function handleActiveNavigateButton(curretNavigate: string) {
    setNavigates(Utils.activeButton<NavigatesProps>(navigates, curretNavigate))
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
            name="All"
            actived={categories.all}
            onPress={() => handleActiveCategoryButton('all')}
          />
          <Category
            name="TV"
            actived={categories.tv}
            onPress={() => handleActiveCategoryButton('tv')}
          />
          <Category
            name="Movie"
            actived={categories.movie}
            onPress={() => handleActiveCategoryButton('movie')}
          />
          <Category
            name="Ova"
            actived={categories.ova}
            onPress={() => handleActiveCategoryButton('ova')}
          />
          <Category
            name="Shoujo"
            actived={categories.shoujo}
            onPress={() => handleActiveCategoryButton('shoujo')}
          />
          <Category
            name="Academy"
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
            onPress={() => handleActiveGenreButton('action')}
            genreActived={genres.action}
          >
            <GenreTitle genreActived={genres.action}>Action</GenreTitle>
          </Genre>
          <Genre
            onPress={() => handleActiveGenreButton('adventure')}
            genreActived={genres.adventure}
          >
            <GenreTitle genreActived={genres.adventure}>Adventure</GenreTitle>
          </Genre>
          <Genre
            onPress={() => handleActiveGenreButton('harem')}
            genreActived={genres.harem}
          >
            <GenreTitle genreActived={genres.harem}>Harem</GenreTitle>
          </Genre>
          <Genre
            onPress={() => handleActiveGenreButton('romance')}
            genreActived={genres.romance}
          >
            <GenreTitle genreActived={genres.romance}>Romance</GenreTitle>
          </Genre>
        </GenresContainer>
      </Main>

      <Footer>
        <NavigateContainer onPress={() => handleActiveNavigateButton('home')}>
          <Feather
            name="home"
            size={20}
            color={navigates.home ? '#3c5edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.home}>Home</NavigateText>
        </NavigateContainer>
        <NavigateContainer onPress={() => handleActiveNavigateButton('browse')}>
          <Feather
            name="folder"
            size={20}
            color={navigates.browse ? '#3c5edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.browse}>Browse</NavigateText>
        </NavigateContainer>
        <NavigateContainer
          onPress={() => handleActiveNavigateButton('schedule')}
        >
          <Feather
            name="calendar"
            size={20}
            color={navigates.schedule ? '#3c5edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.schedule}>
            Schedule
          </NavigateText>
        </NavigateContainer>
        <NavigateContainer
          onPress={() => handleActiveNavigateButton('library')}
        >
          <Feather
            name="user"
            size={20}
            color={navigates.library ? '#3c5edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.library}>
            Library
          </NavigateText>
        </NavigateContainer>
      </Footer>
    </Container>
  )
}
