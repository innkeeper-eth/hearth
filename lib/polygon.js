import fetch from 'axios'

const getTxs = async (pagesize) => {
  const size = pagesize && `?pagesize=${pagesize}`
  const records = await fetch.get(`http://localhost:3000/api/tips${size ?? ''}`)
  return records
}

export default getTxs
