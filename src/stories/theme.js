import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#99CC33',
        light: '#F0F9DD',
        dark: '#72A60A',
        contrastText: '#fff'
      },
      secondary: {
        main: '#3B3BBF',
        light: '#F6F7FC',
        dark: '#08007F',
        contrastText: '#fff'
      },
      warning: {
        main: '#FF8600',
        dark: '#D66E00',
        light: '#FFF5E7',
        contrastText: '#fff'
      },
      error: {
        main: '#E8473C',
        dark: '#B43535',
        light: '#FFEAE8',
        contrastText: '#fff'
      },
  
      // Custom colors
      lemon: {
        main: '#F8C324',
        dark: '#EBAA00',
        light: '#FFF8E5'
      },
      heartPink: {
        main: '#E83C72',
        dark: '#BE2A53',
        light: '#FFEAF1'
      },
      grey: {
        one: '#F8F8F8',
        two: '#F5F5F5',
        three: '#E7E7E9',
        four: '#D1D1D3',
        five: '#B9B9B9',
        six: '#74747B',
        seven: '#46464F'
      },
      black: {
        main: '#2F2F39'
      },
      white: {
        main: '#fff'
      }
    },
  
    typography: {
      fontFamily: ["Oxygen","Helvetica","Arial","sans-serif"].join(','),
      fontSize: 16
    },
    overrides: {},
  
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  })