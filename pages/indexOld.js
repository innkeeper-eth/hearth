import {
  Button,
  Container,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";

const StyledButton = ({ text, href }) => (
  <Link href={href}>
    <Button fontSize="1.75em" colorScheme="teal" p={10}>
      <a>{text}</a>
    </Button>
  </Link>
);

const StyledVideo = ({ videoPath }) => (
  <video
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
      position: "fixed",
      zIndex: 0,
      opacity: 0.2,
    }}
    autoPlay
    muted
    loop
  >
    <source src={videoPath} type="video/mp4" />
  </video>
);

function HomePage() {
  return (
    <>
      <StyledVideo videoPath="/theinn.mp4" />
      <Container backgroundColor={"#1A000"}>
      <Flex justifyContent="space-between" alignContent='center' minHeight="10vh" paddingTop="2em" flexDirection={{ md: 'row', base: 'column' }}>
          <StyledButton
            text={"Discord"}
            href={"https://discord.gg/W3ZDAvys6P"}
          />
          <StyledButton
            text={"The Inn"}
            href={
              "https://play.decentraland.org/?NETWORK=mainnet&position=137,-3"
            }
          />
          <StyledButton
            text={"Twitter"}
            href={"https://twitter.com/innkeeperdoteth"}
          />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="80vh"
        >
          {/* <Image alt="logo" src="/logo_night.svg" size="cover" maxH="250px" /> */}
          <video autoPlay loop muted height="100px">
            <source src='/badge.webm' />
          </video>
          <h1>
            <strong>innkeeper.eth</strong>
          </h1>
          <Text fontSize="1.15em" textAlign={["center"]}>
            Host live events in the metaverse. <br /> Curating a community of
            artists and metaverse enthusiasts.
          </Text>
        </Flex>
        
      </Container>
    </>
  );
}

export default HomePage;
