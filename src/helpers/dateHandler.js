export const formatDate = date => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = "0" + month
  if (day.length < 2) day = "0" + day

  return [year, month, day].join("-")
}

const dates = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
]

export const formatDateDay = date => {
  let dateString = date
  let dateParts = dateString.split("/")

  let formattedDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])

  return `${dates[formattedDate.getDay() - 1]}  ${dateParts[0]}/${dateParts[1]}`
}

export const formatDateDayFromObject = date => {
  return `${dates[date.getDay() - 1]}  ${date.getDate()}/${date.getMonth() + 1}`
}
