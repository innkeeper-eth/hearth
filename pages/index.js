import {
  Flex,
  Grid,
  Heading,
  Text,
  Box,
  Image,
  Tooltip,
} from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import { mockData } from '../lib/mock'
import { FaParachuteBox } from 'react-icons/fa'
import styled from '@emotion/styled'
import fetch from 'axios'
import { Coda } from 'coda-js'
import getEvents from '../lib/coda'

const HomePage = ({ data }) => {
  console.log('coda', data.coda)
  const { coda } = data
  return (
    <>
      <Wrapper>
        <Flex flexDirection="column">
          {coda.map((event, index) => {
            const {
              Artists: artistsString,
              eventDescription: description,
              eventName: name,
              eventStart: start,
            } = event.values
            const artists = artistsString.split(',')
            if (Date.parse(start) < new Date()) {
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
      </Wrapper>
    </>
  )
}

const Wrapper = ({ children }) => (
  <Box pt={5} width={'100%'} maxWidth={'1115px'} margin={'0 auto'}>
    {children}
  </Box>
)

const Card = ({ header, desc, date: eventStart, artists }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })

  const date = new Date(Date.parse(eventStart))
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.toLocaleString('default', { day: 'numeric' })
  const dayName = date.toLocaleString('default', { weekday: 'short' })
  const time = date.toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <Flex color={'dark'} m={5}>
      {!isMobile && <Image src={'/ticketLeft.svg'} maxWidth={'30px'} />}
      <Grid
        w={'100%'}
        h={'100%'}
        bgColor={'#F2E0C8'}
        gridTemplateColumns={{ base: '1fr', md: '8fr 3fr 1fr 1fr' }}
        borderRadius={{ base: '20px', md: 'initial' }}
      >
        <Flex
          minH={{ base: 'initial', md: '147px' }}
          p={3}
          bgColor={'#E8D3B6'}
          m={3}
          borderRadius={'20px 0 0 20px'}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Heading
            color={'dark'}
            fontFamily={'Irish Grover, cursive'}
            fontWeight={'500'}
          >
            {header}
          </Heading>
          <Text>{desc}</Text>
        </Flex>
        {!isMobile && (
          <Flex
            my={3}
            bgColor="#E8D3B6"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/egr.png" />
          </Flex>
        )}
        <Flex
          p={3}
          bgColor={'#E8D3B6'}
          m={3}
          alignItems="center"
          justifyContent="space-around"
        >
          {artists.map((artist, index) => (
            <Box key={index}>
              {console.log('artist', artist)}
              <Text
                fontFamily="Montserrat"
                fontSize="1.15rem"
                fontWeight="700"
                textTransform="uppercase"
                sx={{ 'writing-mode': !isMobile && 'vertical-rl' }}
              >
                <Link href={'#'}>
                  <a>{artist}</a>
                </Link>
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex
          flexDirection={{ base: 'row', md: 'column' }}
          justifyContent={{ base: 'initial', md: 'space-between' }}
        >
          <Flex
            h={{ base: '80px', md: '100%' }}
            w={{ base: '100%', md: '90%' }}
            p={3}
            m={3}
            bgColor={'#E8D3B6'}
            borderRadius={{ base: '0 0 0 20px', md: '0 20px 0 0' }}
            alignSelf={'end'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Heading
              color={'dark'}
              fontFamily={'Irish Grover, cursive'}
              fontWeight={'500'}
              textAlign={'center'}
            >
              {`${month} ${day}`}
            </Heading>
          </Flex>
          <Flex
            h={{ base: '80px', md: '100%' }}
            w={{ base: '40%', md: '90%' }}
            px={3}
            mx={3}
            alignItems={'center'}
            justifyContent={'center'}
            alignSelf={{ base: 'center', md: 'end' }}
            cursor={'pointer'}
          >
            <Tooltip label="Event Airdrops a Melody">
              <Text bgColor="highlight" p={3} borderRadius={'50px'}>
                <a>
                  <FaParachuteBox />
                </a>
              </Text>
            </Tooltip>
          </Flex>
          <Flex
            h={{ base: '80px', md: '100%' }}
            w={{ base: '40%', md: '90%' }}
            p={3}
            m={3}
            alignSelf={'end'}
            alignItems={'center'}
            justifyContent={'center'}
            bgColor={'#E8D3B6'}
            borderRadius={{ base: '0 0 20px 0', md: '0 0 20px 0' }}
          >
            <Heading
              color={'dark'}
              fontFamily={'Irish Grover, cursive'}
              fontWeight={'500'}
              textAlign={'center'}
            >
              {time}
            </Heading>
          </Flex>
        </Flex>
      </Grid>
      {!isMobile && <Image src={'/ticketRight.svg'} maxWidth={'30px'} />}
    </Flex>
  )
}

const IconContainer = ({ icon, href }) => (
  <StyledIcon>
    <a href={href}>{icon}</a>
  </StyledIcon>
)

const StyledIcon = styled.span`
  font-size: 15px;
  cursor: pointer;
  padding: 3px;
  transition: all 0.5s ease-in-out;

  & :active {
    transform: translate3d(0, 0, 1px);
    transition: all 0.25s ease-in-out;
  }
  :hover {
    transform: translate3d(-4px, -4px, 1px);
    filter: drop-shadow(4px 4px 1px #000);
    transition: all 0.25s ease-in-out;
  }
`

export async function getServerSideProps() {
  const { data } = mockData
  const rows = await getEvents()
  data.coda = JSON.parse(JSON.stringify(rows))

  return {
    props: { data },
  }
}

export default HomePage
