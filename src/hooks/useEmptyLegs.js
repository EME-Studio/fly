import { graphql, useStaticQuery } from "gatsby"

export default function useEmptyLegs() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiEmptyLegs {
        edges {
          node {
            data {
              attributes {
                TipoDeAvion
                FechaDeSalida
                FechaDeLlegada
                AeropuertoDeOrigen
                AeropuertoDeDestino
              }
            }
          }
        }
      }
    }
  `)
  return result
}
