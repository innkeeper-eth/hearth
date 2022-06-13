import fetch from 'axios'

export default async (req, res) => {
  const { pagesize } = req.query
  console.log({ pagesize })
  const brewsAddress = '0x5a73ae921049343337530cf746de8950c3f9a099'
  const key = 'XCZQR3R8HZ389K9JCVI27I3GWVXQKKDECV'
  const contracts = {
    mana: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
    weth: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  }
  const props = { address: brewsAddress, key }
  const getMaticTxsUrl = ({ address, key }) =>
    `https://api.polygonscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=${pagesize}&sort=asc&apikey=${key}`

  const getERC20TxsUrl = ({ address, key, contract }) =>
    `https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=${contract}&address=${address}&startblock=0&endblock=99999999&page=1&offset=${pagesize}&sort=asc&apikey=${key}`

  try {
    const maticResponse = await fetch.get(getMaticTxsUrl(props))
    const manaResponse = await fetch.get(
      getERC20TxsUrl({ ...props, contract: contracts.mana })
    )
    const wethResponse = await fetch.get(
      getERC20TxsUrl({ ...props, contract: contracts.weth })
    )
    res.status(200).json({
      matic: maticResponse.data,
      mana: manaResponse.data,
      weth: wethResponse.data,
    })
  } catch (err) {
    console.log({ err })
  }
}
