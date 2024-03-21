"use client"
import { Box, Text, Card, CardBody, Flex, IconButton, Link} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export default function Contact() {
    return (
    <>
        <Link href="./">
            <IconButton aria-label="Go Back" icon={<ArrowLeftIcon/>} size="sm" zIndex="3" position="relative" top="12" left="30"/>
        </Link>
        <Box
            p="3"
            maxWidth="80%"
            minWidth="570px"
            borderRadius='20'
            bg="blackAlpha.200">
            <Flex
                direction="column"
                justifyContent="center"
                align="center">
            <Card
                variant="elevated"
                size="md"
                bg="blackAlpha.500"
                width="95%"
                zIndex="1">
            <CardBody textColor="whiteAlpha.800">
              <Text fontSize="2xl" textAlign="center"> Ways to Contact </Text>
              <Text fontSize="md" textAlign="left" p="2" marginTop="5"> Info Here </Text>
            </CardBody>
            </Card>
            </Flex>
        </Box>
    </>
    )
}