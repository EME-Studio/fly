import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

// Chakra-ui components
import { Container, Flex } from "@chakra-ui/react"

// Other external components
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css"

// Internal components
import Slide from "../components/Slide"

// Data
import { servicesData } from "../constants/servicesData"

const Servicio = () => (
  <Layout displayHeader={true} headerRojo={true}>
    <Seo title="Servicio" />

    <Flex minH="100%" justifyContent="center" alignItems="center">
      <Container
        maxW="container.xl"
        sx={{
          ".splide__arrow svg": { fill: "fly.main" },
          ".splide__arrow svg:hover": { fill: "fly.main" },
          ".splide__pagination__page.is-active": { background: "fly.main" },
          ".splide__pagination": { position: "absolute", bottom: "0px" },
          ".splide__track": { paddingY: "20px" },
          "@media only screen and (max-width: 48em)": {
            ".splide__arrow": { display: "none" },
          },
        }}
      >
        <Splide>
          {servicesData.map((service, index) => (
            <SplideSlide key={index}>
              <Slide
                image={service.image}
                title={service.title}
                content={service.content}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </Flex>
  </Layout>
)

export default Servicio
