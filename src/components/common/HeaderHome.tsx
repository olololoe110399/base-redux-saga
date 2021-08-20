import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { ChatIcon, LogoIcon, NotificationIcon, SearchIcon } from 'assets/icons'
import {
  baseFontSize,
  colors,
  customTxt,
  fontsFamily,
  imagesStyle,
  spacings
} from 'styles/theme'

type Props = {
  onPressSearch: () => void
  onPressNotification: () => void
  onPressMessage: () => void
}

const TabIcon: React.FC<Props> = (props) => {
  const { onPressMessage, onPressNotification, onPressSearch } = props

  return (
    <View style={{ backgroundColor: colors.white }}>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <TouchableOpacity
            onPress={onPressSearch}
            style={styles.touchIconView}>
            <View style={styles.iconView}>
              <SearchIcon
                width={imagesStyle.width}
                height={imagesStyle.width}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressNotification}
            style={styles.touchIconView}>
            <View style={[styles.iconView, styles.marginRight18]}>
              <NotificationIcon
                width={imagesStyle.width}
                height={imagesStyle.width}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressMessage}
            style={styles.touchIconView}>
            <View style={styles.iconView}>
              <ChatIcon width={imagesStyle.width} height={imagesStyle.width} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerItem}>
          <View style={styles.touchIconView}>
            <Text
              style={[
                customTxt(
                  fontsFamily.Bold,
                  baseFontSize * 1.14,
                  colors.purpleHeart
                ),
                styles.marginRight5
              ]}>
              GO BREAK
            </Text>
          </View>
          <View style={styles.touchIconView}>
            <View style={styles.iconLogoView}>
              <LogoIcon width={spacings.xLarge} height={spacings.xLarge} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: spacings.xxxLarge,
    paddingRight: spacings.normal,
    paddingLeft: spacings.xsmall,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  containerItem: {
    flexDirection: 'row'
  },
  touchIconView: {
    height: '100%',
    justifyContent: 'center'
  },
  iconView: {
    marginHorizontal: spacings.xsmall,
    width: imagesStyle.width,
    height: imagesStyle.width
  },
  iconLogoView: {
    width: spacings.xLarge,
    height: spacings.xLarge
  },
  marginRight18: {
    marginRight: spacings.normal * 0.625
  },
  marginRight5: {
    marginRight: spacings.normal * 0.31
  }
})
