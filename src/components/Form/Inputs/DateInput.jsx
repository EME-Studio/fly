import React from "react"

import { useState } from "react"

import { Center, Image, Box, Input } from "@chakra-ui/react"
import DatePicker from "react-datepicker"

function DateInput() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Center bg="fly.main" borderRadius="lg" mr="4" w="40%">
      <Center p="2" w="45px">
        <Image src="./icons/calendario.png" boxSize="100%" mb="0px" />
      </Center>
      <Box
        h="100%"
        w="100%"
        sx={{
          ".react-datepicker__input-container": { h: "100%" },
          ".react-datepicker-wrapper": { h: "100%" },
        }}
      >
        <DatePicker
          selected={startDate}
          onChange={date => {
            setStartDate(date)
          }}
          customInput={
            <Input h="100%" bg="white" color="gray.800" fontSize="sm" />
          }
        />
      </Box>
    </Center>
  )
}

export default DateInput
