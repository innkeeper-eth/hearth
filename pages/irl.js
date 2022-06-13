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
import { Nav } from '../components/Hero'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Irl = () => {
  return (
    <>
      <Nav irl={'true'} />
      <Flex
        margin={'0 auto'}
        bg="#000"
        h={{ base: '0', md: '300px' }}
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
        <a href="https://www.eventbrite.com/e/the-innkeeper-irl-a-mixed-reality-party-tickets-318459028527">
          <Text>April 21st - Amsterdam</Text>
        </a>
      </Flex>
      <Grid
        gridTemplateColumns={{ base: '1fr', md: '3fr 1fr' }}
        gridGap=".5em"
        margin={'0 auto'}
        width={{ base: '100%', lg: '80%' }}
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
          <Text></Text>
          <Text
            fontSize="1.25rem"
            fontFamily="Montserrat, sans-serif"
            pb={'1em'}
          >
            📅 Thursday, April 21st / 9pm - 3am CEST
            <br />
            📍{' '}
            <a href="https://goo.gl/maps/KVdXuVCV8WjvPnRn7">
              <u>Lola Luid 44 Derkinderenstraat 1062 BJ Amsterdam</u>
            </a>
          </Text>
          <Text pb={'1em'}>
            Innkeeper.eth is hosting it's FIRST in real life pop-up party!
          </Text>
          <Text pb={'1em'}>
            Each week, Innkeeper hosts live performances in Decentraland every
            Tuesday &amp; Thursday. This Thursday we're breaking the digital
            firewall and hosting a party in real life that will be streamed into
            the Decentraland live event!
          </Text>
          <Text pb={'1em'}>
            We have a full lineup of DJs and Innkeeper host Pipaluk.io will be
            VJing, taking user submited NFTs to be visually remixed between both
            worlds on the stream. Everyone who attends will receive a newly
            comissioned Music NFT, which can be used royalty free by holders.
          </Text>
          <Text>
            Come join us this Thursday! Our underground pop-up venue has a
            stocked bar, and everyone who buys a ticket or has 5x melodies gets
            a free drink voucher!
          </Text>
        </Panel>
        <Panel>
          <Heading
            fontFamily="Irish Grover, cursive"
            letterSpacing="2px"
            opacity=".8"
            fontSize="3rem"
            pb={'1em'}
            textAlign="center"
          >
            Tickets
          </Heading>

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

          <Text fontSize={'0.85rem'}>
            Ticket comes with a free drink.
            <br />
            <br />
            DM{' '}
            <a href="https://twitter.com/innkeeperdoteth">
              <u>@innkeeperdoteth</u>
            </a>{' '}
            to get a ticket voucher if you have a melody.
          </Text>
        </Panel>
      </Grid>
      <Flex
        margin="0 auto"
        justifyContent="center"
        flexDirection="column"
        color="black"
        pb={'4em'}
      >
        <Heading
          fontFamily="Irish Grover, cursive"
          letterSpacing="2px"
          opacity=".8"
          fontSize="3rem"
          pb={'1em'}
          textAlign="center"
          color="white"
        >
          Line-Up
        </Heading>
        <Box
          bg="#E8D3B6"
          borderRadius="5px"
          width={{ base: '100%', lg: '80%' }}
          margin="0 auto"
        >
          <ArtistPanel aName={'Robert'} aTime={'21:00 - 22:30'} />
          <ArtistPanel
            aName={'Some Chemistry'}
            aTime={'22:30 - 00:00'}
            url={'https://soundcloud.com/markoman'}
          />
          <ArtistPanel
            aName={'Miùson'}
            aTime={'00:00 - 01:30'}
            url={'https://soundcloud.com/miuson'}
          />
          <ArtistPanel
            aName={'DR.PHI'}
            aTime={'01:30 - 03:00'}
            url={'https://soundcloud.com/somechemistry'}
          />
        </Box>
      </Flex>
      <Heading
        fontFamily="Irish Grover, cursive"
        letterSpacing="2px"
        opacity=".8"
        fontSize="2rem"
        pb={'1em'}
        textAlign="center"
        color="white"
      >
        VJ <a href="https://twitter.com/pipalukdotio">Pipaluk.io</a> <br /> will
        be visually remixing user <br />
        submitted NFTs to the music
      </Heading>
      <Center>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSex8F_7rniwCusmeDd7_xqbe88lcZ9RmtnIDbZKWkPA-iGzag/viewform">
          <Button color={'black'}>Submit NFT for Pipaluk to Remix</Button>
        </a>
      </Center>

      <Box pb={'5em'}></Box>
      {/* <Flex
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="black"
        pt={'2em'}
        pb={'4em'}
        bg="#E8D3B6"
      >
        <Heading
          fontFamily="Irish Grover, cursive"
          letterSpacing="2px"
          opacity=".8"
          fontSize="3rem"
          textAlign="center"
          color="black"
        >
          How to get here
        </Heading>
        <Text
          fontSize={'2em'}
          fontFamily="Irish Grover, cursive"
          letterSpacing="2px"
          opacity=".3"
        >
          📍 Lola Luid
        </Text>
      </Flex> */}
      <iframe
        width="100%"
        height="700"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=lola%20luid&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </>
  )
}

const ArtistPanel = ({ aName, aTime, url }) => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      textAlign="center"
      fontSize={'1.5rem'}
      py={'0.5em'}
    >
      {url ? (
        <a href={url}>
          <u>
            <Text>{aName}</Text>
          </u>
        </a>
      ) : (
        <Text>{aName}</Text>
      )}
      <Text>{aTime}</Text>
    </Grid>
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
      fontSize="1.25rem"
      fontFamily="Montserrat, sans-serif"
    >
      {children}
    </Flex>
  )
}

export default Irl
