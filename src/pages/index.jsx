import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import { useState } from "react"

import { FormProvider } from "../contexts/FormContext"
import NewForm from "../components/form/NewForm"

import { Heading, Flex, Box, Button, Container } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import Avion from "../images/avion_fly.jpeg"

const IndexPage = () => {
  // Set basic leg form quantity
  const [legs, setLegs] = useState([1, 2])

  // Add leg form
  function agregarVuelo() {
    setLegs([...legs, `${legs.length + 1}`])
  }

  return (
    <FormProvider>
      <Layout displayHeader={true} headerRojo={false}>
        <Seo title="Home" />

        <Box
          w="full"
          h="100%"
          bgImage={Avion}
          bgSize="cover"
          bgPosition="center center"
          bgRepeat="no-repeat"
          bgAttachment={["scroll", "scroll", "scroll", "fixed", "fixed"]}
        >
          <Flex
            h="100%"
            w="100%"
            bgColor="rgba(0, 0, 0, 0.5)"
            direction="column"
            align="center"
            justifyContent="center"
          >
            <Container
              maxW="container.xl"
              mt={["80px", "10vh", "10vh", "10vh", "10vh"]}
              centerContent
            >
              <Heading
                as="h1"
                size="3xl"
                display={["none", "none", "flex", "flex", "flex"]}
                align="center"
                m="10"
                color="white"
              >
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
                </TabList>

                <TabPanels>
                  <TabPanel align="right">
                    <NewForm soloIda={true} />
                  </TabPanel>
                  <TabPanel align="right">
                    <NewForm soloIda={false} />
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
