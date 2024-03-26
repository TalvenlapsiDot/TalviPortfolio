"use client"
import { Box, Button, Text, Card, CardBody, Flex, IconButton, Link} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import AboutInfo from "./components";

export default function AboutLayout() {

    return (
    <>
        <Flex
         justifyContent="center"
         align="center">
        <Link href="./">
            <IconButton
                aria-label="Go Back"
                icon={<ArrowLeftIcon/>}
                size="sm"
                zIndex="3"
                position="relative"
                top="-47"
                left="4"
                variant="link"
                textColor="white"/>
        </Link>
        <Card
            variant="elevated"
            size="md"
            bg="blackAlpha.500"
            width="100%"
            zIndex="1"
            left="-4">
                <CardBody textColor="whiteAlpha.900">
                    <Text fontSize="2xl" textAlign="center"> About </Text>
                    <Text fontSize="md" textAlign="left" p="2" marginTop="5"> <AboutInfo/> </Text>
                </CardBody>
        </Card>
        </Flex>
    </>
    )
}