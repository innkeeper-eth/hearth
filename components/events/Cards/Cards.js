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
  coda.sort((a, b) => {
    const dateA = new Date(a.values.eventStart)
    const dateB = new Date(b.values.eventStart)
    return dateA - dateB
  })
  return (
    <Flex flexDirection="column">
      {coda.map((event, index) => {
        const {
          Artists: artistsString,
          eventDescription: description,
          eventName: name,
          eventStart: start,
        } = event.values

        const artists = artistsString.split(',')

        if (Date.parse(start) < new Date('2022-3-10')) {
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
