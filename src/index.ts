import { env } from './lib/env'
import FeedGenerator from './server'

const run = async () => {
  const hostname = env.HOSTNAME
  const serviceDid = env.SERVICE_DID
  const server = FeedGenerator.create({
    port: env.PORT ?? 3000,
    listenhost: env.HOST ?? 'localhost',
    sqliteLocation: env.DB_PATH ?? ':memory:',
    subscriptionEndpoint: env.SUBSCRIPTION_ENDPOINT,
    publisherDid: env.PUBLISHER_DID,
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
