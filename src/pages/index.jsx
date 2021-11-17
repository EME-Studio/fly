import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import { useState } from "react"

import { FormProvider } from "../contexts/FormContext"
import FlyForm from "../components/form/Form"
import NewForm from "../components/form/NewForm"

import { Heading, Flex, Box, Button, Container } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const IndexPage = () => {
  // Set basic leg form quantity
  const [legs, setLegs] = useState([1, 2])

  // Add leg form
  function agregarVuelo() {
    setLegs([...legs, `${legs.length + 1}`])
  }

  return (
    <FormProvider>
      <Layout>
        <Seo title="Home" />

        <Box
          w="full"
          minH="100vh"
          bgImage="url('/avion-estacionado.jpeg')"
          bgSize="cover"
          bgPosition="center center"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
        >
          <Flex
            minH="100vh"
            bgColor="rgba(0, 0, 0, 0.5)"
            direction="column"
            align="center"
          >
            <Container maxW="container.xl" mt="30vh" centerContent>
              <Heading as="h1" size="3xl" align="center" m="10" color="white">
                Tu libertad, nuestro servicio
              </Heading>
              <Tabs variant="unstyled" color="white">
                <TabList>
                  <Tab
                    _selected={{
                      borderBottom: "2px",
                      borderColor: "fly.accent",
                    }}
                  >
                    SOLO IDA
                  </Tab>
                  <Tab
                    _selected={{
                      borderBottom: "2px",
                      borderColor: "fly.accent",
                    }}
                  >
                    IDA Y VUELTA
                  </Tab>
                  <Tab
                    _selected={{
                      borderBottom: "2px",
                      borderColor: "fly.accent",
                    }}
                  >
                    MULTILEG
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel align="right">
                    <NewForm />
                  </TabPanel>
                  <TabPanel align="right">
                    <FlyForm
                      flightsArray={[1, 2]}
                      addFlights={false}
                      displayFlightName={true}
                    />
                  </TabPanel>
                  <TabPanel align="right">
                    <FlyForm
                      flightsArray={[1, 2, 3]}
                      addFlights={true}
                      displayFlightName={true}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Container>
          </Flex>
        </Box>
      </Layout>
    </FormProvider>
  )
}

export default IndexPage
