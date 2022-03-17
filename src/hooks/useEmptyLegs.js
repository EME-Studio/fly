import { graphql, useStaticQuery } from "gatsby"

export default function useEmptyLegs() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiEmptyLegs {
        nodes {
          data {
            id
            attributes {
              AeropuertoDeDestino
              AeropuertoDeOrigen
              FechaDeSalida
              TipoDeAvion
              CantidadEmptySeats
              PrecioEmptySeat
              PrecioEmptyLeg
              HorarioDeSalida
              Capacidad
            }
          }
        }
      }
    }
  `)
  return result
}
