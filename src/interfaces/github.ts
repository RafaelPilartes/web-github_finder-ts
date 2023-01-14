export interface githubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  tipo: string
  site_admin: boolean
  pontuação: number
}

export interface githubUserData {
  total_count: number
  resultados_incompletos: boolean
  items: githubUser[]
}

export interface githubUserComplete {
  avatar_url: string
  bio: null
  blog: string
  company: string
  created_at: string
  email: null
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: string
  hireable: null
  html_url: string
  id: number
  location: string
  login: string
  name: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  twitter_username: null
  type: string
  updated_at: string
  url: string
}
