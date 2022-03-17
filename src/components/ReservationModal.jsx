import React, { useContext, useState, useEffect } from "react"

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
  useDisclosure,
} from "@chakra-ui/react"

// Internal data
import { ArrowForwardIcon } from "@chakra-ui/icons"
import PasajeroGris from "../images/icons/personagris.png"
import CalendarioGris from "../images/icons/calendariogris.png"

function ReservationModal(props) {
  // MODAL STATE HANDLING
  const isOpen = props.isOpen
  const onClose = props.onClose

  // FORM DATA HANDLING
  const [reservationData, setReservationData] = useState({
    Origen: props.data.origen,
    Destino: props.data.destino,
    Fecha: props.data.fecha,
    Tipo: props.data.tipoDeReserva,
    Seats: props.data.seats,
    Phone: "",
  })

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
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...reservationData,
      }),
    })
      .then(() => navigate("/gracias"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  // COMPONENT
  return (
    <Box>
      <form
        onSubmit={handleSumbit}
        name="empty-leg"
        id="empty-leg"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="empty-leg" />
        <input type="hidden" name="bot-field" />
        <Input
          type="hidden"
          name="Origen"
          id="origen"
          value={reservationData.Origen}
        />
        <Input
          type="hidden"
          name="Destino"
          id="destino"
          value={reservationData.Destino}
        />
        <Input
          type="hidden"
          name="Fecha"
          id="fecha"
          value={reservationData.Fecha}
        />
        <Input
          type="hidden"
          name="Tipo"
          id="tipoDeViaje"
          value={reservationData.Tipo}
        />
        <Input
          type="hidden"
          name="Seats"
          id="seats"
          value={reservationData.Seats}
        />
        <Input
          type="hidden"
          name="Phone"
          id="phone"
          value={reservationData.Phone}
        />

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
              Dejanos tu celular y nos pondremos en contacto contigo por el
              vuelo.
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
                  value={reservationData.Phone}
                  onChange={phone => {
                    setReservationData({ ...reservationData, Phone: phone })
                  }}
                />
              </FormControl>
              <Box p="4" fontSize="sm" color="gray.500">
                <Flex direction="column" mt="4">
                  <Flex mb="3">
                    <Text mr="2">{props.data.origen}</Text>
                    <Box>
                      <ArrowForwardIcon mr="2" />
                    </Box>
                    <Text>{props.data.destino}</Text>
                  </Flex>
                  <Flex mb="3">
                    <Image
                      src={CalendarioGris}
                      bg="blue"
                      width="20px"
                      mb="0"
                      mr="2"
                    />
                    {props.data.fecha}
                  </Flex>
                  <Flex mb="3">{props.data.tipoDeReserva}</Flex>
                  {props.pasajeros > 0 ? (
                    <Flex mb="3">
                      <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                      {props.data.pasajeros}
                    </Flex>
                  ) : null}
                </Flex>
                {props.fechaVuelta ? (
                  <Flex direction="column" mt="4">
                    <Flex mb="3">
                      <Text mr="2">{props.data.destino}</Text>
                      <Box>
                        <ArrowForwardIcon mr="2" />
                      </Box>
                      <Text>{props.data.origen}</Text>
                    </Flex>
                    <Flex mb="3">
                      <Image
                        src={CalendarioGris}
                        bg="blue"
                        width="20px"
                        mb="0"
                        mr="2"
                      />
                      {formatDate(props.data.fechaVuelta)}
                    </Flex>
                    {props.data.pasajeros > 0 ? (
                      <Flex mb="3">
                        <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                        {props.data.pasajeros}
                      </Flex>
                    ) : null}
                  </Flex>
                ) : null}
              </Box>
              ¡Gracias por elegirnos!
            </ModalBody>

            <ModalFooter>
              <Button
                form="empty-leg"
                type="submit"
                onClick={onClose}
                variant="accentSolid"
              >
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </Box>
  )
}

export default ReservationModal
