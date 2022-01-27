import React from "react"
import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"

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
function RadioButtons() {
  const options = ["$ 800 USD Empty Leg", "$ 300 USD Empty Sit"]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "flight",
    defaultValue: "$ 800 USD Empty Leg",
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map(value => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

export default RadioButtons
