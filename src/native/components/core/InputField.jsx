import { useState } from '@hookstate/core'
import React, { forwardRef, useRef } from 'react'
import {
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  Text,
  View,
} from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../../constants'

const InputField = forwardRef(
  (
    {
      icon,
      containerStyle,
      variant = 'outlined',
      label,
      iconEl,
      labelStyle,
      textStyle,
      ...props
    },
    ref
  ) => {
    const isActive = useState(false)
    const inputRef = useRef(null)

    const handleBlur = () => {
      isActive.set(false)
    }

    const handleFocus = () => {
      isActive.set(true)
    }

    const styles = StyleSheet.create({
      inputContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        overflow: 'hidden',
        height: 55,
        borderWidth: variant === 'outlined' ? (isActive.get() ? 2 : 1) : 0,
        borderRadius: variant === 'outlined' ? SIZES.radius * 2 : 5,
        paddingLeft: icon || iconEl ? 0 : SIZES.padding,

        borderColor: COLORS.primary,
        width: '100%',
        marginVertical: SIZES.padding,
        // ...((isActive.get() || variant === 'underlined') && SHADOWS.shadowLight),
      },
      input: {
        width: '90%',
        paddingRight: SIZES.padding,
        overflow: 'hidden',
        ...FONTS.body4,
      },
      iconContainer: {
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',

        marginRight: SIZES.padding,
        height: 55,
        width: 55,
      },
      icon: {
        height: 25,
        width: 25,
        tintColor: COLORS.primary,
      },
    })

    return (
      <View style={{ ...containerStyle }}>
        {label && (
          <Text
            style={{
              ...(isActive.get() ? FONTS.h3 : FONTS.body3),
              color: COLORS.primary,
              ...labelStyle,
            }}>
            {label}
          </Text>
        )}

        <Pressable
          onPress={() => (ref ? ref.current.focus() : inputRef.current.focus())}
          style={{ ...styles.inputContainer }}>
          {iconEl && <View style={{ ...styles.iconContainer }}>{iconEl}</View>}

          {icon && (
            <View style={{ ...styles.iconContainer }}>
              <Image
                source={icon}
                resizeMode="contain"
                style={{ ...styles.icon }}
              />
            </View>
          )}
          <TextInput
            selectionColor={COLORS.primary}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref || inputRef}
            style={{
              ...styles.input,
              ...textStyle,
              color: COLORS.primary,
            }}
            {...props}
          />
        </Pressable>
      </View>
    )
  }
)

export default InputField
