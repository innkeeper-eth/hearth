import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Badge from '../components/Badge';
import styled from '@emotion/styled'
import Head from 'next/head';

const StyledButton = ({ text, href }) => (
  <Link href={href} display={{ base: 'none', lg: 'initial' }}>
    <Button fontSize="1.25em" colorScheme="teal" p={7} >
      <a>{text}</a>
    </Button>
  </Link>
);

const StyledNav = styled(Flex)`
  flex-direction: row;
  align-items: center;

  > * {
    padding: 1em;
  }
`

const Nav = () => (
  <StyledNav p={10} justifyContent={{ base: 'center', lg: 'flex-end' }}>
    <span>hi</span>
    <span>hi</span>
    <StyledButton text='Jump into the Inn' />

  </StyledNav>
)

// const StyledVideo = ({ videoPath }) => (
//   <video
//     style={{
//       objectFit: "cover",
//       width: "100%",
//       height: "100%",
//       position: "fixed",
//       zIndex: 0,
//       opacity: 0.2,
//     }}
//     autoPlay
//     muted
//     loop
//   >
//     <source src={videoPath} type="video/mp4" />
//   </video>
// );

const StyledDivider = styled(Flex)`
  background: rgb(176,104,5);
  background: linear-gradient(0deg, rgba(100,58,0,1) 0%, rgba(176,104,5,1) 100%);  
  height: 25px;
`

const StyledHero = styled(Flex)`
  flex-direction: column;
  min-height: 40vh;
  background-color: #511300;
`

function HomePage() {
  return (
    <>
      <StyledHero>
        <Nav />
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          p={5}
          margin='0 auto'
          alignItems='center'
          textAlign={{ base: 'center', lg: 'inherit' }}
          justifyContent='space-evenly'
        >
          <Badge />
          <Box ml={{ base: '0px', lg: '5em' }}>
            <Heading as="h2" size='2xl'>
              Welcome to the Inn
            </Heading>
            <Text fontSize='1.5em'>
              A community of artists and metaverse <br /> enthusiasts hosting weekly live events.
            </Text>
          </Box>

        </Flex>
      </StyledHero>
      <StyledDivider />
      <Flex flexDirection='column'>
        <Heading as='h1' size='2xl' margin='0 auto' pt='1em'>
          Upcoming Events
        </Heading>
        <Flex>
          <Box color="#000" backgroundColor='#fff'>
            hi
          </Box>
        </Flex>

      </Flex>
    </>
  );
}

export default HomePage;
