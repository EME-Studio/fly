import React, { useContext } from "react"
import useEmptyLegs from "../hooks/useEmptyLegs"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import EmptyLegCard from "../components/EmptyLegCard"

import { EmptyLegContextProvider } from "../contexts/EmptyLegContext"

import { Box, Flex } from "@chakra-ui/react"

import Avion from "../images/avion_fly.jpeg"
import ReservationModal from "../components/ReservationModal"

function EmptyLegs() {
  // Call strapi data
  const response = useEmptyLegs()
  const emptyLegs = response.allStrapiEmptyLegs.nodes[0].data

  // Sort empty legs array by date
  emptyLegs.sort(function (a, b) {
    return (
      new Date(a.attributes.FechaDeSalida) -
      new Date(b.attributes.FechaDeSalida)
    )
  })

  // Make date more readable
  function dateFormat(date) {
    let newDate = new Date(date)
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`
  }

  return (
    <Layout displayHeader={true} headerRojo={false}>
      <EmptyLegContextProvider>
        <Seo title="Empty Legs" />

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
            {/* Return a empty leg flight if the date is bigger than current date */}
            {emptyLegs.map(emptyLeg => {
              return new Date(emptyLeg.attributes.FechaDeSalida) >=
                new Date() ? (
                <EmptyLegCard
                  key={emptyLeg.id}
                  origen={emptyLeg.attributes.AeropuertoDeOrigen}
                  destino={emptyLeg.attributes.AeropuertoDeDestino}
                  fecha={dateFormat(emptyLeg.attributes.FechaDeSalida)}
                  tipoDeAvion={emptyLeg.attributes.TipoDeAvion}
                  emptyLegPrecio={emptyLeg.attributes.PrecioEmptyLeg}
                  emptySeatCantidad={emptyLeg.attributes.CantidadEmptySeats}
                  emptySeatPrecio={emptyLeg.attributes.PrecioEmptySeat}
                  horario={emptyLeg.attributes.HorarioDeSalida}
                  capacidad={emptyLeg.attributes.Capacidad}
                />
              ) : null
            })}
          </Box>
        </Box>
        <ReservationModal />
      </EmptyLegContextProvider>
    </Layout>
  )
}

export default EmptyLegs
