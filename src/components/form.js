import * as React from "react"

import {
  Flex,
  Text,
  FormLabel,
  FormControl,
  Input,
  Button,
  Center,
} from "@chakra-ui/react"

import { CheckCircleIcon } from "@chakra-ui/icons"

import { useState } from "react"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const FlyForm = ({ formName }) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Flex direction="column" align="flex-start">
      <Text fontSize="lg" color="white">
        {formName}
      </Text>
      <FormControl id="email">
        <Flex>
          <Center bg="primary.main" borderRadius="lg" mr="4">
            <Center p="3">
              <CheckCircleIcon color="white" />
            </Center>
            <Input type="email" bg="white" />
          </Center>
          <Center bg="primary.main" borderRadius="lg" mr="4">
            <Center p="3">
              <CheckCircleIcon color="white" />
            </Center>
            <Input type="email" bg="white" />
          </Center>

          <Center bg="primary.main" borderRadius="lg" mr="4">
            <Center p="3">
              <CheckCircleIcon color="white" />
            </Center>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </Center>
        </Flex>
      </FormControl>
    </Flex>
  )
}

export default FlyForm
