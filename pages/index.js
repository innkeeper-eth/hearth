import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { mockData } from '../lib/mock'
import styled from '@emotion/styled'
import getEvents from '../lib/coda'
import Cards from '../components/events/Cards/Cards'
import Hero from '../components/Hero'
import Inn from '../components/Inn'
import Link from 'next/link'

const HomePage = ({ data }) => {
  const { coda } = data
  return (
    <>
      <Link href="/irl">
        <a>
          <Banner />
        </a>
      </Link>

      <Hero />
      <Wrapper>
        <Cards coda={coda} />
      </Wrapper>
      <Center>{/* <Inn /> */}</Center>
    </>
  )
}

const Wrapper = ({ children }) => (
  <Box pt={5} width={'100%'} maxWidth={'1115px'} margin={'0 auto'}>
    {children}
  </Box>
)

const Banner = () => {
  return (
    <Flex
      bg={
        'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
      }
      h={'50px'}
      filter="drop-shadow(5px 0 4px #000)"
      _hover={{
        transition: 'all 0.25s ease-in-out',
        color: 'rgba(131,58,180,1)',
      }}
      transition="all 0.25s ease-in-out"
      justifyContent={'center'}
      textAlign="center"
      alignItems={'center'}
      fontWeight={'700'}
      fontSize={'1.25rem'}
      fontFamily="Montserrat, sans-serif"
      py={{ base: '50px', lg: 'initial' }}
    >
      <Text>First IRL Popup Party: April 21st - Amsterdam</Text>
    </Flex>
  )
}

export async function getServerSideProps() {
  const data = {}
  const rows = await getEvents('b79a3cde-e67a-4465-9dc1-17f4e0df4303')
  data.coda = JSON.parse(JSON.stringify(rows))

  return {
    props: { data },
  }
}

export default HomePage
