import dotenv from 'dotenv'
import { cleanEnv, host, num, port, str, testOnly } from 'envalid'

dotenv.config()

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    devDefault: testOnly('test'),
    choices: ['development', 'production', 'test'],
  }),
  HOST: host({ devDefault: testOnly('localhost') }),
  PORT: port({ devDefault: testOnly(3000) }),
  PUBLIC_URL: str({}),
  DB_PATH: str({ devDefault: ':memory:' }),
  COOKIE_SECRET: str({ devDefault: '00000000000000000000000000000000' }),
  SUBSCRIPTION_RECONNECT_DELAY: num({devDefault: 3000}),
  SUBSCRIPTION_ENDPOINT: str({ devDefault: 'wss://bsky.network' }),
  HOSTNAME: str({ devDefault: 'localhost:3000' }),
  PUBLISHER_DID: str({ devDefault: 'did:example:alice' }),
  SERVICE_DID: str({ devDefault: 'did:web:localhost:3000' }),
})
