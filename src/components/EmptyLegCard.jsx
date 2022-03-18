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
  useDisclosure,
  TagRightIcon,
  TagLabel,
  Tag,
} from "@chakra-ui/react"
import RadioButtons from "./RadioButtons"
import ReservationModal from "./ReservationModal"

import { handleManana, handleSpaces } from "../helpers/stringHandler"

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

import {
  useEmptyLegContext,
  useUpdateEmptyLegContext,
  useModalContext,
} from "../contexts/EmptyLegContext"

function EmptyLegCard(props) {
  const { onOpen } = useModalContext()
  const updateContext = useUpdateEmptyLegContext()

  const [tipo, setTipo] = useState("")
  const [seats, setSeats] = useState("")

  const [verMas, setVerMas] = useState(false)

  function handleClick() {
    onOpen()
    updateContext({
      Origen: props.origen,
      Destino: props.destino,
      Fecha: props.fecha,
      Tipo: tipo,
      Seats: seats,
      Phone: "",
    })
  }

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
          <Image src={selectPicture()} h="100%" />
        </Flex>

        <Flex
          direction="column"
          width="100%"
          minH="100%"
          justifyContent="center"
        >
          <Flex direction="row" mb="8">
            <Text fontWeight="900">{props.origen}</Text>
            <ArrowForwardIcon mx="4" />
            <Text fontWeight="900">{props.destino}</Text>
          </Flex>
          <Flex direction="row">
            <Flex direction="column" mr={10}>
              <Flex direction="row" mb="4">
                <Image src={CalendarioGris} width="20px" mb="0" mr="2" />
                <Text>{props.fecha}</Text>
              </Flex>
              <Flex direction="row" mb="10">
                <Image src={CalendarioGris} width="20px" mb="0" mr="2" />
                <Text>En la {handleManana(props.horario)}</Text>
              </Flex>

              <Box
                transition="1s"
                visibility={verMas ? "visible" : "hidden"}
                opacity={verMas ? "1" : "0"}
              >
                <Box display={verMas ? "block" : "none"}>
                  <RadioButtons
                    emptyLegPrecio={props.emptyLegPrecio}
                    emptySeatCantidad={props.emptySeatCantidad}
                    emptySeatPrecio={props.emptySeatPrecio}
                    updateTipoDeReserva={setTipo}
                    updateSeats={setSeats}
                    tipo={tipo}
                    seats={seats}
                  />
                  <Text fontSize="10px" color="gray.500" mt="12px">
                    Indique si quiere el Avion entero o un Empty Sit y cuantos
                    serían.
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Spacer />

            <Flex minH="100%" flexDirection="column" justifyContent="end">
              <Box
                transition="1s"
                visibility={verMas ? "visible" : "hidden"}
                opacity={verMas ? "1" : "0"}
              >
                <Box display={verMas ? "block" : "none"}>
                  <Text
                    align="right"
                    fontSize="xs"
                    color="gray.500"
                    mb="10px"
                    sx={{
                      fontWeight: "700",
                    }}
                  >
                    Categoría: {handleSpaces(props.tipoDeAvion)}
                  </Text>
                  <Text
                    align="right"
                    fontSize="xs"
                    color="gray.500"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    Capacidad: {props.capacidad} pasajeros
                  </Text>
                </Box>
              </Box>

              <Spacer />

              <Button
                variant={verMas ? "accentSolid" : "accentOutline"}
                transition="1s"
                size="sm"
                onClick={() => handleClick()}
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
