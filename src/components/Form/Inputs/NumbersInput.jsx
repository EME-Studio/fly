import React from "react"

import {
  Center,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

function NumbersInput() {
  return (
    <Center bg="fly.main" borderRadius="lg" mr="4" w="30%">
      <Center p="2" w="45px">
        <Image src="./icons/pasajero.png" boxSize="100%" mb="0px" />
      </Center>
      <NumberInput fontSize="sm" min={1}>
        <NumberInputField bg="white" color="gray.800" />
        <NumberInputStepper>
          <NumberIncrementStepper bg="white" color="gray.400" />
          <NumberDecrementStepper bg="white" color="gray.400" />
        </NumberInputStepper>
      </NumberInput>
    </Center>
  )
}

export default NumbersInput
