import React, { useState } from "react"

import AvionAterriza from "../../images/icons/avionaterriza.png"
import AvionDespega from "../../images/icons/aviondespega.png"
import Calendario from "../../images/icons/calendario.png"
import Maleta from "../../images/icons/maleta.png"
import Pasajero from "../../images/icons/pasajero.png"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import { formatDate } from "../../helpers/dateHandler"

import {
  Input,
  FormControl,
  Select,
  Center,
  Image,
  Box,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
  Spacer,
  Heading,
} from "@chakra-ui/react"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { airports } from "../../constants/airports"

function NewForm({ soloIda }) {
  const [flightData, setFlightData] = useState({
    origen: "",
    destino: "",
    fechaIda: new Date(),
    fechaVuelta: "",
    pasajeros: 1,
    equipaje: "",
    email: "",
  })

  const emptyFightData = () => {
    setFlightData({
      origen: "",
      destino: "",
      fechaIda: new Date(),
      fechaVuelta: "",
      pasajeros: 1,
      equipaje: "",
      email: "",
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    console.log(e)
    setFlightData({
      ...flightData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSumbit = e => {
    console.log(e)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...flightData }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalOpenClick = () => {
    console.log(flightData)
    if (flightData.origen.length > 0 && flightData.destino.length > 0) {
      onOpen()
    } else if (flightData.origen.length === 0) {
      alert("Seleccione un aeropuerto de origen")
    } else if (flightData.destino.length === 0) {
      alert("Seleccione un aeropuerto de destino")
    }
  }

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
        <Flex
          direction={["column", "column", "column", "row", "row", "row"]}
          mb="4"
        >
          <Flex
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            mb={[4, 4, 4, 0, 0, 0]}
            direction={["column", "column", "column", "row", "row", "row"]}
          >
            <Center
              bg="fly.main"
              borderRadius="lg"
              mr="4"
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              mb={["4", "4", "4"]}
            >
              <Center p="2" w="45px">
                <Image src={AvionDespega} boxSize="100%" mb="0px" />
              </Center>
              <FormControl isRequired>
                <Select
                  id="origen"
                  name="origen"
                  bg="white"
                  color="black"
                  fontSize="xs"
                  value={flightData.origen}
                  onChange={handleChange}
                  placeholder="Aeropuerto de origen"
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
              mr="4"
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              mb={["4", "4", "4"]}
            >
              <Center p="2" w="45px">
                <Image src={AvionAterriza} boxSize="100%" mb="0px" />
              </Center>
              <FormControl isRequired>
                <Select
                  id="destino"
                  name="destino"
                  bg="white"
                  color="black"
                  fontSize="xs"
                  value={flightData.destino}
                  onChange={handleChange}
                  placeholder="Aeropuerto de destino"
                >
                  {airports.map(airports => (
                    <option>{airports}</option>
                  ))}
                </Select>
              </FormControl>
            </Center>
          </Flex>

          <Flex
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            direction={["column", "column", "column", "row", "row", "row"]}
          >
            <>
              <Center
                bg="fly.main"
                borderRadius="lg"
                mr="4"
                w={["100%", "100%", "100%", "30%", "30%", "30%"]}
                mb={["4", "4", "4"]}
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
                  <FormControl id="fecha" name="fecha" h="100%" isRequired>
                    <DatePicker
                      id="fechaIda"
                      name="fechaIda"
                      selected={flightData.fechaIda}
                      onChange={
                        (date =>
                          setFlightData({
                            ...flightData,
                            fechaIda: date,
                          }),
                        console.log(flightData.fechaIda.getDay))
                      }
                      selectsStart
                      startDate={flightData.fechaIda}
                      endDate={flightData.fechaVuelta}
                      minDate={new Date()}
                      customInput={
                        <Input
                          h="100%"
                          bg="white"
                          color="gray.800"
                          fontSize="sm"
                          id="fecha"
                          name="fecha"
                          fontSize="xs"
                        />
                      }
                    />
                  </FormControl>
                </Box>
              </Center>

              <Center
                bg="fly.main"
                borderRadius="lg"
                mr="4"
                w={["100%", "100%", "100%", "30%", "30%", "30%"]}
                mb={["4", "4", "4"]}
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
                  <FormControl id="fecha" name="fecha" h="100%" isRequired>
                    <DatePicker
                      disabled={soloIda ? true : false}
                      id="fechaVuelta"
                      name="fechaVuelta"
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
                      customInput={
                        <Input
                          h="100%"
                          bg="white"
                          color="gray.800"
                          fontSize="sm"
                          id="fecha"
                          name="fecha"
                          fontSize="xs"
                        />
                      }
                    />
                  </FormControl>
                </Box>
              </Center>
            </>
            <Center
              bg="fly.main"
              borderRadius="lg"
              mr="4"
              w={["100%", "100%", "100%", "20%", "20%", "20%"]}
              mb={["4", "4", "4"]}
            >
              <Center p="2" w="45px">
                <Image src={Pasajero} boxSize="100%" mb="0px" />
              </Center>
              <FormControl isRequired>
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
              mr="4"
              w={["100%", "100%", "100%", "20%", "20%", "20%"]}
              mb={["4", "4", "4"]}
            >
              <Center p="2" w="45px">
                <Image src={Maleta} boxSize="100%" mb="0px" />
              </Center>
              <FormControl>
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
          <ModalOverlay />
          <ModalContent borderRadius="none" bg="light">
            <ModalHeader size="4xl">
              <Heading size="xl" fontWeight="light">
                Cotizar Vuelo
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <Divider />
            <ModalBody>
              Dejanos tu e-mail y nos pondremos en contacto a la brevedad.
              <Flex direction="column">
                <Flex mt="4" mb="0.5">
                  {flightData.origen}
                  <Spacer />
                  <ArrowForwardIcon />
                  <Spacer />
                  {flightData.origen}
                </Flex>
                <Flex mt="1" mb="0.5">
                  <Image src={Calendario} bg="blue" width="20px" mr="2" />
                  {formatDate(flightData.fechaIda)}
                </Flex>
                <Flex mt="1" mb="0.5">
                  <Image src={Pasajero} bg="blue" width="20px" mr="2" />
                  {flightData.pasajeros}
                </Flex>
                {flightData.equipaje ? (
                  <Flex mt="1" mb="0.5">
                    <Image src={Maleta} bg="blue" width="20px" mr="2" />
                    {flightData.equipaje}
                  </Flex>
                ) : null}
              </Flex>
              {flightData.fechaVuelta ? (
                <Flex direction="column">
                  <Flex mt="4" mb="xs">
                    {flightData.origen}
                    <Spacer />
                    <ArrowForwardIcon />
                    <Spacer />
                    {flightData.origen}
                  </Flex>
                  <Flex mt="1" mb="xs">
                    <Image src={Calendario} bg="blue" width="20px" mr="2" />
                    {formatDate(flightData.fechaIda)}
                  </Flex>
                  <Flex mt="1" mb="xs">
                    <Image src={Pasajero} bg="blue" width="20px" mr="2" />
                    {flightData.pasajeros}
                  </Flex>
                  {flightData.equipaje ? (
                    <Flex mt="1" mb="xs">
                      <Image src={Maleta} bg="blue" width="20px" mr="2" />
                      {flightData.equipaje}
                    </Flex>
                  ) : null}
                </Flex>
              ) : null}
              ¡Gracias por elegirnos!
              <FormControl mt="5" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  bg="gray.300"
                  placeholder="Email"
                  value={flightData.email}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button form="contact" type="submit" onClick={onClose}>
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
