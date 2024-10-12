import { getPullRequests, getRepoInfo } from '~~/server/github'
import type { PullRequest } from '~~/server/types'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const username = config.public.githubUsername

  const response = await getPullRequests(event, `is:pr author:${username} -user:${username}`)

  // filter out closed PRs but not merged
  const data = response.data.items.filter(pr => !(pr.state === 'closed' && !pr.pull_request?.merged_at))

  const result: PullRequest[] = []

  for (const pr of data) {
    const [owner, name] = pr.repository_url.split('/').slice(-2)
    if (owner == null || name == null) {
      throw createError({
        message: `Repository url is invalid ${pr.repository_url}`,
      })
    }

    const repo = await getRepoInfo(event, owner, name)

    result.push({
      title: pr.title,
      url: pr.html_url,
      created_at: pr.created_at,
      state: pr.state,
      draft: !!pr.draft,
      number: pr.number,
      repo: {
        name: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        avatar: repo.owner.avatar_url ?? repo.organization.avatar_url,
        stars: repo.stargazers_count,
      },
    })
  }

  return result
})
