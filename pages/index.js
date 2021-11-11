import { Button, Container, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'


const StyledButton = ({ text, href }) => (
  <Link href={href}>
    <Button fontSize='1.25em' colorScheme='teal'>
      <a>{text}</a>
    </Button>
  </Link>
)

const StyledVideo = ({ videoPath }) => (
  <video
    style={{
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: 0,
      opacity: .2
    }}
    autoPlay muted loop>
    <source src={videoPath} type="video/mp4" />
  </video>
)


function HomePage() {
  return (
    <>
      <StyledVideo videoPath='/theinn.mp4' />
      <Container backgroundColor={'#1A000'}>
        <Flex justifyContent="center" alignItems="center" flexDirection="column" paddingTop="2em" height='90vh'>
          <Image alt='logo' src="/logo_night.svg" size="cover" maxH="250px" />
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
    </>)
}

export default HomePage