import dotenv from 'dotenv'
import { env } from './lib/env'
import FeedGenerator from './server'

const run = async () => {
  dotenv.config()
  const hostname = process.env.FEEDGEN_HOSTNAME ?? 'example.com'
  const serviceDid = process.env.FEEDGEN_SERVICE_DID ?? `did:web:${hostname}`
  const server = FeedGenerator.create({
    port: env.PORT ?? 3000,
    listenhost: env.HOST ?? 'localhost',
    sqliteLocation: env.DB_PATH ?? ':memory:',
    subscriptionEndpoint: process.env.FEEDGEN_SUBSCRIPTION_ENDPOINT ?? 'wss://bsky.network',
    publisherDid: process.env.FEEDGEN_PUBLISHER_DID ?? 'did:example:alice',
    subscriptionReconnectDelay: env.SUBSCRIPTION_RECONNECT_DELAY,
    hostname,
    serviceDid,
  })
  await server.start()
  console.log(
    `🤖 running feed generator at http://${server.cfg.listenhost}:${server.cfg.port}`,
  )
//  console.log(JSON.stringify(server.cfg, null, 2))
}

run()
