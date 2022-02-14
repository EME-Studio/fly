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
  TagRightIcon,
  TagLabel,
  Tag,
} from "@chakra-ui/react"
import RadioButtons from "./RadioButtons"

import { EmptyLegsContext } from "../contexts/EmptyLegsContext"

import { ArrowForwardIcon } from "@chakra-ui/icons"
import CalendarioGris from "../images/icons/calendariogris.png"
import AvionBimotor from "../images/iconsAviones/AvionBimotor.png"
import AvionMonomotor from "../images/iconsAviones/AvionMonomotor.png"
import HelicopteroGrande from "../images/iconsAviones/HelicopteroGrande.png"
import HelicopteroPequeno from "../images/iconsAviones/HelicopteroPequeño.png"
import JetPrivadoGrande from "../images/iconsAviones/JetPrivadoGrande.png"
import JetPrivadoMediano from "../images/iconsAviones/JetPrivadoMediano.png"
import JetPrivadoPequeno from "../images/iconsAviones/JetPrivadoPequeño.png"
import TurboheliceBimotor from "../images/iconsAviones/TurboheliceBimotor.png"
import TurboheliceMonomotor from "../images/iconsAviones/TurboheliceMonomotor.png"
import AvionDespega from "../images/icons/aviondespega.png"

function EmptyLegCard(props) {
  const [verMas, setVerMas] = useState(false)

  const { reservaState, modalState } = useContext(EmptyLegsContext)
  const [emptyLegReserva, setEmptyLegReserva] = reservaState
  const { onOpen } = modalState

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

  // SELECT PICTURE
  function selectPicture() {
    switch (props.tipoDeAvion) {
      case "AvionBimotor":
        return AvionBimotor
        break

      case "AvionMonomotor":
        return AvionMonomotor
        break

      case "HelicopteroGrande":
        return HelicopteroGrande
        break

      case "HelicopteroPequeno":
        return HelicopteroPequeno
        break

      case "JetPrivadoGrande":
        return JetPrivadoGrande
        break

      case "JetPrivadoMediano":
        return JetPrivadoMediano
        break

      case "JetPrivadoPequeno":
        return JetPrivadoPequeno
        break

      case "TurboheliceBimotor":
        return TurboheliceBimotor
        break

      case "TurboheliceMonomotor":
        return TurboheliceMonomotor
        break

      default:
        break
    }
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
        <Flex
          flexDirection="column"
          bgColor="fly.main"
          borderRadius="50"
          p={14}
          mr={10}
          w={["100%", "100%", "100%", "600px", "600px"]}
          mb={[6, 6, 6, 0, 0]}
          justifyContent="center"
        >
          <Tag
            size="sm"
            variant="subtle"
            colorScheme="whiteAlpha"
            mb={6}
            w="fit-content"
          >
            <TagLabel>{props.tipoDeAvion}</TagLabel>
          </Tag>
          <Image src={selectPicture()} h="100%" />
        </Flex>
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
