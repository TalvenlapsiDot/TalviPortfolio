"use client"
import { Card, CardBody, Box, Button, HStack, Icon, Link, Spacer, Stat, StatLabel, StatHelpText, Flex, Wrap, WrapItem, Text} from "@chakra-ui/react";
import { DiHtml5, DiReact, DiCss3, DiGithubBadge } from "react-icons/di";
import { TbBrandNextjs, TbCode} from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { IoMdDownload, IoMdPerson  } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import About from "./about/page";

export default function Home() {
  return (
  <>
    <Box
      p="3"
      maxWidth="570px"
      borderRadius='20'
      bg="blackAlpha.200">
      <Wrap spacing='10px' align="center" marginLeft="2">
        <Card
          variant="elevated"
          size="md"
          bg="blackAlpha.500"
          height='100px'
          width="210px">
            <CardBody textColor="whiteAlpha.800">
              <Text fontSize="2xl" textAlign="center" marginTop="-2"> Talvi K </Text>
              <Text fontSize="sm" textAlign="center"> Junior Front End / Web Developer</Text>
            </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          bg="blackAlpha.500"
          width='150px'
          height="100px"
          justifyContent='center'
          alignItems="center">
            <CardBody textColor="whiteAlpha.800">
            <Box
            as="button"
            borderRadius="15"
            margin="auto"
            p="2"
            _hover={{ bg:"whiteAlpha.200"}}>
              <Link href="./about">
              <Icon as={IoMdPerson} boxSize="14"/>
              <Text fontSize="sm" textAlign="center"> About Me </Text>
              </Link>
              </Box>
            </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          bg="blackAlpha.500"
          width='150px'
          height="100px"
          justifyContent='center'
          alignItems="center">
            <CardBody textColor="whiteAlpha.800">
            <Box
            as="button"
            borderRadius="15"
            margin="auto"
            p="2"
            _hover={{ bg:"whiteAlpha.200"}}>
            <Link href="./contact">
            <Icon as={MdOutlineEmail} boxSize="14"/>
            <Text fontSize="sm" textAlign="center" marginTop="-2"> Contact Me</Text>
            </Link>
            </Box>
            </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          bg="blackAlpha.500"
          width='100px'
          height="100px"
          justifyContent='center'
          alignItems="center">
            <CardBody textColor="whiteAlpha.800">
            <Box
            as="button"
            borderRadius="15"
            margin="auto"
            p="2"
            _hover={{ bg:"whiteAlpha.200"}}>
              <Icon as={IoMdDownload} boxSize="49"/>
              <Text textAlign="center" fontSize="sm"> CV </Text>
              </Box>
            </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          bg="blackAlpha.500"
          width='100px'
          height="100px"
          justifyContent='center'
          alignItems="center">
            <CardBody textColor="whiteAlpha.800">
            <Box
            as="button"
            borderRadius="15"
            margin="auto"
            p="2"
            _hover={{ bg:"whiteAlpha.200"}}>
            <Link href="https://github.com/TalvenlapsiDot" isExternal>
            <Icon as={TbCode} boxSize="12"/>
            <Text textAlign="center" fontSize="sm"> Projects </Text>
            </Link>
            </Box>
            </CardBody>
        </Card>
        <Card
          variant="elevated"
          size="md"
          width="310px"
          height="100px"
          bg="blackAlpha.500"
          justifyContent='center'
          alignItems="center">
            <CardBody textColor="whiteAlpha.800">
              <Flex direction="row">
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiHtml5} boxSize="9"/></StatLabel>
                  <StatHelpText> Html5</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiCss3} boxSize="9"/></StatLabel>
                  <StatHelpText marginLeft="2">CSS</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={RiJavascriptLine} boxSize="9"/></StatLabel>
                  <StatHelpText marginLeft="3">JS</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={TbBrandNextjs} boxSize="9" marginLeft="1"/></StatLabel>
                  <StatHelpText>Next.JS</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiReact} boxSize="9" marginLeft="1"/></StatLabel>
                  <StatHelpText marginLeft="1">React</StatHelpText>
                </Stat>
                <Stat marginRight="2">
                  <StatLabel><Icon as={DiGithubBadge} boxSize="9" marginLeft="2"/></StatLabel>
                  <StatHelpText marginLeft="1">GitHub</StatHelpText>
                </Stat>
              </Flex>
            </CardBody>
        </Card>
    </Wrap>
  </Box>
  </>
  );
}
