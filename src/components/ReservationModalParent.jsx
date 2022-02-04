import React, { useContext } from "react"

import ReservationModal from "./ReservationModal"
import { EmptyLegsContext } from "../contexts/EmptyLegsContext"

const ReservationModalParent = () => {
  // Call context data
  const { reservaState } = useContext(EmptyLegsContext)
  const [emptyLegReserva, setEmptyLegReserva] = reservaState

  return (
    <ReservationModal
      title="Empty Leg"
      origen={emptyLegReserva.origen}
      destino={emptyLegReserva.destino}
      fechaIda={emptyLegReserva.fecha}
      pasajeros={emptyLegReserva.tipoDeReserva}
      tipoDeReserva={emptyLegReserva.tipoDeReserva}
    />
  )
}

export default ReservationModalParent
