import React, { useContext, useState } from "react"

// Internal context
import { EmptyLegsContext } from "../contexts/EmptyLegsContext"

// External libraries and helpers
import { formatDate } from "../helpers/dateHandler"
import { navigate } from "gatsby"

// Mobile phone input imports
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

// Chakra-ui components
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Image,
  Divider,
  Heading,
} from "@chakra-ui/react"

// Internal data
import { ArrowForwardIcon } from "@chakra-ui/icons"
import PasajeroGris from "../images/icons/personagris.png"
import CalendarioGris from "../images/icons/calendariogris.png"

function ReservationModal(props) {
  // MODAL STATE HANDLING
  const { modalState } = useContext(EmptyLegsContext)
  const { isOpen, onClose } = modalState

  // RESERVATION STATE DATA HANDLING
  const { reservaState } = useContext(EmptyLegsContext)
  const [emptyLegReserva, setEmptyLegReserva] = reservaState

  // FORM DATA HANDLING
  const [flightData, setFlightData] = useState({
    origen: emptyLegReserva.origen,
    destino: emptyLegReserva.destino,
    fechaIda: emptyLegReserva.fecha,
    tipoDeViaje: emptyLegReserva.tipoDeReserva,
    precio: "",
    pasajeros: "",
    equipaje: "",
    phone: "",
  })

  const handleChange = e => {
    setFlightData({
      ...flightData,
      [e.target.name]: e.target.value,
    })
  }

  // CONNECTION WITH NETLIFY ENDPOINT
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSumbit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Solicitud Vuelo", ...flightData }),
    })
      .then(() => navigate("/gracias"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  // COMPONENT
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(6, 63, 106, 0.4)" />
      <ModalContent borderRadius="none" bg="light" pb="8" px="4">
        <ModalHeader py="10">
          <Heading size="2xl" fontWeight="100" color="fly.main">
            {props.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody mt="4">
          <form
            onSubmit={handleSumbit}
            name="Solicitud Vuelo"
            id="Solicitud Vuelo"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Solicitud Vuelo" />
            Dejanos tu celular y nos pondremos en contacto contigo por el vuelo.
            {/* <FormControl mt="5" isRequired> */}
            <FormControl mt="5" isRequired>
              <FormLabel>Celular</FormLabel>
              <PhoneInput
                inputProps={{
                  id: "phone",
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                country={"uy"}
                value={flightData.phone}
                onChange={phone =>
                  setFlightData({ ...flightData, phone: phone })
                }
              />
            </FormControl>
          </form>
          <Box p="4" fontSize="sm" color="gray.500">
            <Flex direction="column" mt="4">
              <Flex mb="3">
                <Text mr="2">{props.origen}</Text>
                <Box>
                  <ArrowForwardIcon mr="2" />
                </Box>
                <Text>{props.destino}</Text>
              </Flex>
              <Flex mb="3">
                <Image
                  src={CalendarioGris}
                  bg="blue"
                  width="20px"
                  mb="0"
                  mr="2"
                />
                {formatDate(props.fechaIda)}
              </Flex>
              <Flex mb="3">{props.tipoDeReserva}</Flex>
              {props.pasajeros > 0 ? (
                <Flex mb="3">
                  <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                  {props.pasajeros}
                </Flex>
              ) : null}
            </Flex>
            {props.fechaVuelta ? (
              <Flex direction="column" mt="4">
                <Flex mb="3">
                  <Text mr="2">{props.destino}</Text>
                  <Box>
                    <ArrowForwardIcon mr="2" />
                  </Box>
                  <Text>{props.origen}</Text>
                </Flex>
                <Flex mb="3">
                  <Image
                    src={CalendarioGris}
                    bg="blue"
                    width="20px"
                    mb="0"
                    mr="2"
                  />
                  {formatDate(props.fechaVuelta)}
                </Flex>
                {props.pasajeros > 0 ? (
                  <Flex mb="3">
                    <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                    {props.pasajeros}
                  </Flex>
                ) : null}
              </Flex>
            ) : null}
          </Box>
          ¡Gracias por elegirnos!
        </ModalBody>

        <ModalFooter>
          <Button
            form="Solicitud Vuelo"
            type="submit"
            onClick={onClose}
            variant="accentSolid"
          >
            Enviar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ReservationModal