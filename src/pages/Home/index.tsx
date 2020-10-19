import React, { useState } from 'react'
import { Text, Image } from 'react-native'

import { Feather } from '@expo/vector-icons'

import animeImg from '../../assets/images/darling-in-the-fran-xx.jpg'
import animeThumbnailImg from '../../assets/images/anime-gataris-thumbnail.png'

import {
  Container,
  Header,
  Title,
  CategoriesContainer,
  Category,
  CategoryTitle,
  AnimesContainer,
  Anime,
  AnimeTitle,
  AnimeDetail,
  SubTitleLastEpisodieTitle,
  LastEpisodiesContainer,
  LastEpisodie,
  SubTitleGenresTitle,
  GenresContainer,
  Genre,
  GenreTitle,
  Footer,
  NavigateContainer,
  NavigateText
} from './styles'

type CategoriesProps = {
  all: boolean
  tv: boolean
  movie: boolean
  ova: boolean
  shoujo: boolean
  academy: boolean
}

type GenresProps = {
  action: boolean
  adventure: boolean
  harem: boolean
  romance: boolean
}

type NavigatesProps = {
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
    Object.keys(categories).map(categoryName => {
      if (categoryName === currentCategory) {
        setCategories({
          ...categories,
          [currentCategory]: true
        })
      } else {
        setCategories({
          ...categories,
          all: false,
          [categoryName]: false,
          [currentCategory]: true
        })
      }
    })
  }

  function handleActiveGenreButton(currentGenre: string) {
    Object.keys(genres).map(genreName => {
      if (genreName === currentGenre) {
        setGenres({
          ...genres,
          [currentGenre]: true
        })
      } else {
        setGenres({
          ...genres,
          action: false,
          [genreName]: false,
          [currentGenre]: true
        })
      }
    })
  }

  function handleActiveNavigateButton(curretNavigate: string) {
    Object.keys(navigates).map(navigateName => {
      if (navigateName === curretNavigate) {
        setNavigates({
          ...navigates,
          [curretNavigate]: true
        })
      } else {
        setNavigates({
          ...navigates,
          home: false,
          [navigateName]: false,
          [curretNavigate]: true
        })
      }
    })
  }

  return (
    <Container>
      <Header>
        <Title>Browse</Title>
        <Feather name="search" size={24} color="#fff" />
      </Header>

      <CategoriesContainer showsHorizontalScrollIndicator={false} horizontal>
        <Category
          onPress={() => handleActiveCategoryButton('all')}
          categoryActived={categories.all}
        >
          <CategoryTitle>All</CategoryTitle>
        </Category>
        <Category
          onPress={() => handleActiveCategoryButton('tv')}
          categoryActived={categories.tv}
        >
          <CategoryTitle>TV</CategoryTitle>
        </Category>
        <Category
          onPress={() => handleActiveCategoryButton('movie')}
          categoryActived={categories.movie}
        >
          <CategoryTitle>Movie</CategoryTitle>
        </Category>
        <Category
          onPress={() => handleActiveCategoryButton('ova')}
          categoryActived={categories.ova}
        >
          <CategoryTitle>Ova</CategoryTitle>
        </Category>
        <Category
          onPress={() => handleActiveCategoryButton('shoujo')}
          categoryActived={categories.shoujo}
        >
          <CategoryTitle>Shoujo</CategoryTitle>
        </Category>
        <Category
          onPress={() => handleActiveCategoryButton('academy')}
          categoryActived={categories.academy}
        >
          <CategoryTitle>Academy</CategoryTitle>
        </Category>
      </CategoriesContainer>

      <AnimesContainer showsHorizontalScrollIndicator={false} horizontal>
        <Anime>
          <Image style={{ width: 135, height: 170 }} source={animeImg} />
          <AnimeTitle>Owarimonogatari</AnimeTitle>
          <AnimeDetail>2018 - 24 eps</AnimeDetail>
        </Anime>
        <Anime>
          <Image style={{ width: 135, height: 170 }} source={animeImg} />
          <AnimeTitle>Owarimonogatari</AnimeTitle>
          <AnimeDetail>2018 - 24 eps</AnimeDetail>
        </Anime>
        <Anime>
          <Image style={{ width: 135, height: 170 }} source={animeImg} />
          <AnimeTitle>Owarimonogatari</AnimeTitle>
          <AnimeDetail>2018 - 24 eps</AnimeDetail>
        </Anime>
        <Anime>
          <Image style={{ width: 135, height: 170 }} source={animeImg} />
          <AnimeTitle>Owarimonogatari</AnimeTitle>
          <AnimeDetail>2018 - 24 eps</AnimeDetail>
        </Anime>
      </AnimesContainer>

      <SubTitleLastEpisodieTitle>
        Last <Text style={{ color: '#0C1EDF' }}>Episode</Text>
      </SubTitleLastEpisodieTitle>

      <LastEpisodiesContainer showsHorizontalScrollIndicator={false} horizontal>
        <LastEpisodie>
          <Image
            source={animeThumbnailImg}
            style={{ width: 135, height: 80 }}
          />
          <Text>EP 20</Text>
        </LastEpisodie>
        <LastEpisodie>
          <Image
            source={animeThumbnailImg}
            style={{ width: 135, height: 80 }}
          />
          <Text>EP 20</Text>
        </LastEpisodie>
        <LastEpisodie>
          <Image
            source={animeThumbnailImg}
            style={{ width: 135, height: 80 }}
          />
          <Text>EP 20</Text>
        </LastEpisodie>
        <LastEpisodie>
          <Image
            source={animeThumbnailImg}
            style={{ width: 135, height: 80 }}
          />
          <Text>EP 20</Text>
        </LastEpisodie>
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

      <Footer>
        <NavigateContainer onPress={() => handleActiveNavigateButton('home')}>
          <Feather
            name="home"
            size={20}
            color={navigates.home ? '#0c1edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.home}>Home</NavigateText>
        </NavigateContainer>
        <NavigateContainer onPress={() => handleActiveNavigateButton('browse')}>
          <Feather
            name="folder"
            size={20}
            color={navigates.browse ? '#0c1edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.browse}>Browse</NavigateText>
        </NavigateContainer>
        <NavigateContainer
          onPress={() => handleActiveNavigateButton('schedule')}
        >
          <Feather
            name="calendar"
            size={20}
            color={navigates.schedule ? '#0c1edf' : '#222222'}
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
            color={navigates.library ? '#0c1edf' : '#222222'}
          />
          <NavigateText navigateActived={navigates.library}>
            Library
          </NavigateText>
        </NavigateContainer>
      </Footer>
    </Container>
  )
}
