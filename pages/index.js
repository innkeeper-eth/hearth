import { Button, Container, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'


const StyledButton = ({ text, href }) => (
  <Button fontSize='1.25em' colorScheme='teal'><Link href={href}><a>{text}</a></Link></Button>
)


function HomePage() {
  return (
    <Container>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" paddingTop="2em" height='90vh'>
        <Image src="/logo_night.svg" size="cover" maxH="250px" />
        {/* <Spacer /> */}
        <h1><strong>innkeeper.eth</strong></h1>
        <Text fontSize='1.15em' textAlign={['center']}>
          Host live events in the metaverse. <br /> Curating a community of artists and metaverse enthusiasts.
        </Text>
      </Flex>
      <Flex justifyContent='space-between' height='10vh'>
        <StyledButton text={'Discord'} href={'https://discord.gg/W3ZDAvys6P'} />
        <StyledButton text={'The Inn'} href={'https://play.decentraland.org/?NETWORK=mainnet&position=137,-3'} />
        <StyledButton text={'Twitter'} href={'https://twitter.com/innkeeperdoteth'} />
      </Flex>

    </Container>
  )
}

export default HomePage