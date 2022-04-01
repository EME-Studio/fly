import React, { useState, useEffect, useRef } from "react"

import AvionAterriza from "../images/icons/avionaterriza.png"
import AvionDespega from "../images/icons/aviondespega.png"
import Calendario from "../images/icons/calendario.png"
import Maleta from "../images/icons/maleta.png"
import Pasajero from "../images/icons/pasajero.png"

import { formatDate } from "../helpers/dateHandler"
import { isMobile } from "react-device-detect"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import {
  Input,
  FormControl,
  Select,
  Center,
  Image,
  Box,
  Flex,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

// Internal data
import { airports } from "../constants/airports"

import {
  useModalContext,
  useUpdateReservationContext,
} from "../contexts/ReservationContext"

function Cotizador({ soloIda }) {
  const { onOpen } = useModalContext()
  const updateContext = useUpdateReservationContext()

  // FORM DATA HANDLING
  const [flightData, setFlightData] = useState({
    origen: "",
    destino: "",
    fechaIda: new Date(),
    fechaVuelta: "",
    pasajeros: "",
    equipaje: "",
  })

  const handleChange = e => {
    setFlightData({
      ...flightData,
      [e.target.name]: e.target.value,
    })
  }

  const modalOpenClick = () => {
    if (flightData.origen.length > 0 && flightData.destino.length > 0) {
      updateContext({
        ...flightData,
        fechaIda: formatDate(flightData.fechaIda),
        fechaVuelta: formatDate(flightData.fechaVuelta),
      })
      onOpen()
    } else if (flightData.origen === "") {
      alert("Seleccione un aeropuerto de origen")
    } else if (flightData.destino === "") {
      alert("Seleccione un aeropuerto de destino")
    }
  }

  // IPHONE KEYBOARD FIX
  const pickerRef1 = useRef(null)
  useEffect(() => {
    if (isMobile && pickerRef1.current !== null) {
      pickerRef1.current.input.readOnly = true
    }
  }, [pickerRef1])

  const pickerRef2 = useRef(null)
  useEffect(() => {
    if (isMobile && pickerRef2.current !== null) {
      pickerRef2.current.input.readOnly = true
    }
  }, [pickerRef2])

  // COMPONENT
  return (
    <Box>
      <Flex
        direction={["column", "column", "column", "row", "row", "row"]}
        mb="4"
      >
        <Flex
          w={["100%", "100%", "100%", "50%", "50%", "50%"]}
          direction={["column", "column", "row", "row", "row", "row"]}
        >
          <Center
            bg="fly.main"
            borderRadius="lg"
            mr={["0", "0", "4", "4", "4", "4"]}
            w={["100%", "100%", "50%", "50%", "50%", "50%"]}
            mb={["4", "4", "4"]}
            h="45px"
          >
            <Center p="2" w="45px">
              <Image src={AvionDespega} boxSize="100%" mb="0px" />
            </Center>
            <FormControl
              h="100%"
              sx={{
                ".chakra-select__wrapper": { h: "100% !important" },
              }}
              isRequired
            >
              <Select
                id="origen"
                name="origen"
                bg="white"
                color="black"
                fontSize="xs"
                value={flightData.origen}
                onChange={handleChange}
                placeholder="Aeropuerto de origen"
                h="100%"
              >
                {airports.map(airports => (
                  <option key={airports}>{airports}</option>
                ))}
              </Select>
            </FormControl>
          </Center>

          <Center
            bg="fly.main"
            borderRadius="lg"
            mr={["0", "0", "0", "0", "4", "4"]}
            w={["100%", "100%", "50%", "50%", "50%", "50%"]}
            mb={["4", "4", "4"]}
            h="45px"
          >
            <Center p="2" w="45px">
              <Image src={AvionAterriza} boxSize="100%" mb="0px" />
            </Center>
            <FormControl
              h="100%"
              sx={{
                ".chakra-select__wrapper": { h: "100% !important" },
              }}
              isRequired
            >
              <Select
                id="destino"
                name="destino"
                bg="white"
                color="black"
                fontSize="xs"
                value={flightData.destino}
                onChange={handleChange}
                placeholder="Aeropuerto de destino"
                h="100%"
              >
                {airports.map(airports => (
                  <option key={airports}>{airports}</option>
                ))}
              </Select>
            </FormControl>
          </Center>
        </Flex>

        {/* Fechas */}
        <Flex
          w={["100%", "100%", "100%", "30%", "30%", "30%"]}
          direction={["column", "column", "row", "row", "row", "row"]}
        >
          <Center
            bg="fly.main"
            borderRadius="lg"
            mr={["0", "0", "4", "4", "4", "4"]}
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            mb={["4", "4", "4"]}
            h="45px"
          >
            <Center p="2" w="45px">
              <Image src={Calendario} boxSize="100%" mb="0px" />
            </Center>
            <Box
              h="100%"
              w="100%"
              sx={{
                ".react-datepicker__input-container": { h: "100%" },
                ".react-datepicker-wrapper": { h: "100%" },
              }}
            >
              <FormControl h="100%" isRequired>
                <DatePicker
                  id="fechaIda"
                  name="fechaIda"
                  dateFormat="dd/MM/yyyy"
                  selected={flightData.fechaIda}
                  onChange={date =>
                    setFlightData({
                      ...flightData,
                      fechaIda: date,
                    })
                  }
                  selectsStart
                  startDate={flightData.fechaIda}
                  endDate={flightData.fechaVuelta}
                  minDate={new Date()}
                  // onFocus={e => (e.target.readOnly = true)}
                  ref={pickerRef1}
                  customInput={
                    <Input
                      h="100%"
                      bg="white"
                      color="gray.800"
                      fontSize="sm"
                      id="fecha"
                      name="fecha"
                    />
                  }
                />
              </FormControl>
            </Box>
          </Center>

          <Center
            bg="fly.main"
            borderRadius="lg"
            mr={["0", "0", "0", "0", "4", "4"]}
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            mb={["4", "4", "4"]}
            h="45px"
          >
            <Center p="2" w="45px">
              <Image src={Calendario} boxSize="100%" mb="0px" />
            </Center>
            <Box
              h="100%"
              w="100%"
              sx={{
                ".react-datepicker__input-container": { h: "100%" },
                ".react-datepicker-wrapper": { h: "100%" },
              }}
            >
              <FormControl h="100%" isRequired>
                <DatePicker
                  disabled={soloIda ? true : false}
                  id="fechaVuelta"
                  name="fechaVuelta"
                  dateFormat="dd/MM/yyyy"
                  selected={flightData.fechaVuelta}
                  onChange={date =>
                    setFlightData({
                      ...flightData,
                      fechaVuelta: date,
                    })
                  }
                  selectsEnd
                  startDate={flightData.fechaIda}
                  endDate={flightData.fechaVuelta}
                  minDate={flightData.fechaIda}
                  // onFocus={e => (e.target.readOnly = true)}
                  ref={pickerRef2}
                  customInput={
                    <Input
                      h="100%"
                      bg="white"
                      color="gray.800"
                      fontSize="sm"
                      id="fecha"
                      name="fecha"
                    />
                  }
                />
              </FormControl>
            </Box>
          </Center>
        </Flex>

        {/* Pasajeros y maletas */}
        <Flex w={["100%", "100%", "100%", "20%", "20%", "20%"]} direction="row">
          <Center
            bg="fly.main"
            borderRadius="lg"
            mr="4"
            w="50%"
            mb={["4", "4", "4"]}
            h="45px"
          >
            <Center p="2" w="45px">
              <Image src={Pasajero} boxSize="100%" mb="0px" />
            </Center>
            <FormControl h="100%" isRequired>
              <NumberInput
                min={1}
                id="pasajeros"
                name="pasajeros"
                value={flightData.pasajeros}
                onChange={valueString =>
                  setFlightData({
                    ...flightData,
                    pasajeros: valueString,
                  })
                }
                minW="60px"
                h="100%"
                sx={{
                  input: { h: "100%" },
                }}
              >
                <NumberInputField bg="white" color="gray.800" fontSize="xs" />
                <NumberInputStepper>
                  <NumberIncrementStepper bg="white" color="gray.400" />
                  <NumberDecrementStepper bg="white" color="gray.400" />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Center>
          <Center
            bg="fly.main"
            borderRadius="lg"
            w="50%"
            mb={["4", "4", "4"]}
            h="45px"
          >
            <Center p="2" w="45px">
              <Image src={Maleta} boxSize="100%" mb="0px" />
            </Center>
            <FormControl h="100%">
              <NumberInput
                min={0}
                id="equipaje"
                name="equipaje"
                value={flightData.equipaje}
                onChange={valueString =>
                  setFlightData({
                    ...flightData,
                    equipaje: valueString,
                  })
                }
                minW="60px"
                h="100%"
                sx={{
                  input: { h: "100%" },
                }}
              >
                <NumberInputField bg="white" color="gray.800" fontSize="xs" />
                <NumberInputStepper>
                  <NumberIncrementStepper bg="white" color="gray.400" />
                  <NumberDecrementStepper bg="white" color="gray.400" />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Center>
        </Flex>
      </Flex>
      <Button onClick={modalOpenClick} variant="accentSolid">
        Enviar
      </Button>
    </Box>
  )
}

export default Cotizador
