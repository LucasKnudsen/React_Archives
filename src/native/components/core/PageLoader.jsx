import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { COLORS, FONTS } from '../../constants'

const PageLoader = () => {
  return (
    <View
      style={{
        zIndex: 2,
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.transparentBlack2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={COLORS.white} size={50} />

      <Text style={{ ...FONTS.h3, color: COLORS.white }}>Logger ind...</Text>
    </View>
  )
}

export default PageLoader
