import React, { useState } from "react"

import { Formik, Field, Form, ErrorMessage, setValues, values } from "formik"

import startsWith from "lodash.startswith"

// External libraries and helpers
import { navigate } from "gatsby"
import { formatDate } from "../helpers/dateHandler"

// CONTEXT
import {
  useModalContext,
  useEmptyLegContext,
  useUpdateEmptyLegContext,
} from "../contexts/EmptyLegContext"

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
  Flex,
  Box,
  Image,
  Divider,
  Heading,
  useDisclosure,
  FormErrorMessage,
} from "@chakra-ui/react"

// Internal data
import { ArrowForwardIcon } from "@chakra-ui/icons"
import PasajeroGris from "../images/icons/personagris.png"
import CalendarioGris from "../images/icons/calendariogris.png"
import FormikEmptyLeg from "./FormikEmptyLeg"

function ReservationModal(props) {
  // MODAL STATE HANDLING
  const { isOpen, onClose } = useModalContext()

  // FORM DATA HANDLING
  const reservationData = useEmptyLegContext()

  // // CONNECTION WITH NETLIFY ENDPOINT
  // const encode = data => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&")
  // }

  // const handleSumbit = e => {
  //   if (true == true) {
  //     alert("a")
  //     return
  //   }

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": e.target.getAttribute("name"),
  //       ...reservationData,
  //     }),
  //   })
  //     .then(() => navigate("/gracias"))
  //     .catch(error => alert(error))

  //   e.preventDefault()
  // }

  // COMPONENT
  return (
    <Box>
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
            Dejanos tu celular y nos pondremos en contacto contigo por el vuelo.
            <Box p="4" fontSize="sm" color="gray.500">
              <Flex direction="column" mt="4">
                <Flex mb="3">
                  <Text mr="2">{reservationData.Origen}</Text>
                  <Box>
                    <ArrowForwardIcon mr="2" />
                  </Box>
                  <Text>{reservationData.Destino}</Text>
                </Flex>
                <Flex mb="3">
                  <Image
                    src={CalendarioGris}
                    bg="blue"
                    width="20px"
                    mb="0"
                    mr="2"
                  />
                  {reservationData.Fecha}
                </Flex>
                <Flex mb="3">{reservationData.Tipo}</Flex>
                {props.pasajeros > 0 ? (
                  <Flex mb="3">
                    <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                    {props.data.pasajeros}
                  </Flex>
                ) : null}
              </Flex>
              {reservationData.Tipo.includes("Seat") ? (
                <Flex mb="3">
                  <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                  {reservationData.Seats}
                </Flex>
              ) : null}
            </Box>
            ¡Gracias por elegirnos!
          </ModalBody>
          <ModalFooter>
            <FormikEmptyLeg />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ReservationModal
