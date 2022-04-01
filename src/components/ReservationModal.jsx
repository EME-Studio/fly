import React, { useState } from "react"

import { Formik, Field, Form, ErrorMessage, setValues, values } from "formik"

import startsWith from "lodash.startswith"

// External libraries and helpers
import { navigate } from "gatsby"
import { formatDate } from "../helpers/dateHandler"

// CONTEXT
import {
  useModalContext,
  useReservationContext,
  useUpdateReservationContext,
} from "../contexts/ReservationContext"

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
import FormikReservation from "./FormikReservation"
import FlightData from "./FlightData"

function ReservationModal({ title }) {
  // MODAL STATE HANDLING
  const { isOpen, onClose } = useModalContext()

  // FORM DATA HANDLING
  const reservationData = useReservationContext()

  // COMPONENT
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(6, 63, 106, 0.4)" />
        <ModalContent borderRadius="none" bg="light" pb="8" px="4">
          <ModalHeader py="10">
            <Heading size="2xl" fontWeight="100" color="fly.main">
              {title}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody mt="4">
            Dejanos tu celular y nos pondremos en contacto contigo por el vuelo.
            <FlightData
              origen={reservationData.origen}
              destino={reservationData.destino}
              fechaIda={reservationData.fechaIda}
              fechaVuelta={reservationData.fechaVuelta}
              tipo={reservationData.tipo}
              seats={reservationData.seats}
            />
            ¡Gracias por elegirnos!
          </ModalBody>
          <ModalFooter>
            <FormikReservation />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ReservationModal
