/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"
import { Box } from "@chakra-ui/layout"

const Layout = ({ children, headerRojo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box minH="100vh" h="1px" display="flex" flexDirection="column">
      {/* iphone zooming fix */}
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Helmet>
      <Header
        conColor={headerRojo ? true : false}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <Box as="main" h="100%">
        {children}
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
