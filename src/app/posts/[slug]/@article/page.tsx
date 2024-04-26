import { notFound } from 'next/navigation'
import { type ReactNode } from 'react'

import { Views } from './views'

import { allPosts } from 'contentlayer/generated'
import { LocalTime } from '~/components/local-time'
import { getViewsKeyByPostPath } from '~/lib/utils'
import { getCount } from '~/lib/redis'

export default async function Article({
  params,
}: {
  params: { slug: string }
  toc: ReactNode
}) {
  const post = allPosts.find(
    (p) => encodeURI(p._raw.flattenedPath) === params.slug,
  )
  if (!post) {
    notFound()
  }

  const key = await getViewsKeyByPostPath(post._raw.flattenedPath)
  const initialViews = (await getCount(key)) ?? 0

  return (
    <>
      <LocalTime date={post.date} />
      <h1 className="text-pretty">{post.title}</h1>
      <div className="h-4 w-full text-sm">
        <Views path={post._raw.flattenedPath} initialViews={initialViews} />
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      ></div>
    </>
  )
}
