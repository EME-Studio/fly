import React, { useContext, useEffect } from "react"
import { Box, VStack, useRadio, useRadioGroup } from "@chakra-ui/react"

import { EmptyLegsContext } from "../contexts/EmptyLegsContext"

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
function RadioButtons(props) {
  // Radio buttons options
  const options = [
    `Empty Leg $${props.emptyLegPrecio} USD`,
    `Empty Seat $${props.emptySeatPrecio} USD`,
  ]

  const { reservaState } = useContext(EmptyLegsContext)
  const [emptyLegReserva, setEmptyLegReserva] = reservaState

  const updateReserva = reserveType => {
    setEmptyLegReserva({ ...emptyLegReserva, tipoDeReserva: reserveType })
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "flight",
    onChange: updateReserva,
  })

  const group = getRootProps()

  return (
    <VStack {...group} align="left">
      {options.map(value => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </VStack>
  )
}

export default RadioButtons
