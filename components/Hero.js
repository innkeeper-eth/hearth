import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  Icon,
  Image,
} from '@chakra-ui/react'
import Badge from './Badge'
import styled from '@emotion/styled'
import { useTheme } from '@chakra-ui/react'
import { FaDiscord, FaEthereum, FaTwitter } from 'react-icons/fa'
import { FcMusic } from 'react-icons/fc'

const StyledButton = ({ text, href }) => {
  const { colors } = useTheme()

  return (
    <Link href={href}>
      <Button
        fontSize="1.25em"
        backgroundColor={colors.highlight}
        color={colors.dark}
        p={7}
        display={{ base: 'none', md: 'flex' }}
        fontFamily="Montserrat, sans-serif"
      >
        <a>{text}</a>
      </Button>
    </Link>
  )
}

const StyledNav = styled(Flex)`
  flex-direction: row;
  align-items: center;
  padding: 2em;
`

const StyledIcon = styled.span`
  font-size: 45px;
  cursor: pointer;
  padding: 0 0.25em;
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

const IconContainer = ({ icon, href }) => (
  <StyledIcon>
    <a href={href}>{icon}</a>
  </StyledIcon>
)

export const Nav = ({ irl }) => {
  return (
    <>
      <Flex justifyContent={'space-between'} bg={irl && 'black'}>
        {irl && (
          <Box bg="#000" p={'2em'}>
            <Link href="/">
              <a>
                <Image src={'/logo_night.svg'} h={'75px'} />
              </a>
            </Link>
          </Box>
        )}
        <StyledNav
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          width={!irl && '100%'}
        >
          <IconContainer
            href={'https://discord.gg/SjzF2AvPkT'}
            icon={<FaDiscord />}
          />
          <IconContainer
            href={'https://twitter.com/innkeeperdoteth'}
            icon={<FaTwitter />}
          />
          {/* <IconContainer
            href={'https://opensea.io/collection/loot-innkeeper-eth'} icon={<FaEthereum/>}/> */}
          <IconContainer
            href={'https://opensea.io/collection/melodies-innkeeper-eth'}
            icon={<FcMusic />}
          />
          <StyledButton
            href="https://play.decentraland.org/?position=137,-3?realm=dg"
            text="Jump into the Inn"
          />
        </StyledNav>
      </Flex>
    </>
  )
}

const StyledDivider = styled(Flex)`
  background: rgb(176, 104, 5);
  background: linear-gradient(
    0deg,
    rgba(100, 58, 0, 1) 0%,
    rgba(176, 104, 5, 1) 100%
  );
  height: 25px;
`

const StyledHero = styled(Flex)`
  flex-direction: column;
  min-height: 35vh;
  background-color: #511300;
`

function Hero() {
  return (
    <>
      <StyledHero>
        <Nav />
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          p={5}
          margin="0 auto"
          alignItems="center"
          textAlign={{ base: 'center', lg: 'inherit' }}
          justifyContent="space-evenly"
        >
          <Badge />
          <Box ml={{ base: '0px', lg: '5em' }}>
            <Heading as="h2" size="2xl" py={5} fontFamily="Zen Antique, serif">
              Welcome to the Inn
            </Heading>
            <Text fontSize="1.5em">
              A community of artists and metaverse <br /> enthusiasts hosting
              weekly live events.
            </Text>
          </Box>
        </Flex>
      </StyledHero>
      <StyledDivider />
    </>
  )
}

export default Hero
