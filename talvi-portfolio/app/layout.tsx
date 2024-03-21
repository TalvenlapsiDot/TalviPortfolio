"use client"
import "./globals.css";
import { Providers } from "./providers";
import { Box, Flex} from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Providers>
        <Flex
          direction="column"
          justifyContent="center"
          align="center"
          height="80%">
            <Box
              p="3"
              width="570px"
              borderRadius='20'
              bg="blackAlpha.200">
                {children}
            </Box>
          </Flex>
          </Providers>
      </body>
    </html>
  );
}