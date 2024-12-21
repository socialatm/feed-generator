import dotenv from 'dotenv'
import { env } from './lib/env'
import FeedGenerator from './server'

const run = async () => {
  dotenv.config()
  const hostname = process.env.FEEDGEN_HOSTNAME ?? 'example.com'
  const serviceDid = process.env.FEEDGEN_SERVICE_DID ?? `did:web:${hostname}`
  const server = FeedGenerator.create({
    port: maybeInt(process.env.FEEDGEN_PORT) ?? 3000,
    listenhost: process.env.FEEDGEN_LISTENHOST ?? 'localhost',
    sqliteLocation: process.env.FEEDGEN_SQLITE_LOCATION ?? ':memory:',
    subscriptionEndpoint: process.env.FEEDGEN_SUBSCRIPTION_ENDPOINT ?? 'wss://bsky.network',
    publisherDid: process.env.FEEDGEN_PUBLISHER_DID ?? 'did:example:alice',
    subscriptionReconnectDelay:
      maybeInt(process.env.FEEDGEN_SUBSCRIPTION_RECONNECT_DELAY) ?? 3000,
    hostname,
    serviceDid,
  })
  await server.start()
  console.log(
    `🤖 running feed generator at http://${server.cfg.listenhost}:${server.cfg.port}`,
  )
//  console.log(JSON.stringify(server.cfg, null, 2))
}

const maybeInt = (val?: string) => {
  if (!val) return undefined
  const int = parseInt(val, 10)
  if (isNaN(int)) return undefined
  return int
}

run()
