import fetch from 'axios'

const getTxs = async (pagesize) => {
  const size = pagesize && `?pagesize=${pagesize}`
  const records = await fetch.get(
    `https://innkeeper.link/api/tips${size ?? ''}`
  )
  return records
}

export default getTxs
