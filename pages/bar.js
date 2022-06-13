import { Box, Button, Flex, Text } from '@chakra-ui/react'

const Bar = () => {
  return (
    <>
      <Flex
        pt={'3em'}
        color={'black'}
        m={'0 auto'}
        flexDirection={'column'}
        alignItems={'center'}
        h={'40vh'}
        justifyContent={'space-between'}
      >
        <Text color={'white'}>
          When people want to pay for their own drinks with crypto, check these
          addresses for incoming payments before giving a drink card
        </Text>
        <a href="https://etherscan.io/address/0xdebc5d004cf9d23ad77601c4323163e6a77de357">
          <Button>
            <Text fontSize={'1.75rem'} p={'0.5em'}>
              bar - etherscan
            </Text>
          </Button>
        </a>
        <a href="https://polygonscan.com/address/0xDeBc5d004CF9d23aD77601C4323163E6A77de357">
          <Button>
            <Text fontSize={'1.75rem'} p={'0.5em'}>
              bar - polygonscan
            </Text>
          </Button>
        </a>
      </Flex>
    </>
  )
}

export default Bar
