import { Dimensions } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { isIOS } from './Common'

export const SCREEN = {
  HEIGHT: Dimensions.get('screen').height,
  WIDTH: Dimensions.get('screen').width
}

export const WINDOW = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width
}

export const STATUS_BAR_HEIGHT = isIOS
  ? getStatusBarHeight()
  : ExtraDimensions.getStatusBarHeight()
export const BOTTOM_NAVIGATOR_HEIGHT = ExtraDimensions.getSoftMenuBarHeight()
