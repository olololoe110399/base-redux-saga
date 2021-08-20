import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from 'navigation/routes'
import React from 'react'
import SplashScreen from 'screens/SplashScreen'
// Screens Objects
import MainNavigation from './MainNavigation'

const Stack = createStackNavigator<RootStackParamList>()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
