import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fffffe',
      default: '#ffffff',
    },
    primary: {
      main: '#5e72f0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d3e5ff',
      contrastText: '#222',
    },
    error: {
      main: '#f14f5d',
      contrastText: '#fff',
    },
    success: {
      main: '#3cb878',
      contrastText: '#fff',
    },
    text: {
      primary: '#151717',
      secondary: 'rgba(22, 22, 22, 0.7)',
      disabled: 'rgba(22, 22, 22, 0.38)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      letterSpacing: '-.025em',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 2.5,
    },
    h3: {
      color: '#fff',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.75,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
  },
})

// https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
export default responsiveFontSizes(theme)
