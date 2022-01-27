import React, { useState } from "react"

import {
  Container,
  Box,
  Flex,
  Img,
  Text,
  Spacer,
  Image,
  Button,
} from "@chakra-ui/react"
import RadioButtons from "./RadioButtons"

import { ArrowForwardIcon } from "@chakra-ui/icons"
import CalendarioGris from "../images/icons/calendariogris.png"
import TestImage from "../images/avion_fly.jpeg"

function EmptyLegCard(props) {
  const [verMas, setVerMas] = useState(false)

  return (
    <Container
      onMouseEnter={() => setVerMas(!verMas)}
      onMouseLeave={() => setVerMas(!verMas)}
      maxW={verMas ? "container.xl" : "container.lg"}
      transition="1s"
      p="10"
      mb="6"
      borderRadius="20"
      boxShadow="md"
      bgColor="white"
      border="1px"
      borderColor="gray.300"
    >
      <Flex direction="row" transition="1s" h={verMas ? "250" : "200"}>
        <Image
          src={TestImage}
          aspectRatio="2/3"
          objectFit="contain"
          h="100%"
          mr="10"
          my="0"
          borderRadius="50"
        />
        <Flex direction="column" width="100%" h="100%" justifyContent="center">
          <Flex direction="row" mb="4">
            <Text fontWeight="900">{props.origen}</Text>
            <ArrowForwardIcon mx="4" />
            <Text fontWeight="900">{props.destino}</Text>
          </Flex>
          <Flex direction="row">
            <Flex direction="column">
              <Flex direction="row" mb="6">
                <Image src={CalendarioGris} width="20px" mb="0" mr="2" />
                <Text>{props.fecha}</Text>
              </Flex>
              <RadioButtons />
            </Flex>
            <Spacer />
            <Flex h="100%" flexDirection="row" alignItems="flex-end">
              <Button
                variant={verMas ? "accentSolid" : "accentOutline"}
                transition="1s"
                size="sm"
                // onClick={() => setVerMas(!verMas)}
              >
                Reservar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default EmptyLegCard
