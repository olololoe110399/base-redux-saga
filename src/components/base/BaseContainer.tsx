import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'

import { AppState } from 'redux/reducers'
import AppStyles from 'styles/AppStyles'

type Props = {
  style?: object
  styleWrap?: object
  children?: any
}

const BaseContainer = (props: Props) => {
  const { style, children, styleWrap } = props
  return (
    <SafeAreaView style={[AppStyles.baseContainer, style]}>
      <View style={[styles.contentView, styleWrap]}>{children}</View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state: AppState, myProps: Props): Props => {
  return {
    ...myProps
  }
}

const mapDispatchToProps = (): Props => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer)

export const styles = StyleSheet.create({
  contentView: {
    flex: 1
  }
})
