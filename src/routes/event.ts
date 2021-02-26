/* eslint-disable valid-typeof, no-labels */
import { Request, Response } from 'express'
import { dbQuery } from '../sql'
import eventStructure from '../data/event_structure.json'


export function routeEvent(req: Request, res: Response) {
  if (!('length' in req.body))
    return res.status(400).json({ error: 'malformed_body' })

  const namespace = req.params.namespace
  const type = req.params.type

  if (!(namespace in eventStructure))
    return res.status(400).json({ error: 'invalid_namespace' })
  if (!(type in eventStructure[namespace]))
    return res.status(400).json({ error: 'invalid_type' })

  res.status(200).json({ success: true })

  saveEvents(req.body, eventStructure[namespace][type])
}

function saveEvents(events: Array<any>, structure: { dbname: string, schema: any }) {
  const sqlBoilerplate = `INSERT INTO warehouse.${structure.dbname}(${Object.keys(structure.schema).join(',')}) VALUES `

  nextEvent:
  for (const event of events) {
    const data = []
    for (const key of Object.keys(structure.schema)) {
      if (!(key in event)) continue nextEvent
      if (typeof event[key] !== structure.schema[key]) continue nextEvent

      data.push(
        typeof event[key] === 'string'
          ? `"${event[key]}"`
          : event[key]
      )
    }

    dbQuery(`${sqlBoilerplate}(${data.join(',')})`)
  }
}
