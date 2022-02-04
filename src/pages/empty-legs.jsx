import React from "react"
import useEmptyLegs from "../hooks/useEmptyLegs"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import EmptyLegCard from "../components/EmptyLegCard"
import ReservationModal from "../components/ReservationModal"
import { EmptyLegsProvider } from "../contexts/EmptyLegsContext"

import { Box, Container, Flex } from "@chakra-ui/react"

import Avion from "../images/avion_fly.jpeg"

function EmptyLegs() {
  const response = useEmptyLegs()
  const emptyLegs = response.allStrapiEmptyLegs.nodes[0].data
  console.log(emptyLegs)

  return (
    <Layout displayHeader={true} headerRojo={false}>
      <Seo title="Empty Legs" />

      <EmptyLegsProvider>
        <Box
          w="full"
          h="50%"
          bgImage={Avion}
          bgSize="cover"
          bgPosition="center center"
          bgRepeat="no-repeat"
          bgAttachment={["scroll", "scroll", "scroll", "fixed", "fixed"]}
        >
          <Flex
            h="100%"
            w="100%"
            bg="linear-gradient(180deg, rgba(6,63,106,0.9) 0%, rgba(6,63,106,0.4) 100%)"
            direction="column"
            align="center"
            justifyContent="center"
          />
        </Box>
        <Box bgColor="gray.100">
          <Box py="50px !important">
            {emptyLegs.map(emptyLeg => (
              <EmptyLegCard
                key={emptyLeg.id}
                origen={emptyLeg.attributes.AeropuertoDeOrigen}
                destino={emptyLeg.attributes.AeropuertoDeDestino}
                fecha={emptyLeg.attributes.FechaDeSalida}
              />
            ))}
          </Box>
        </Box>
        <ReservationModal />
      </EmptyLegsProvider>
    </Layout>
  )
}

export default EmptyLegs
