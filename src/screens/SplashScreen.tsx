import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, StyleSheet, Text, View } from 'react-native'

import { images } from 'assets/images'
import { SplashScreenNavigationProp } from 'navigation/routes'

type Props = {
  navigation: SplashScreenNavigationProp
}

const SplashScreen: React.FC<Props> = (props) => {
  const { navigation } = props
  const { t } = useTranslation(['screen'])

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Text>{t('splash.content')}</Text>
      <Image source={images.img_logo} style={styles.imgTablet} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgTablet: {
    width: 232 * 2,
    height: 143 * 2
  }
})
