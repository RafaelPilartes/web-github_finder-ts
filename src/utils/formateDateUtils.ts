export const getMonth = (month: number) => {
  let currentMonth

  switch (month) {
    case 1:
      currentMonth = 'Janeiro'
      break
    case 2:
      currentMonth = 'Fevereiro'
      break
    case 3:
      currentMonth = 'Março'
      break
    case 4:
      currentMonth = 'Abril'
      break
    case 5:
      currentMonth = 'Maio'
      break
    case 6:
      currentMonth = 'Junho'
      break
    case 7:
      currentMonth = 'Julho'
      break
    case 8:
      currentMonth = 'Agosto'
      break
    case 9:
      currentMonth = 'Setembro'
      break
    case 10:
      currentMonth = 'Outubro'
      break
    case 11:
      currentMonth = 'Novembro'
      break
    case 12:
      currentMonth = 'Desembro'
      break

    default:
      currentMonth = 'Janeiro'
      break
  }

  return currentMonth
}

export const formateShortDateTimeStamp = (date: any) => {
  const shortDate = new Date(date._seconds * 1000).toLocaleDateString()

  return shortDate
}

export const formateDate_TimeStamp = (date: any) => {
  const dateStamp = new Date(date._seconds * 1000)

  const month = dateStamp.getMonth()
  const day = dateStamp.getDate()
  const year = dateStamp.getFullYear()

  const fullDate = `${day} de ${getMonth(month + 1)} de ${year} `

  return fullDate
}

export const formateDateTimeStamp = (date: any) => {
  const dateStamp = new Date(date)

  const month = dateStamp.getMonth()
  const day = dateStamp.getDate()
  const year = dateStamp.getFullYear()

  const fullDate = `${day} de ${getMonth(month + 1)} de ${year} `

  return fullDate
}

export const formateFirebaseDateTimeStamp = (date: any) => {
  const dateStamp = new Date(date.seconds * 1000)

  const month = dateStamp.getMonth()
  const day = dateStamp.getDate()
  const year = dateStamp.getFullYear()

  const fullDate = `${day} de ${getMonth(month + 1)} de ${year} `

  return fullDate
}
