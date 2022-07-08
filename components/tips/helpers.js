export const filterRecords = ({ records }) => {
  const today = +new Date()
  const oneDay = 86400 * 1000
  const oneDayAgo = today - oneDay
  return records
    ?.filter((record) => record.timeStamp * 1000 >= oneDayAgo)
    .sort((a, b) => b.timeStamp - a.timeStamp)
}

export const getSum = ({ records }) => {
  const one = 1000000000000000000
  const values = records?.map((record) => record.value / one)
  const sum = values?.reduce((a, b) => a + b, 0)

  const rounded = Math.floor(sum * 100) / 100

  return rounded
}

export const getUniqueAddresses = ({ records }) => {
  const addresses = records?.map((record) => record.from)
  const uniqueNames = Array.from(new Set(addresses))
  return uniqueNames
}

export const groupByAddress = ({ records, uniques }) => {
  const newArray = uniques.map((address) => ({
    address,
    txs: [],
  }))

  records.forEach((record) => {
    newArray.find(
      (addy) => addy.address === record.from && addy.txs.push(record)
    )
  })

  return newArray
}

export const contracts = [
  { cur: 'MANA', addy: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4' },
  { cur: 'ETH', addy: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' },
]
