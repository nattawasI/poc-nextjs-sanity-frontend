/** libs */
import { urlFor } from '@/libs/sanity/utils'
import { getPosts } from '@/libs/sanity/data'
import { format } from 'date-fns'

/** components */
import Link from 'next/link'
import { ButtonBack } from '@/components/button-back'
import { PostCard } from '@/components/post-card'

export default async function Posts() {
  const posts = await getPosts()
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <ButtonBack href="/" label="Back to home" />
      <h1 className="typo-h1 mb-8">Posts</h1>
      <div className="flex flex-col gap-y-5">
        {posts.map((post) => {
          const { title, image, publishedAt } = post
          return (
            <div className="hover:underline" key={post._id}>
              <Link href={`/posts/${post.slug?.current as string}`} prefetch={false} className="block">
                <PostCard
                  image={image ? urlFor(image)?.url() : null}
                  title={title as string}
                  publishedAt={format(new Date(publishedAt as string), 'MMM dd, yyyy')}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}
