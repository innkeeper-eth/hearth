import { Coda } from 'coda-js'

const getEvents = async () => {
  const authKey = 'b79a3cde-e67a-4465-9dc1-17f4e0df4303'
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
