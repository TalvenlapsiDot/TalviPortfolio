"use client"
import { Card, CardBody, Box, HStack, Icon, Spacer, Stat, StatLabel, StatHelpText, Flex, Wrap, WrapItem} from "@chakra-ui/react";
import { DiHtml5, DiReact, DiCss3 } from "react-icons/di";
import { TbBrandNextjs,} from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";


export default function Home() {
  return (
  <>
    <Box
      p="5"
      maxWidth="70%"
      bg="blackAlpha.400"
      borderRadius='20'>
      <Wrap spacing='10px' align="left">
        <Card
          variant="elevated"
          size="md"
          bg="whiteAlpha.200"
          width='300px'
          height='80px'>
            <CardBody textColor="whiteAlpha.800"> Alalalalalalala </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          bg="whiteAlpha.200"
          width='100px'
          height="80px">
            <CardBody textColor="whiteAlpha.800"> Test </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          bg="whiteAlpha.200"
          width='100px'
          height="80px">
            <CardBody textColor="whiteAlpha.800"> Test </CardBody>
        </Card>
          <Spacer/>
        <Card
          variant="elevated"
          size="md"
          maxW="60%"
          height="100px"
          bg="whiteAlpha.200">
            <CardBody textColor="whiteAlpha.800">
              <Flex direction="row">
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiHtml5} boxSize="10"/></StatLabel>
                  <StatHelpText> Html5</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiCss3} boxSize="10"/></StatLabel>
                  <StatHelpText>CSS</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={RiJavascriptLine} boxSize="10"/></StatLabel>
                  <StatHelpText>JavaScript</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={TbBrandNextjs} boxSize="10"/></StatLabel>
                  <StatHelpText>Next.JS</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiReact} boxSize="10"/></StatLabel>
                  <StatHelpText>React</StatHelpText>
                </Stat>
              </Flex>
            </CardBody>
        </Card>
    </Wrap>
  </Box>
  </>
  );
}
