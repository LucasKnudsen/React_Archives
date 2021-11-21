export const COLORS = {
  primary: '#0c3a69',
  secondary: '#90aab9',
  tertiary: '#f6f6f6',
  accent: '#c88c21',
  faded: '#0c3a6920',
  background: '#ffffff',
  base: '#2F2B2C',

  lightGray: '#fafafa',
  lightGray2: '#f5f5f5',
  lightGray3: '#f0f0f0',
  gray: '#d9d9d9',
  gray1: '#8c8c8c',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.2)',
  transparentBlack2: 'rgba(0, 0, 0, 0.6)',
  dark: '#151717',
  white: '#ffffff',
  black: '#000000',
  error: '#D84035',
}

export const SIZES = {
  padding: 12,
  radius: 24,
  maxWidth: 1140,
}

export const FONTS = {
  baseSize: 16,
  baseFont: "'Quattrocento', serif",
  baseHeading: "'Oswald', sans-serif",
}

export const BREAKPOINTS = {
  isPhone: '(max-width:480px)',
  isSmallScreen: '(max-width:780px)',
  isTablet: '(max-width:1023px)',
  isLaptop: '(min-width:1024px)',
  isLargeScreen: '(min-width:1201px)',
}

export const toastOptions = {
  style: {
    fontFamily: FONTS.baseHeading,
    minWidth: 200,
  },
  success: {
    duration: 4000,
  },
}

const appTheme = { COLORS, SIZES, BREAKPOINTS, FONTS, toastOptions }

export default appTheme
