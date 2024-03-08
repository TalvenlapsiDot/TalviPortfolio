
import "./globals.css";
import { Providers } from "./providers";
import { Box, Button, ButtonGroup, Center, Card, Flex, Link, CardHeader, CardBody, CardFooter} from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talvi K. Porftolio",
  description: "Whatever really",
}

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
      <Providers>
            <Center>
                {children}
              </Center>
      </Providers>
      </Flex>
      </body>
    </html>
  );
}