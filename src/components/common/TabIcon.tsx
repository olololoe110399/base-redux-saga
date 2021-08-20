import React from 'react'
import { Image, StyleSheet } from 'react-native'

type TabIconProps = {
  iconStyle?: object
  icon: any
}

const TabIcon: React.FC<TabIconProps> = ({ icon, iconStyle }) => {
  return <Image source={icon} style={[styles.iconView, iconStyle]} />
}

export default TabIcon

const styles = StyleSheet.create({
  iconView: {
    height: 38,
    width: 38,
    marginBottom: 5,
    resizeMode: 'contain'
  }
})
