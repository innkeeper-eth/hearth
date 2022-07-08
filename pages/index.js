import { Box, Center, Flex, Text } from '@chakra-ui/react'
import getEvents from '../lib/coda'
import Cards from '../components/events/Cards/Cards'
import Hero from '../components/Hero'

const HomePage = ({ data }) => {
  const { coda } = data
  return (
    <>
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

export async function getServerSideProps() {
  const data = {}
  const rows = await getEvents('b79a3cde-e67a-4465-9dc1-17f4e0df4303')
  data.coda = JSON.parse(JSON.stringify(rows))

  return {
    props: { data },
  }
}

export default HomePage
