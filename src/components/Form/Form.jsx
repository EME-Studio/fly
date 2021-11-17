import * as React from "react"
import { useState, useContext } from "react"

import { FormContext } from "../../Contexts/FormContext"

import FormLine from "./FormLine"
import {
  useDisclosure,
  Flex,
  Spacer,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react"

const FlyForm = ({ flightsArray, addFlights }) => {
  const { flightInfo, editFlightInfo } = useContext(FormContext)

  // Number of flights
  const [flights, setFlights] = useState(flightsArray)
  // Add flight to form
  let addFlightForm = () => {
    setFlights([...flights, `${flights.length + 1}`])
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column" align="flex-start">
      <FormControl id="flight-form">
        {flights.map(flight => (
          <FormLine flight={flight} />
        ))}

        <Flex direction="row">
          {/* Add flight optional button */}
          {addFlights ? (
            <Button onClick={addFlightForm} variant="link" size="sm">
              + Agregar Vuelo
            </Button>
          ) : (
            ""
          )}
          <Spacer />
        </Flex>
        <Button
          onClick={() => [onOpen(), editFlightInfo]}
          variant="accentSolid"
        >
          Enviar {flightInfo}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="none" bg="light">
            <ModalHeader>Cotizar Vuelo</ModalHeader>
            <ModalCloseButton />
            <Divider />
            <ModalBody>
              Dejanos tu e-mail y nos pondremos en contacto a la brevedad.
              <Input type="email" bg="white" />
              <br />
              <br />
              ¡Gracias por elegirnos! {flights}
            </ModalBody>

            <ModalFooter>
              <Button variant="accentSolid" mr={3} onClick={onClose}>
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </FormControl>
    </Flex>
  )
}

export default FlyForm
