import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'

const TipsModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody color={'black'}>
            <Flex
              justifyContent={'center'}
              flexDirection={'column'}
              fontFamily={'montserrat'}
              textAlign={'center'}
            >
              <Image src={'brewsinnkeeper.png'} />
              <Heading mt={5}>brews.innkeeper.eth</Heading>
              <Text mt={5} fontFamily={'monospace'}>
                0x5a73AE921049343337530CF746DE8950C3f9a099
              </Text>
              <Flex justifyContent={'space-evenly'} my={8}>
                <a
                  target="_blank"
                  href="https://etherscan.io/address/0x5a73ae921049343337530cf746de8950c3f9a099"
                >
                  <Image src={'coins/eth.svg'} h={'45px'} />
                </a>
                <a
                  target="_blank"
                  href="https://polygonscan.com/address/0x5a73ae921049343337530cf746de8950c3f9a099"
                >
                  <Image src={'coins/matic.svg'} w={'45px'} />
                </a>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TipsModal
