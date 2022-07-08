export const getDateVars = ({ eventStart }) => {
  const date = new Date(Date.parse(eventStart))
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.toLocaleString('default', { day: 'numeric' })
  const dayName = date.toLocaleString('default', { weekday: 'short' })
  const time = date.toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  const isMelody = dayName === 'Tue' || dayName === 'Thu'

  return {
    date,
    month,
    day,
    dayName,
    time,
    isMelody,
  }
}
