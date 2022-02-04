import React, { useContext } from "react"

import { EmptyLegsContext } from "../contexts/EmptyLegsContext"

import { formatDate } from "../helpers/dateHandler"

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

import { ArrowForwardIcon } from "@chakra-ui/icons"
import PasajeroGris from "../images/icons/personagris.png"
import CalendarioGris from "../images/icons/calendariogris.png"

function ReservationModal(props) {
  const { modalState } = useContext(EmptyLegsContext)
  const { isOpen, onOpen, onClose } = modalState

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(6, 63, 106, 0.4)" />
      <ModalContent borderRadius="none" bg="light" pb="8" px="4">
        <ModalHeader py="10">
          <Heading size="2xl" fontWeight="100" color="fly.main">
            {props.title}
            {props.tipoDeReserva}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody mt="4">
          Dejanos tu e-mail y nos pondremos en contacto contigo por el vuelo.
          <FormControl mt="5" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              bg="gray.300"
              placeholder="Email"
              value={props.email}
              // onChange={handleChange}
            />
          </FormControl>
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
            form="contact"
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
