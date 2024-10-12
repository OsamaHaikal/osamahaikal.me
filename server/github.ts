import type { H3Event } from 'h3'
import { Octokit } from 'octokit'

let __octokit: Octokit

export function useOctokit() {
  const config = useRuntimeConfig()

  if (__octokit == null) {
    return new Octokit({
      auth: config.githubToken,
    })
  }
  return __octokit
}

export const getRepoInfo = defineCachedFunction(async (event: H3Event, owner: string, name: string) => {
  const { data } = await useOctokit().request('GET /repos/{owner}/{name}', {
    owner,
    name,
  })

  return data
}, {
  maxAge: 60 * 60 * 24, // 1 day
  swr: true,
  group: 'functions',
  name: 'get-repo-info',
  getKey: (_event: H3Event, owner: string, repo: string) => `${owner}/${repo}`,
})

export const getPullRequests = defineCachedFunction(async (event: H3Event, searchQuery: string) => {
  return await useOctokit().rest.search.issuesAndPullRequests({
    q: searchQuery,
    per_page: 100,
  })
}, {
  maxAge: 60 * 60 * 24, // 1 day
  swr: true,
  group: 'functions',
  name: 'get-pull-requests',
  getKey: (_event: H3Event, searchQuery) => `${searchQuery}`,
})
