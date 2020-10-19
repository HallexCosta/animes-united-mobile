import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import {
  // eslint-disable-next-line camelcase
  Nunito_300Light,
  // eslint-disable-next-line camelcase
  Nunito_400Regular,
  // eslint-disable-next-line camelcase
  Nunito_600SemiBold,
  // eslint-disable-next-line camelcase
  Nunito_700Bold,
  // eslint-disable-next-line camelcase
  Nunito_900Black
} from '@expo-google-fonts/nunito'

import { AppRoutes } from './src/routes'

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black
  })

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Charging....</Text>
      </View>
    )
  }

  return (
    <>
      <AppRoutes />

      <StatusBar barStyle="light-content" />
    </>
  )
}
