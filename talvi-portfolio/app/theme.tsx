import { extendTheme, type ThemeConfig } from "@chakra-ui/react"


const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  export const theme = extendTheme({
    colors: {
      brand: {
        50: "#B2349D",
        100: "#7D2484",
        200: "#B23474",
        300: "#6C34BF",
        400: "#4B2486",
      }
    },
    styles: {
      global: {
        body: {
          bg: 'transparent',
        }
      }
    },
    config
  })