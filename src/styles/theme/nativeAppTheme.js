export const COLORS = {
  primary: '#3b4cb8',
  secondary: '#3B3B3B',
  tertiary: '#f6f6f6',
  faded: '#3b4cb820',
  background: '#eeeeee',
  base: '#2F2B2C',

  lightGray: '#fafafa',
  lightGray2: '#f5f5f5',
  lightGray3: '#f0f0f0',
  gray: '#d9d9d9',
  gray1: '#8c8c8c',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.2)',
  transparentBlack2: 'rgba(0, 0, 0, 0.6)',
  dark: '#222222',
  white: '#ffffff',
  black: '#000000',
  error: '#f14f5d',
  lightGreen: '#3cb878',
}
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  padding: 12,
  radius: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  body1: 30,
  body2: 24,
  body3: 18,
  body4: 16,
  body5: 14,
}
export const FONTS = {
  largeTitle: { fontFamily: 'NunitoSans-Black', fontSize: SIZES.largeTitle },
  h1: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: { fontFamily: 'NunitoSans-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'NunitoSans-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'NunitoSans-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: 'NunitoSans-Bold', fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  italic: {
    fontFamily: 'NunitoSans-ExtraLightItalic',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
}

export const SHADOWS = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
}

const appTheme = { COLORS, SIZES, FONTS, SHADOWS }

export default appTheme
