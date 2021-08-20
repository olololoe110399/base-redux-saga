import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { TabsIcon } from 'components/common'
import { isIOS } from 'constants/Common'
import HomeContainer from 'containers/home'
import { spacings } from 'styles/theme'
import { MainRootStackParamList } from './routes'

const Stack = createStackNavigator<MainRootStackParamList>()
const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  )
}

const ChatScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Chat" component={HomeContainer} />
    </Stack.Navigator>
  )
}

const SocialNetworkScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SocialNetwork" component={HomeContainer} />
    </Stack.Navigator>
  )
}

const ProfileScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={HomeContainer} />
    </Stack.Navigator>
  )
}

const BottomTabsPhone = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabsIcon name={route.name} focused={focused} />
        )
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          paddingTop: isIOS ? spacings.normal * 0.8 : spacings.normal * 0.2,
          height: isIOS ? spacings.normal * 4 : spacings.normal * 3
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="SocialNetwork" component={SocialNetworkScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="BottomTab" component={BottomTabsPhone} />
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="Chat" component={HomeContainer} />
      <Stack.Screen name="SocialNetwork" component={HomeContainer} />
      <Stack.Screen name="Profile" component={HomeContainer} />
    </Stack.Navigator>
  )
}
