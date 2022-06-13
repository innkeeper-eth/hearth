import { Box } from '@chakra-ui/react'

function AmsGate() {
  return (
    <Box display={{ base: 'none', md: 'initial' }}>
      <video autoPlay loop muted width="450px">
        <source src="/amsgate2.webm" />
      </video>
    </Box>
  )
}

export default AmsGate
