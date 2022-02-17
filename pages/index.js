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

const HomePage = ({ data }) => {
  console.log({ data })
  return (
    <>
      <Wrapper>
        <Flex flexDirection="column">
          {data.combined.map((event) => (
            <Card
              header={event.fields.title}
              desc={event.fields.memo}
              artists={event.fields.artists}
            />
          ))}
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

const Card = ({ header, desc, date, artists }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
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
        <Box
          minH={{ base: 'initial', md: '147px' }}
          p={3}
          bgColor={'#E8D3B6'}
          m={3}
          borderRadius={'20px 0 0 20px'}
        >
          <Heading
            color={'dark'}
            fontFamily={'Irish Grover, cursive'}
            fontWeight={'500'}
          >
            {header}
          </Heading>
          <Text>{desc}</Text>
        </Box>
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
          {artists.map((artist) => (
            <Box>
              <Text
                fontFamily="Montserrat"
                fontSize="1.15rem"
                fontWeight="700"
                textTransform="uppercase"
                sx={{ 'writing-mode': !isMobile && 'vertical-rl' }}
              >
                <Link href={artist.url}>
                  <a>{artist.name}</a>
                </Link>
              </Text>
            </Box>
          ))}
          {/* <Box>
            <Text
              fontFamily="Montserrat"
              fontSize="1.15rem"
              fontWeight="700"
              textTransform="uppercase"
              sx={{ 'writing-mode': !isMobile && 'vertical-rl' }}
            >
              <Link href="#">
                <a>Vector Meldrew</a>
              </Link>
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize="1.15rem"
              fontWeight="700"
              textTransform="uppercase"
              sx={{ 'writing-mode': !isMobile && 'vertical-rl' }}
              textDecoration={'underline'}
            >
              <Link href="#">
                <a>Pipaluk</a>
              </Link>
            </Text>
          </Box> */}
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
              Feb 17
            </Heading>
          </Flex>
          <Flex
            h={{ base: '80px', md: '100%' }}
            w={{ base: '40%', md: '90%' }}
            px={3}
            mx={3}
            alignItems={'center'}
            justifyContent={'center'}
            // bgColor={'#E8D3B6'}
            alignSelf={{ base: 'center', md: 'end' }}
            cursor={'pointer'}
          >
            <Tooltip label="Unlockable NFTs">
              <Text bgColor="#E8D3B6" p={3} borderRadius={'50px'}>
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
              21:00
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

  return {
    props: { data },
  }
}

export default HomePage
