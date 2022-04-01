import React from "react"

// Images and icons
import PasajeroGris from "../images/icons/personagris.png"
import CalendarioGris from "../images/icons/calendariogris.png"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import { Image, Box, Flex, Text } from "@chakra-ui/react"

const FlightData = ({
  origen,
  destino,
  fechaIda,
  fechaVuelta,
  tipo,
  seats,
  pasajeros,
}) => {
  return (
    <Box p="4" fontSize="sm" color="gray.500">
      <Flex direction="column" mt="4">
        <Flex mb="3">
          <Text mr="2">{origen}</Text>
          <Box>
            <ArrowForwardIcon mr="2" />
          </Box>
          <Text>{destino}</Text>
        </Flex>
        <Flex mb="3">
          <Image src={CalendarioGris} bg="blue" width="20px" mb="0" mr="2" />
          <Text>{fechaIda}</Text>
        </Flex>

        {fechaVuelta ? (
          <>
            <Flex mb="3">
              <Text mr="2">{destino}</Text>
              <Box>
                <ArrowForwardIcon mr="2" />
              </Box>
              <Text>{origen}</Text>
            </Flex>
            <Flex mb="3">
              <Image
                src={CalendarioGris}
                bg="blue"
                width="20px"
                mb="0"
                mr="2"
              />
              <Text>{fechaVuelta}</Text>
            </Flex>
          </>
        ) : null}

        <Flex mb="3">{tipo}</Flex>
        {pasajeros > 0 ? (
          <Flex mb="3">
            <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
            {pasajeros}
          </Flex>
        ) : null}
      </Flex>
      {tipo ? (
        tipo.includes("Seat") ? (
          <Flex mb="3">
            <Image src={PasajeroGris} width="20px" mb="0" mr="2" />
            {seats}
          </Flex>
        ) : null
      ) : null}
    </Box>
  )
}

export default FlightData
