import { config as loadDotenv } from 'dotenv'
import isDocker from 'is-docker'
import { startServer } from './server'
import { connectSQL } from './sql'


async function main() {
  if (!isDocker()) loadDotenv()
  await connectSQL()
  await startServer()
}
main()
