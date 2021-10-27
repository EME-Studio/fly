import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useState } from "react"

import FlyForm from "../components/form"
import Cotizador from "../components/cotizador"

import { Heading, Flex, Box, Button } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const IndexPage = () => {
  // Set basic leg form quantity
  const [legs, setLegs] = useState([1, 2])

  // Add leg form
  function agregarVuelo() {
    setLegs([...legs, `${legs.length + 1}`])
  }

  return (
    <Layout>
      <Seo title="Home" />

      <Box
        w="full"
        minH="100vh"
        bgImage="url('/plane.jpeg')"
        bgSize="cover"
        bgPosition="center center"
        bgRepeat="no-repeat"
      >
        <Flex
          w="full"
          minH="100vh"
          bgColor="rgba(0, 0, 0, 0.6)"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading as="h1" size="4xl" align="center" m="10" color="white">
            Tu libertad, nuestro servicio
          </Heading>

          <Box align="center" w="800px" h="200px">
            <Tabs variant="unstyled" color="white">
              <TabList>
                <Tab
                  _selected={{
                    borderBottom: "2px",
                    borderColor: "primary.accent",
                  }}
                >
                  SOLO IDA
                </Tab>
                <Tab
                  _selected={{
                    borderBottom: "2px",
                    borderColor: "primary.accent",
                  }}
                >
                  IDA Y VUELTA
                </Tab>
                <Tab
                  _selected={{
                    borderBottom: "2px",
                    borderColor: "primary.accent",
                  }}
                >
                  MULTILEG
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <FlyForm />
                  <Cotizador />
                </TabPanel>
                <TabPanel>
                  <FlyForm formName="Vuelo de Ida" />
                  <FlyForm formName="Vuelo de Vuelta" />
                  <Cotizador />
                </TabPanel>
                <TabPanel>
                  {legs.map(leg => (
                    <FlyForm formName={`Leg ${leg}`} />
                  ))}
                  <Button variant="accentOutline" onClick={agregarVuelo}>
                    + Agregar vuelo
                  </Button>
                  <Cotizador />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default IndexPage
