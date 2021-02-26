import express, { Express, Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import chalk from 'chalk'
import { routeEvent } from './routes/event'


let app: Express = null

export function startServer(): Promise<boolean> {
  return new Promise((res) => {
    app = express()

    app.set('trust proxy', 1)

    app.use(helmet())
    app.use(express.json())
    app.use(cookieParser())

    app.post('/event/:namespace/:type', gateway, routeEvent)

    app.all('*', (_, res: Response) => res.status(404).send('404 Not Found'))

    app.listen(process.env.SERVER_PORT, () => {
      console.log(chalk`Server listening on port {yellowBright ${process.env.SERVER_PORT}}`)
      res(true)
    })
  })
}

function gateway(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) return res.status(405).send('405 Not Allowed')
  if (!validateKey(req.headers.authorization, req.params.namespace)) return res.status(405).send('405 Not Allowed')
  next()
}

function validateKey(_key: string, _namespace: string): boolean {
  return true // TODO
}
