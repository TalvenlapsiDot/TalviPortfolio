"use client"
import "./globals.css";
import { Providers } from "./providers";
import { Box, Button, ButtonGroup, Center, Card, Flex, Link, CardHeader, CardBody, CardFooter} from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      <Providers>
                {children}
      </Providers>
      </Box>
      </Flex>
      </body>
    </html>
  );
}