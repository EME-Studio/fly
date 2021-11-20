import React, { useState } from "react"

import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

function NewForm() {
  const [flightData, setFlightData] = useState({
    test: "",
    origen: "",
    destino: "",
    fecha: "",
    pasajeros: "",
    equipaje: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFlightData({
      ...flightData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSumbit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...flightData }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSumbit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Test with Chakra-ui form */}
      <FormControl id="test" name="test">
        <FormLabel>Email address</FormLabel>
        <Input
          id="test"
          name="test"
          type="text"
          value={flightData.test}
          onChange={handleChange}
          placeholder="Here is a sample placeholder"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <label htmlFor="origen">Origen</label>
      <input
        id="origen"
        name="origen"
        type="text"
        onChange={handleChange}
        value={flightData.origen}
        placeholder="Aeropuerto de origen"
      />
      <label htmlFor="destino">Destino</label>
      <input
        id="destino"
        name="destino"
        type="text"
        onChange={handleChange}
        value={flightData.destino}
        placeholder="Aeropuerto de destino"
      />
      <label htmlFor="fecha">Fecha</label>
      <input
        id="fecha"
        name="fecha"
        type="text"
        onChange={handleChange}
        value={flightData.fecha}
        placeholder="Fecha"
      />
      <label htmlFor="pasajeros">Pasajeros</label>
      <input
        id="pasajeros"
        name="pasajeros"
        type="text"
        onChange={handleChange}
        value={flightData.pasajeros}
        placeholder="Pasajeros"
      />
      <label htmlFor="equipaje">Equipaje</label>
      <input
        id="equipaje"
        name="equipaje"
        type="text"
        onChange={handleChange}
        value={flightData.equipaje}
        placeholder="Equipaje"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewForm
