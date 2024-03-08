// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}