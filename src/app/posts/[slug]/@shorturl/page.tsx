import { TwitterShare } from './twitter-share'
import { CopyToClipboard } from './copy-to-clipboard'

import { allPosts } from 'contentlayer/generated'
import { SITE_URL } from '~/constants'
import { ensurePostId } from '~/lib/redis'

const ShortUrl = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (p) => encodeURI(p._raw.flattenedPath) === params.slug,
  )
  if (!post) {
    return null
  }
  const id = await ensurePostId(post._raw.flattenedPath)

  if (!id) {
    return null
  }

  const url = new URL(id, SITE_URL).toString()

  return (
    <div className="prose prose-neutral flex max-w-[65ch] items-center gap-4 pr-4 dark:prose-invert">
      <span className="flex-1 rounded border p-2">
        本文短链接：<a href={url}>{url}</a>
      </span>

      <CopyToClipboard text={url} />
      <TwitterShare url={url} />
    </div>
  )
}

export default ShortUrl