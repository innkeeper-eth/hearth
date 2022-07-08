import { Flex, Text } from '@chakra-ui/react'
import { contracts } from './helpers'

const Record = ({ record }) => {
  const { contractAddress, from, timeStamp, value, hash } = record

  const multiplyDate = new Date(timeStamp * 1000)
  const newDate = multiplyDate.toLocaleDateString()
  const one = 1000000000000000000

  const currency = contracts.find(
    (cur) => contractAddress.toUpperCase() === cur.addy.toUpperCase()
  )
  return (
    <>
      <Flex
        bg={'white'}
        width={'100%'}
        color={'black'}
        p={3}
        flexDirection={'column'}
        borderRadius={'4px'}
        opacity={0.98}
      >
        <Text>
          {value / one} {currency ? currency.cur : 'MATIC'}
        </Text>
        <Text>{from}</Text>
        <Text fontWeight="700" color={'#6495ED'}>
          <a target={'_blank'} href={`https://polygonscan.com/tx/${hash}`}>
            {newDate} {multiplyDate.getHours()}:{multiplyDate.getMinutes()}
          </a>
        </Text>
      </Flex>
    </>
  )
}

export default Record
