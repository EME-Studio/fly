import React, { useState, useEffect } from "react"

import { airports } from "../../../constants/airports"

import { Image, Select, Center, Button } from "@chakra-ui/react"

function AirportInput({ defValue, sendDataToParent }) {
  const [value, setValue] = useState("")
  const handleChange = event => setValue(event.target.value)

  return (
    <Center bg="fly.main" borderRadius="lg" mr="4" w="50%">
      <Center p="2" w="45px">
        <Image src="./icons/aviondespega.png" boxSize="100%" mb="0px" />
      </Center>
      <Select
        placeholder={defValue}
        fontSize="sm"
        bg="white"
        color="gray.800"
        value={value}
        onChange={handleChange}
      >
        {airports.map(airports => (
          <option>{airports}</option>
        ))}
      </Select>
    </Center>
  )
}

export default AirportInput
