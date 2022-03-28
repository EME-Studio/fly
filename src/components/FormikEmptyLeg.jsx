import React, { useState } from "react"

import { Formik, Field, Form, ErrorMessage, setValues, values } from "formik"
import * as Yup from "yup"

import {
  useModalContext,
  useEmptyLegContext,
  useUpdateEmptyLegContext,
} from "../contexts/EmptyLegContext"

import FormikPhoneInput from "./FormikPhoneInput"
import { Button } from "@chakra-ui/react"

const FormikEmptyLeg = () => {
  // FORM DATA HANDLING
  const reservationData = useEmptyLegContext()

  const { onClose } = useModalContext()

  return (
    <Formik
      initialValues={{
        Origen: reservationData.Origen,
        Destino: reservationData.Destino,
        Fecha: reservationData.Fecha,
        Nombre: reservationData.Nombre,
        Apellido: reservationData.Apellido,
        Email: reservationData.Email,
        Phone: reservationData.Phone,
      }}
      enableReinitialize={true}
      onSubmit={data => {
        console.log(data)
        onClose()
      }}
      validationSchema={Yup.object({
        Phone: Yup.string()
          .max(14, "Debe de tener 14 caracteres o menos")
          .min(6, "Debe de tener 6 caracteres o más")
          .required("Requerido"),
      })}
    >
      {formik => (
        <Form
          name="empty-leg"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Field type="hidden" name="form-name" value="empty-leg" />
          <Field type="hidden" name="bot-field" />

          <Field type="hidden" name="Origen" id="Origen" />
          <Field type="hidden" name="Destino" id="Destino" />
          <Field type="hidden" name="Fecha" id="Fecha" />
          <Field type="hidden" name="Tipo" id="Tipo" />
          <Field type="hidden" name="Seats" id="Seats" />

          <FormikPhoneInput
            name="Phone"
            label="Celular"
            setValue={formik.setFieldValue}
          />

          <Button type="submit" variant="accentSolid">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikEmptyLeg
