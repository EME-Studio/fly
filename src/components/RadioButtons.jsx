import React from "react"
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
        px={[4, 4, 3, 2, 2]}
        py={[4, 4, 3, 2, 2]}
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
    {
      type: "Empty Leg",
      price: emptyLegPrecio,
      text: `Empty Leg $${emptyLegPrecio} USD`,
    },
    {
      type: "Empty Seat",
      price: emptySeatPrecio,
      text: `Empty Seat $${emptySeatPrecio} USD`,
    },
  ]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "flight",
    onChange: updateTipoDeReserva,
  })

  const group = getRootProps()

  // IPHONE KEYBOARD FIX
  // const pickerRef1 = useRef(null)
  // useEffect(() => {
  //   if (
  //     isMobile &&
  //     pickerRef1.current == undefined &&
  //     pickerRef1.current !== null
  //   ) {
  //     pickerRef1.current.input.readOnly = true
  //   }
  // }, [isMobile, pickerRef1])

  // if (tipo.includes("Empty Leg") && emptyLegPrecio > 0 || (emptyLegPrecio))

  return (
    <VStack {...group} align="left" spacing="14px" width="100%">
      {options.map(value => {
        const radio = getRadioProps({ value: value.text })
        {
          return value.price > 0 ? (
            <Flex direction="row" w="100%">
              <Box minW="140px" w="100%">
                <RadioCard key={value.text} {...radio}>
                  {value.text}
                </RadioCard>
              </Box>
              {value.type === "Empty Seat" ? (
                <FormControl isRequired maxW="100px">
                  <NumberInput
                    // ref={pickerRef1}
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
                    <NumberInputField
                      bg="white"
                      color="gray.800"
                      fontSize="xs"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper bg="white" color="gray.400" />
                      <NumberDecrementStepper bg="white" color="gray.400" />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              ) : null}
            </Flex>
          ) : null
        }
      })}
    </VStack>
  )
}

export default RadioButtons
