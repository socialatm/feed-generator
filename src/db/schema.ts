export type DatabaseSchema = {
  post: Post
  sub_state: SubState
  auth_session: AuthSession
  auth_state: AuthState
  status: Status
}

export type Post = {
  uri: string
  cid: string
  indexedAt: string
}

export type SubState = {
  service: string
  cursor: number
}

export type AuthSession = {
  key: string
  session: AuthSessionJson
}

export type AuthState = {
  key: string
  state: AuthStateJson
}

type AuthStateJson = string
type AuthSessionJson = string

export type Status = {
  uri: string
  authorDid: string
  status: string
  createdAt: string
  indexedAt: string
}
