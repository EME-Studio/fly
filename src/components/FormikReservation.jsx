import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { navigate } from "gatsby"

import { Button, Box } from "@chakra-ui/react"
import FormikPhoneInput from "./FormikPhoneInput"

import { useReservationContext } from "../contexts/ReservationContext"

const FormikReservation = () => {
  // FORM DATA HANDLING
  const reservationData = useReservationContext()

  // CONNECTION WITH NETLIFY ENDPOINT
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "reservation", ...data }),
    })
      .then(console.log(data))
      .then(() => navigate("/gracias"))
      .catch(error => alert(error))
  }

  return (
    <Box w="100%">
      <Formik
        initialValues={{
          origen: reservationData.origen,
          destino: reservationData.destino,
          fechaIda: reservationData.fechaIda,
          fechaVuelta: reservationData.fechaVuelta,
          tipo: reservationData.tipo,
          seats: reservationData.seats,
          equipaje: reservationData.equipaje,
          phone: reservationData.phone,
        }}
        enableReinitialize={true}
        onSubmit={data => {
          handleSubmit(data)
        }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .max(14, "Debe de tener 14 caracteres o menos")
            .min(6, "Debe de tener 6 caracteres o más")
            .required("Requerido"),
        })}
      >
        {formik => (
          <Form
            name="reservation"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Field type="hidden" name="form-name" value="empty-leg" />
            <Field type="hidden" name="bot-field" />

            <Field type="hidden" name="origen" id="origen" />
            <Field type="hidden" name="destino" id="destino" />
            <Field type="hidden" name="fechaIda" id="fechaIda" />
            <Field type="hidden" name="fechaVuelta" id="fechaVuelta" />
            <Field type="hidden" name="tipo" id="tipo" />
            <Field type="hidden" name="seats" id="seats" />
            <Field type="hidden" name="equipaje" id="equipaje" />

            <FormikPhoneInput
              name="phone"
              label="Celular"
              setValue={formik.setFieldValue}
            />

            <Button type="submit" variant="accentSolid">
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default FormikReservation
