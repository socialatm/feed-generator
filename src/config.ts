import { Database } from './db'
import { DidResolver } from '@atproto/identity'
import type { OAuthClient } from '@atproto/oauth-client-node'
import { pino } from 'pino'

export type AppContext = {
  db: Database
  didResolver: DidResolver
  cfg: Config
  oauthClient: OAuthClient
  logger: pino.Logger
}

export type Config = {
  port: number
  listenhost: string
  hostname: string
  sqliteLocation: string
  subscriptionEndpoint: string
  serviceDid: string
  publisherDid: string
  subscriptionReconnectDelay: number
}
