import React, { useContext, useEffect } from "react"
import {
  Box,
  VStack,
  useRadio,
  useRadioGroup,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
} from "@chakra-ui/react"

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        bgColor="gray.300"
        boxShadow="2xl"
        fontSize="sm"
        _checked={{
          bg: "fly.main",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function RadioButtons({
  emptyLegPrecio,
  emptySeatPrecio,
  updateTipoDeReserva,
  updateSeats,
  tipo,
  seats,
}) {
  // Radio buttons options
  const options = [
    `Empty Leg $${emptyLegPrecio} USD`,
    `Empty Seat $${emptySeatPrecio} USD`,
  ]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "flight",
    onChange: updateTipoDeReserva,
  })

  const group = getRootProps()

  return (
    <VStack {...group} align="left" spacing="14px">
      {options.map(value => {
        const radio = getRadioProps({ value })
        return (
          <Flex direction="row" w="100%">
            <Box minW="140px" w="100%">
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            </Box>
            {value.includes("Empty Seat") ? (
              <FormControl isRequired maxW="100px">
                <NumberInput
                  isDisabled={tipo.includes("Empty Seat") ? false : true}
                  min={1}
                  id="pasajeros"
                  name="pasajeros"
                  value={seats}
                  onChange={valueString => updateSeats(valueString)}
                  w="80px"
                  h="100%"
                  ml="14px"
                  sx={{
                    input: { h: "100%" },
                    "chakra-numberinput": { h: "100%" },
                  }}
                >
                  <NumberInputField bg="white" color="gray.800" fontSize="xs" />
                  <NumberInputStepper>
                    <NumberIncrementStepper bg="white" color="gray.400" />
                    <NumberDecrementStepper bg="white" color="gray.400" />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            ) : null}
          </Flex>
        )
      })}
    </VStack>
  )
}

export default RadioButtons
