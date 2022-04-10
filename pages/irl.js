import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import AmsGate from '../components/AmsGate'

const Irl = () => {
  return (
    <>
      <Box bg="#000" p={'2em'}>
        <Link href="/">
          <a>
            <Image src={'/logo_night.svg'} h={'75px'} />
          </a>
        </Link>
      </Box>
      <Flex
        margin={'0 auto'}
        bg="#000"
        h={'300px'}
        justifyContent="center"
        alignItems="center"
      >
        <AmsGate />
      </Flex>
      <Flex
        bg={
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
        }
        h={'70px'}
        justifyContent="center"
        alignItems="center"
        fontSize="1.75rem"
        fontWeight="700"
        filter="drop-shadow(5px 0 4px #000)"
        fontFamily="Montserrat, sans-serif"
      >
        <Text>April 21st - Amsterdam</Text>
      </Flex>
      <Grid
        gridTemplateColumns={{ base: '1fr', md: '3fr 1fr' }}
        gridGap=".5em"
        margin={'0 auto'}
        width="90%"
        pt={'20px'}
        pb={'2em'}
      >
        <Panel>
          <Heading
            fontFamily="Irish Grover, cursive"
            letterSpacing="2px"
            opacity=".8"
            fontSize="3rem"
            pb={'0.25em'}
          >
            Our first IRL party
          </Heading>
          <Text
            fontSize="1.25rem"
            fontFamily="Montserrat, sans-serif"
            pb={'1em'}
          >
            We're hosting a real life pop up party on Thursday, April 21st in
            Amsterdam (location TBA)!
          </Text>
          <Text
            fontSize="1.25rem"
            fontFamily="Montserrat, sans-serif"
            pb={'1em'}
          >
            For those who can't attend in person, the event will be streamed
            into our Decentraland location. The metaverse participants will be
            looking over the DJ's shoulder into the IRL crowd. The IRL crowd
            will be viewing past the DJ into the Inn.
          </Text>
          <Text fontSize="1.25rem" fontFamily="Montserrat, sans-serif">
            More details coming soon! <br />
            Follow us on
            <Link href="https://twitter.com/innkeeperdoteth">
              <a> twitter </a>
            </Link>
            or join our
            <Link href="https://discord.gg/SjzF2AvPkT">
              <a> discord for more information! </a>
            </Link>
          </Text>
        </Panel>
        <Panel>
          <Heading
            fontFamily="Irish Grover, cursive"
            letterSpacing="2px"
            opacity=".8"
            fontSize="3rem"
            pb={'.1em'}
            textAlign="center"
          >
            Tickets
          </Heading>
          <Text
            pb={'.25em'}
            fontSize="1.25rem"
            fontFamily="Montserrat, sans-serif"
            textAlign="center"
          >
            Total of 150 tickets available.
          </Text>
          <Link href="https://www.eventbrite.com/e/the-innkeeper-irl-a-mixed-reality-party-tickets-318459028527">
            <a>
              <Button
                w={'100%'}
                size={'lg'}
                fontSize={'1.5em'}
                fontWeight={'700'}
                fontFamily={'Monts'}
                fontFamily="Montserrat, sans-serif"
              >
                €5 Ticket
              </Button>
            </a>
          </Link>
          <Text textAlign="center" pb={'4em'} pt={'1em'}>
            Available for <br />
            €10 at the door.
          </Text>
          <Text>
            DM @innkeeperdoteth to get a ticket voucher if you have a melody.
          </Text>
        </Panel>
      </Grid>
    </>
  )
}

const Panel = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      bg="#E8D3B6"
      borderRadius="5px"
      py="2em"
      px="1em"
      color="#000"
    >
      {children}
    </Flex>
  )
}

export default Irl
