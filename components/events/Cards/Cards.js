import {
  Flex,
  Grid,
  Heading,
  Text,
  Box,
  Image,
  Tooltip,
} from '@chakra-ui/react'
import Card from '../Card/Card'

const Cards = ({ coda }) => {
  const newCoda = coda.filter((event) => {
    const { eventStart } = event.values
    const start = Date.parse(new Date(eventStart))
    return !isNaN(start) === true
  })
  newCoda.sort((a, b) => {
    const dateA = new Date(a.values.eventStart)
    const dateB = new Date(b.values.eventStart)

    return dateA - dateB
  })
  return (
    <Flex flexDirection="column">
      {newCoda.map((event, index) => {
        const {
          Artists: artistsString,
          eventDescription: description,
          eventName: name,
          eventStart: start,
        } = event.values

        const artists = artistsString.split(',')
        const startDate = Date.parse(start)

        if (startDate < new Date() || isNaN(startDate)) {
          return
        } else {
          return (
            <Card
              key={index}
              header={name}
              desc={description}
              artists={artists}
              date={start}
            />
          )
        }
      })}
    </Flex>
  )
}

export default Cards
