import React from "react"

import { Box, Flex, Img, Text, Spacer, Image, Button } from "@chakra-ui/react"

import { ArrowForwardIcon } from "@chakra-ui/icons"
import CalendarioGris from "../images/icons/calendariogris.png"
import TestImage from "../images/avion_fly.jpeg"

function EmptyLegCard(props) {
  return (
    <Box p="6" mb="6" borderRadius="20" boxShadow="base" bgColor="white">
      <Flex direction="row" h="200px">
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
            <Text>{props.origen}</Text>
            <ArrowForwardIcon mx="4" />
            <Text>{props.destino}</Text>
          </Flex>
          <Flex direction="row" mb="6">
            <Image src={CalendarioGris} width="20px" mb="0" mr="2" />
            <Text>{props.fecha}</Text>
          </Flex>
          <Flex w="100%" flexDir="row" justifyContent="flex-end">
            <Button variant="accentSolid" size="sm">
              Reservar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default EmptyLegCard
