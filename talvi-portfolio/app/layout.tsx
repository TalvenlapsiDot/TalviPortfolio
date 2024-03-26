"use client"
import "./globals.css";
import { Providers } from "./providers";
import { theme } from "./theme";
import { Box, IconButton, Flex, useColorMode} from "@chakra-ui/react";
import { SunIcon } from '@chakra-ui/icons'
import { ColorModeScript } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <html lang="en">
      <body>
      <Providers>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Flex
          direction="column"
          justifyContent="center"
          align="center"
          height="80%">
            <Box
              p="3"
              width="570px"
              borderRadius='20'
              bg="blackAlpha.200"
              zIndex="1">
                {children}
            </Box>
          </Flex>
          </Providers>
      </body>
    </html>
  );
}