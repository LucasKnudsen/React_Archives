import { Platform, LayoutAnimation, UIManager } from 'react-native'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
