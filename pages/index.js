import { Flex, Grid, Heading, Text, Box, Image } from '@chakra-ui/react'

import { mockData } from '../lib/mock'

const HomePage = ({ data }) => {
  return (
    <>
      <Wrapper>
        <Flex flexDirection="column">
          <Card
            header={'Vector Meldrew LIVE A/V JUNGLE RINSEOUT BURIAL SESSIONS'}
            desc={
              'Let your eyes and ears feast on a show by the enigmatic and mysterious Vector Meldrew. For one wild night he rises up from behind a stack of GPU power and channels his deranged thoughts into glorious visions to bless the stage of the Innkeeper. Is he even human? We shall never know. ower and channels his deranged thoughts into glorious visions to bless the stage of the Innkeeper. Is he even human? We shall never know. ower and channels his deranged thoughts into glorious visions to bless the stage of the Innkeeper. Is he even human? We shall never know. ower and channels his deranged thoughts into glorious visions to bless the stage of the Innkeeper. Is he even human? We shall never know.ower and channels his deranged thoughts into glorious visions to bless the stage of the Innkeeper. Is he even human? We shall never know.'
            }
          />
          <Card />
          <Card />
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

const Card = ({ header, desc, date }) => (
  <Flex color={'dark'} m={5}>
    <Image src={'/ticketLeft.svg'} maxWidth={'30px'} />
    <Grid
      w={'100%'}
      h={'100%'}
      bgColor={'#F2E0C8'}
      gridTemplateColumns={'4fr 1fr'}
    >
      <Box
        minH={'147px'}
        p={3}
        bgColor={'#E8D3B6'}
        m={3}
        borderRadius={'10px 0 0 10px'}
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
      <Box p={3} bgColor={'#E8D3B6'} m={3} borderRadius={'0 10px 10px 0'}>
        <Text>Feb 17</Text>
      </Box>
    </Grid>
    <Image src={'/ticketRight.svg'} maxWidth={'30px'} />
  </Flex>
)

export async function getServerSideProps() {
  const { data } = mockData

  return {
    props: { data },
  }
}

export default HomePage
