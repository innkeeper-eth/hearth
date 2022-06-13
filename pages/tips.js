import { Box, Center, Flex, Text, Input } from '@chakra-ui/react'
import { useState } from 'react'
import fetch from 'axios'
import getTxs from '../lib/polygon'

const contracts = [
  { cur: 'MANA', addy: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4' },
  { cur: 'ETH', addy: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' },
]

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
        m={1}
        flexDirection={'column'}
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

const filterRecords = ({ records }) => {
  const today = +new Date()
  const oneDay = 86400 * 1000
  const oneDayAgo = today - oneDay
  return records
    ?.filter((record) => record.timeStamp * 1000 >= oneDayAgo)
    .sort((a, b) => b.timeStamp - a.timeStamp)
}

const getSum = ({ records }) => {
  const one = 1000000000000000000
  const values = records?.map((record) => record.value / one)
  const sum = values?.reduce((a, b) => a + b, 0)

  const rounded = Math.floor(sum * 100) / 100

  return rounded
}

const getUniqueAddresses = ({ records }) => {
  console.log('aaaa', records)
  const addresses = records?.map((record) => record.from)
  const uniqueNames = Array.from(new Set(addresses))
  return uniqueNames
}

const groupByAddress = ({ records, uniques }) => {
  const newArray = uniques.map((address) => ({
    address,
    txs: [],
  }))
  console.log({ newArray })

  records.forEach((record) => {
    newArray.find(
      (addy) => addy.address === record.from && addy.txs.push(record)
    )
  })

  return newArray
}

const TipsPage = ({ data }) => {
  console.log('top of page', { data })

  const [selected, selectTab] = useState('matic')

  const today = +new Date()
  const oneDay = 86400 * 1000
  const oneDayAgo = today - oneDay
  const one = 1000000000000000000

  const filteredMatic = filterRecords({ records: data?.matic?.result })
  const filteredMana = filterRecords({ records: data?.mana?.result })
  const filteredWeth = filterRecords({ records: data?.weth?.result })

  const uniqueMatic = getUniqueAddresses({ records: filteredMatic })
  const groupedMatic = groupByAddress({
    records: filteredMatic,
    uniques: uniqueMatic,
  })
  console.log({ groupedMatic })

  const tabs = {
    matic: filteredMatic,
    mana: filteredMana,
    weth: filteredWeth,
  }

  return (
    <>
      <Flex p={5} flexDirection={'column'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mr={10}>
            <Text>Showing records between</Text>
          </Box>
          <Box mr={10}>
            <Text>
              {new Date(oneDayAgo).toLocaleString()} and
              <br />
              {new Date().toLocaleString()}
            </Text>
          </Box>
          <Box>
            <Text>
              Artist will receive 95%:{' '}
              {getSum({ records: filteredMatic }) * 0.95} MATIC,{' '}
              {getSum({ records: filteredMana }) * 0.95} MANA,{' '}
              {getSum({ records: filteredWeth }) * 0.95} WETH,{' '}
            </Text>
            <Text>
              The Inn takes a fee of 5%:{' '}
              {getSum({ records: filteredMatic }) * 0.05} MATIC,{' '}
              {getSum({ records: filteredMana }) * 0.05} MANA,{' '}
              {getSum({ records: filteredWeth }) * 0.05} WETH,{' '}
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent={'center'}>
          <SummaryBox color={'green'} onClick={() => selectTab('matic')}>
            Total Matic: {getSum({ records: filteredMatic })}
          </SummaryBox>
          <SummaryBox color={'cyan'} onClick={() => selectTab('mana')}>
            Total Mana: {getSum({ records: filteredMana })}
          </SummaryBox>
          <SummaryBox color={'purple'} onClick={() => selectTab('weth')}>
            Total ETH: {getSum({ records: filteredWeth })}
          </SummaryBox>
        </Flex>
        {tabs[selected].map((record, index) => {
          return <Record record={record} key={index} />
        })}
      </Flex>
    </>
  )
}

const SummaryBox = ({ children, color, onClick }) => {
  return (
    <Box
      bg={color}
      color={'white'}
      p={3}
      m={1}
      borderRadius={'10px'}
      onClick={onClick}
      cursor={'pointer'}
    >
      <Text fontWeight={'700'} fontSize={'1.25rem'}>
        {children}
      </Text>
    </Box>
  )
}

export async function getServerSideProps() {
  const data = {}
  const recs = await getTxs(50)
  console.log({ recs })
  data.matic = JSON.parse(JSON.stringify(recs.data.matic))
  data.mana = JSON.parse(JSON.stringify(recs.data.mana))
  data.weth = JSON.parse(JSON.stringify(recs.data.weth))

  return {
    props: { data },
  }
}

export default TipsPage
