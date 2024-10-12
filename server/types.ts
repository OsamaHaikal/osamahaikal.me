export interface Repository {
  name: string
  description: string | null
  url: string
  avatar: string
  stars: number
}

export interface PullRequest {
  title: string
  url: string
  created_at: string
  state: string
  draft: boolean
  number: number
  repo: Repository
}
