import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../pages/Home'
import { View } from 'react-native'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
  return <View />
}

export { AppStack }
