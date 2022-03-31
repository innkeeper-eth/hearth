import { Box, Center } from '@chakra-ui/react'
import { mockData } from '../lib/mock'
import styled from '@emotion/styled'
import getEvents from '../lib/coda'
import Cards from '../components/events/Cards/Cards'
import Hero from '../components/Hero'
import Inn from '../components/Inn'

const HomePage = ({ data }) => {
  const { coda } = data
  console.log({ coda })
  return (
    <>
      <Hero />
      <Wrapper>
        <Cards coda={coda} />
      </Wrapper>
      <Center>
        <Inn />
      </Center>
    </>
  )
}

const Wrapper = ({ children }) => (
  <Box pt={5} width={'100%'} maxWidth={'1115px'} margin={'0 auto'}>
    {children}
  </Box>
)

export async function getServerSideProps() {
  const { data } = mockData
  const rows = await getEvents()
  data.coda = JSON.parse(JSON.stringify(rows))

  return {
    props: { data },
  }
}

export default HomePage
