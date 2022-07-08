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
import { FaParachuteBox } from 'react-icons/fa'
import { getDateVars } from './helper'

const Card = ({ header, desc, date: eventStart, artists }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })

  const { month, day, time, dayName, isMelody } = getDateVars({
    eventStart,
  })

  return (
    <Flex color={'dark'} m={5}>
      {!isMobile && <Image src={'/ticketLeft.svg'} maxWidth={'30px'} />}
      <Grid
        w={'100%'}
        h={'100%'}
        bgColor={'#F2E0C8'}
        // bgColor={'#663399'}
        gridTemplateColumns={{ base: '1fr', md: '8fr 3fr 1fr 1fr' }}
        borderRadius={{ base: '20px', md: 'initial' }}
      >
        <CardHeader header={header} desc={desc} />
        <CardImg isMobile={isMobile} artists={artists} />
        <CardFooter
          month={month}
          day={day}
          dayName={dayName}
          time={time}
          isMelody={isMelody}
        />
      </Grid>
      {!isMobile && <Image src={'/ticketRight.svg'} maxWidth={'30px'} />}
    </Flex>
  )
}

const CardHeader = ({ header, desc }) => {
  return (
    <Flex
      minH={{ base: 'initial', md: '147px' }}
      p={3}
      bgColor={'#E8D3B6'}
      // bgColor={'#DDA0DD'}
      m={3}
      borderRadius={'20px 0 0 20px'}
      justifyContent="space-between"
      flexDirection="column"
    >
      <Heading
        color={'dark'}
        fontFamily={'Irish Grover, cursive'}
        fontWeight={'500'}
        fontSize={'1.75rem'}
      >
        {header}
      </Heading>
      <Text>{desc}</Text>
    </Flex>
  )
}

const CardImg = ({ isMobile, artists }) => {
  return (
    <>
      {!isMobile && (
        <Flex
          my={3}
          bgColor="#E8D3B6"
          backgroundImage={'url("/logo.svg")'}
          backgroundSize={'100px'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'center center'}
          border={'4px #f7b05b solid'}
          borderRadius={'20px'}
        />
      )}
      <Flex
        p={3}
        bgColor={'#E8D3B6'}
        m={3}
        alignItems="center"
        justifyContent="space-around"
        borderRadius="10px"
        flexDirection={{ base: 'column', lg: 'initial' }}
      >
        {artists.map((artist, index) => (
          <Box key={index} py={{ base: '0.5em', lg: 'initial' }}>
            <Text
              fontFamily="Montserrat"
              fontSize="1.15rem"
              fontWeight="700"
              textTransform="uppercase"
              sx={{ 'writing-mode': !isMobile && 'vertical-rl' }}
            >
              {artist}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  )
}

const CardFooter = ({ month, day, dayName, time, isMelody }) => {
  return (
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
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text
            fontWeight={700}
            fontFamily={'Montserrat, sans-serif'}
            pr={'1em'}
          >
            {dayName}
          </Text>
          {isMelody && (
            <Tooltip label="Event Airdrops a Melody">
              <Text bgColor="highlight" p={3} borderRadius={'50px'}>
                <a>
                  <FaParachuteBox />
                </a>
              </Text>
            </Tooltip>
          )}
        </Flex>
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
  )
}

export default Card
