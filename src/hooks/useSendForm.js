import { useReservationContext } from "../contexts/ReservationContext"
import { navigate } from "gatsby"

// CONNECTION WITH NETLIFY ENDPOINT
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const useSendForm = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...reservationData }),
  })
    .then(alert("yendo a la pagina de confirmacion"))
    .then(console.log(reservationData))
    .then(() => navigate("/gracias"))
    .catch(error => alert(error))

  e.preventDefault()
}
