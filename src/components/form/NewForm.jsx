import React, { useState, useEffect, useRef } from "react"

// Images and icons
import AvionAterriza from "../../images/icons/avionaterriza.png"
import AvionDespega from "../../images/icons/aviondespega.png"
import Calendario from "../../images/icons/calendario.png"
import Maleta from "../../images/icons/maleta.png"
import Pasajero from "../../images/icons/pasajero.png"
import PasajeroGris from "../../images/icons/personagris.png"
import CalendarioGris from "../../images/icons/calendariogris.png"
import { ArrowForwardIcon } from "@chakra-ui/icons"

// External libraries and helpers
import { formatDate, formatDateDayFromObject } from "../../helpers/dateHandler"
import { isMobile } from "react-device-detect"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { navigate } from "gatsby"

// Chakra-ui components
import {
  Input,
  FormControl,
  Select,
  Center,
  Image,
  Box,
  Flex,
  Button,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  ModalFooter,
  Heading,
  Text,
} from "@chakra-ui/react"

// Internal data
import { airports } from "../../constants/airports"

// Mobile phone input imports
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

function NewForm({ soloIda }) {
  // FORM DATA HANDLING
  const [flightData, setFlightData] = useState({
    origen: "",
    destino: "",
    fechaIda: new Date(),
    fechaVuelta: "",
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
      body: encode({ "form-name": "contact", ...flightData }),
    })
      .then(() => navigate("/gracias"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  // MODAL HANDLING
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalOpenClick = () => {
    if (flightData.origen.length > 0 && flightData.destino.length > 0) {
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
  }, [isMobile, pickerRef1])

  const pickerRef2 = useRef(null)
  useEffect(() => {
    if (isMobile && pickerRef2.current !== null) {
      pickerRef2.current.input.readOnly = true
    }
  }, [isMobile, pickerRef2])

  // COMPONENT
  return (
    <Box>
      <form
        onSubmit={handleSumbit}
        name="contact"
        id="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <Input type="hidden" name="phone" id="phone" value={flightData.phone} />
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
                    <option>{airports}</option>
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
                    <option>{airports}</option>
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
          <Flex
            w={["100%", "100%", "100%", "20%", "20%", "20%"]}
            direction="row"
          >
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg="rgba(6, 63, 106, 0.4)" />
          <ModalContent borderRadius="none" bg="light" pb="8" px="4">
            <ModalHeader py="10">
              <Heading size="2xl" fontWeight="100" color="fly.main">
                Cotizar Vuelo
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
                  value={flightData.phone}
                  onChange={phone =>
                    setFlightData({ ...flightData, phone: phone })
                  }
                />
              </FormControl>
              <Box p="4" fontSize="sm" color="gray.500">
                <Flex direction="column" mt="4">
                  <Flex mb="1">
                    <Text mr="2">{flightData.origen}</Text>
                    <Box>
                      <ArrowForwardIcon mr="2" />
                    </Box>
                    <Text>{flightData.destino}</Text>
                  </Flex>
                  <Flex mb="2">
                    <Image
                      src={CalendarioGris}
                      bg="blue"
                      width="20px"
                      mb="0"
                      mr="2"
                    />
                    {formatDateDayFromObject(flightData.fechaIda)}
                  </Flex>
                  {flightData.pasajeros > 0 ? (
                    <Flex mb="3">
                      <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                      {flightData.pasajeros}
                    </Flex>
                  ) : null}
                </Flex>
                {flightData.fechaVuelta ? (
                  <Flex direction="column" mt="4">
                    <Flex mb="1">
                      <Text mr="2">{flightData.destino}</Text>
                      <Box>
                        <ArrowForwardIcon mr="2" />
                      </Box>
                      <Text>{flightData.origen}</Text>
                    </Flex>
                    <Flex mb="2">
                      <Image
                        src={CalendarioGris}
                        bg="blue"
                        width="20px"
                        mb="0"
                        mr="2"
                      />
                      {formatDateDayFromObject(flightData.fechaVuelta)}
                    </Flex>
                    {flightData.pasajeros > 0 ? (
                      <Flex mb="3">
                        <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
                        {flightData.pasajeros}
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
      </form>
    </Box>
  )
}

export default NewForm
