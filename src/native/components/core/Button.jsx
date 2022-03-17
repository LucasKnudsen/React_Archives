import React from 'react'
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Button = ({
  text = '',
  style,
  textStyle,
  icon,
  iconEl,
  disabled,
  iconStyle,
  mode = 'primary',
  onPress,
  loading,
  loaderSize = 24,
  ...props
}) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: SIZES.radius,
      backgroundColor:
        mode === 'primary'
          ? COLORS.primary
          : mode === 'tertiary'
          ? COLORS.faded
          : 'transparent',
      paddingHorizontal: SIZES.padding * 2,
      paddingVertical: SIZES.padding / 2,
      borderColor: mode === 'secondary' ? COLORS.primary : 'transparent',
      borderWidth: 1,
    },
    text: {
      color: mode === 'primary' ? COLORS.white : COLORS.primary,
      ...FONTS.h4,
    },
    icon: {
      tintColor: mode === 'primary' ? COLORS.white : COLORS.primary,
      height: 20,
      width: 20,
    },
  })

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{ ...styles.button, ...style, opacity: disabled ? 0.5 : 1 }}>
      {loading && (
        <ActivityIndicator
          style={{ position: 'absolute', zIndex: 10 }}
          color={mode === 'primary' ? COLORS.white : COLORS.primary}
          size={loaderSize}
        />
      )}
      {iconEl && iconEl}

      {icon && (
        <Image
          source={icon}
          style={{
            ...styles.icon,
            tintColor: loading
              ? styles.button.backgroundColor
              : styles.icon.tintColor,
            ...iconStyle,
          }}
        />
      )}
      {text && (
        <Text
          style={{
            ...styles.text,
            color: loading ? styles.button.backgroundColor : styles.text.color,
            ...textStyle,
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
