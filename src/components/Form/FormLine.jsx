import React from "react"

import { useState } from "react"

import AirportInput from "./Inputs/AirportInput"
import DateInput from "./Inputs/DateInput"
import NumbersInput from "./Inputs/NumbersInput"

import { Flex, Box, Text, FormLabel } from "@chakra-ui/react"

function FormLine(props) {
  const [formLineData, setFormLineData] = useState()

  const [origen, setOrigen] = useState()
  const [destino, setDestino] = useState()
  const [fecha, setFecha] = useState()
  const [personas, setPersonas] = useState()
  const [equipaje, setEquipaje] = useState()

  const getLineData = () => {
    setFormLineData({
      origen: origen,
      destino: destino,
      fecha: fecha,
      personas: personas,
      equipaje: equipaje,
    })
  }

  const sendDataToParent = index => {
    // the callback. Use a better name
    console.log(index)
    setOrigen(index)
  }

  return (
    <Box align="left">
      <Text>{`Vuelo ${props.flight}`}</Text>
      <Flex
        mb="5"
        direction={["column", "column", "column", "row", "row", "row"]}
      >
        <Flex
          w={["100%", "100%", "100%", "50%", "50%", "50%"]}
          mb={[4, 4, 4, 0, 0, 0]}
        >
          {/* Departure Airport */}
          <AirportInput defValue="Origen" sendDataToParent={sendDataToParent} />
          {/* Destintation Airport */}
          <AirportInput defValue="Destino" />
        </Flex>

        <Flex w={["100%", "100%", "100%", "50%", "50%", "50%"]}>
          {/* Date Picker*/}
          <DateInput />

          {/* Number of People */}
          <NumbersInput />

          {/* Number of Lugagge */}
          <NumbersInput />
        </Flex>
      </Flex>
    </Box>
  )
}

export default FormLine
