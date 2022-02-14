import React, { useState, useContext } from "react"

import {
  Container,
  Box,
  Flex,
  Img,
  Text,
  Spacer,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react"
import RadioButtons from "./RadioButtons"

import { EmptyLegsContext } from "../contexts/EmptyLegsContext"

import { ArrowForwardIcon } from "@chakra-ui/icons"
import CalendarioGris from "../images/icons/calendariogris.png"
import TestImage from "../images/avion_fly.jpeg"

function EmptyLegCard(props) {
  const [verMas, setVerMas] = useState(false)

  const { reservaState, modalState } = useContext(EmptyLegsContext)
  const [emptyLegReserva, setEmptyLegReserva] = reservaState
  const { isOpen, onOpen, onClose } = modalState

  function updateReserva() {
    setEmptyLegReserva({
      ...emptyLegReserva,
      origen: props.origen,
      destino: props.destino,
      fecha: props.fecha,
    })
    console.log(emptyLegReserva)
  }

  function handleClick() {
    updateReserva()
    onOpen()
  }

  return (
    <Container
      onMouseEnter={() => setVerMas(true)}
      onMouseLeave={() => setVerMas(false)}
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
      <Flex
        direction={["column", "column", "column", "row", "row"]}
        transition="1s"
      >
        <Image
          src={TestImage}
          maxH="250px"
          aspectRatio="2/3"
          objectFit="cover"
          h="100%"
          mr="10"
          my="0"
          borderRadius="50"
          mb={[6, 6, 6, 0, 0]}
          w={["100%", "100%", "100%", "inherit", "inherit"]}
        />
        <Flex
          direction="column"
          width="100%"
          minH="100%"
          justifyContent="center"
        >
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
              <RadioButtons
                emptyLegPrecio={props.emptyLegPrecio}
                emptySeatCantidad={props.emptySeatCantidad}
                emptySeatPrecio={props.emptySeatPrecio}
              />
            </Flex>
            <Spacer />
            <Flex minH="100%" flexDirection="row" alignItems="flex-end">
              <Button
                variant={verMas ? "accentSolid" : "accentOutline"}
                transition="1s"
                size="sm"
                onClick={handleClick}
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
