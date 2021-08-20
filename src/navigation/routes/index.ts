import { StackNavigationProp } from '@react-navigation/stack'

// Root Stack

export type RootStackParamList = {
  Main: undefined
  Splash: undefined
}

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>

// Main Stack

export type MainRootStackParamList = {
  BottomTab: undefined
  Home: undefined
  Chat: undefined
  SocialNetwork: undefined
  Profile: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<
  MainRootStackParamList,
  'Home'
>

export type ChatScreenNavigationProp = StackNavigationProp<
  MainRootStackParamList,
  'Chat'
>

export type SocialNetworkScreenNavigationProp = StackNavigationProp<
  MainRootStackParamList,
  'SocialNetwork'
>

export type ProfileScreenNavigationProp = StackNavigationProp<
  MainRootStackParamList,
  'Profile'
>
