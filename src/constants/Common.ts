import { TransitionSpecs } from '@react-navigation/stack'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'
import { Platform } from 'react-native'

export enum PlatformOS {
  Android = 0,
  IOS = 1
}

export const isIOS = Platform.OS === 'ios'

export enum FormatDateType {
  YearMonthDate = 'YYYY/MM/DD',
  MonthDateYear = 'MM/DD/YYYY',
  DateTime = 'YYYY/MM/DD HH:mm'
}

export const AnimationConfig: TransitionSpec = {
  ...TransitionSpecs.TransitionIOSSpec,
  animation: 'spring',
  config: {
    stiffness: 600,
    damping: 200,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

export const smallDevice = 360
export const mediumDevice = 667
export const largeDevice = 735

export const GESTURE_SWIPE_CONFIG = {
  velocityThreshold: 0.2
}
