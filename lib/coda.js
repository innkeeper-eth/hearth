import { Coda } from 'coda-js'

const getEvents = async () => {
  const authKey = process.env.CODA_AUTHKEY
  const docId = 'inIR-RHO-o'
  const eventsTable = 'grid-SwX5toV2UI'
  const coda = new Coda(authKey)
  const table = await coda.getTable(docId, eventsTable)
  const rows = await table.listRows({
    useColumnNames: true,
  })
  return rows
}

export default getEvents
