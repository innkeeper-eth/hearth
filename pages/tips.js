import {
  Box,
  Center,
  Flex,
  Grid,
  Text,
  Input,
  Image,
  useDisclosure,
} from '@chakra-ui/react'
import {
  filterRecords,
  getSum,
  getUniqueAddresses,
  groupByAddress,
} from '../components/tips/helpers'
import Record from '../components/tips/Record'
import TipsModal from '../components/tips/TipsModal'
import { useState } from 'react'
import getTxs from '../lib/polygon'

const TipsPage = ({ data = {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selected, selectTab] = useState('matic')

  const today = +new Date()
  const oneDay = 86400 * 1000
  const oneDayAgo = today - oneDay
  const one = 1000000000000000000

  const filteredMatic = filterRecords({ records: data?.matic?.result })
  const filteredMana = filterRecords({ records: data?.mana?.result })
  const filteredWeth = filterRecords({ records: data?.weth?.result })
  // const filteredUsdc = filterRecords({ records: data?.usdc?.result })

  const tabs = {
    matic: filteredMatic,
    mana: filteredMana,
    weth: filteredWeth,
  }

  return (
    <>
      <TipsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Flex p={5} flexDirection={'column'}>
        <Flex
          w={'100%'}
          bg={'#BA5C12'}
          color={'#FFB86F'}
          p={3}
          mb={3}
          fontSize={'18px'}
          borderRadius={'8px'}
          justifyContent={'space-evenly'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
        >
          <Box fontSize={'20px'}>
            <Text
              fontWeight={'700'}
              fontFamily={'montserrat'}
              onClick={() => onOpen()}
              cursor={'pointer'}
            >
              brews.innkeeper.eth
            </Text>
          </Box>
          <Box fontFamily={'montserrat'}>
            <Text>
              {new Date(oneDayAgo).toLocaleString()} (24hrs ago) to{' '}
              {new Date().toLocaleString()} (now)
            </Text>
            <Grid
              gridTemplateColumns={'2fr 1fr 1fr 1fr'}
              fontSize={'12px'}
              fontWeight={700}
            >
              <Text>Artist's 95% cut: </Text>
              <Text>
                {(getSum({ records: filteredMatic }) * 0.95).toFixed(2)} MATIC
              </Text>
              <Text>
                {(getSum({ records: filteredMana }) * 0.95).toFixed(2)} MANA{' '}
              </Text>
              <Text>
                {(getSum({ records: filteredWeth }) * 0.95).toFixed(2)} WETH{' '}
              </Text>
              <Text opacity={0.6}>Innkeeper's 5% cut: </Text>
              <Text opacity={0.6}>
                {(getSum({ records: filteredMatic }) * 0.05).toFixed(2)} MATIC
              </Text>
              <Text opacity={0.6}>
                {(getSum({ records: filteredMana }) * 0.05).toFixed(2)} MANA{' '}
              </Text>
              <Text opacity={0.6}>
                {(getSum({ records: filteredWeth }) * 0.05).toFixed(2)} WETH{' '}
              </Text>
            </Grid>
          </Box>
        </Flex>
        <Flex justifyContent={'center'}>
          <SummaryBox
            color={'#573280'}
            name={'matic'}
            value={getSum({ records: filteredMatic })}
            onClick={() => selectTab('matic')}
          />
          <SummaryBox
            color={'#573280'}
            name={'mana'}
            value={getSum({ records: filteredMana })}
            onClick={() => selectTab('mana')}
          />
          <SummaryBox
            color={'#573280'}
            name={'eth'}
            value={getSum({ records: filteredWeth })}
            onClick={() => selectTab('weth')}
          />
          {/* <SummaryBox
            color={'#573280'}
            name={'usdc'}
            value={getSum({ records: filteredUsdc })}
            onClick={() => selectTab('usdc')}
          /> */}
        </Flex>
        <Grid
          pt={3}
          gridGap={'8px'}
          gridTemplateColumns={{
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr',
          }}
        >
          {tabs[selected].map((record, index) => {
            return <Record record={record} key={index} />
          })}
        </Grid>
      </Flex>
    </>
  )
}

const SummaryBox = ({ color, onClick, value, name = '' }) => {
  return (
    <Flex
      bg={color}
      color={'white'}
      p={3}
      m={1}
      borderRadius={'4px'}
      onClick={onClick}
      cursor={'pointer'}
    >
      <Image src={`coins/${name}.png`} w={'35px'} mr={5} />
      <Text fontWeight={'700'} fontSize={'1.25rem'}>
        {value > 0 ? value : '0'} {name.toUpperCase()}
      </Text>
    </Flex>
  )
}

export async function getServerSideProps() {
  const data = {}
  const recs = await getTxs(50)
  data.matic = JSON.parse(JSON.stringify(recs.data.matic))
  data.mana = JSON.parse(JSON.stringify(recs.data.mana))
  data.weth = JSON.parse(JSON.stringify(recs.data.weth))
  // data.usdc = JSON.parse(JSON.stringify(recs.data.usdc))

  return {
    props: { data },
  }
}

export default TipsPage
