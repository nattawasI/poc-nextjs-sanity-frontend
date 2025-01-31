/** libs */
import { urlFor } from '@/libs/sanity/utils'
import { getPosts } from '@/libs/sanity/data'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

/** components */
import Link from 'next/link'
import { ButtonBack } from '@/components/button-back'
import { PostCard, PostCardImage, PostCardBody, PostCardHeading, PostCardMetadata } from '@/components/post-card'

export default async function Posts() {
  const posts = await getPosts()

  if (!posts) {
    notFound()
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <ButtonBack href="/" label="Back to home" />
      <h1 className="typo-h1 mb-8">Posts</h1>
      <div className="flex flex-col gap-y-5">
        {posts.map((post) => {
          const { title, image, publishedAt } = post
          const finalImage = image ? urlFor(image)?.url() : null
          return (
            <div className="hover:underline" key={post._id}>
              <Link href={`/posts/${post.slug?.current as string}`} prefetch={false} className="block">
                <PostCard>
                  {finalImage ? <PostCardImage src={finalImage} alt={title as string} /> : null}
                  <PostCardBody>
                    <PostCardHeading>{title as string}</PostCardHeading>
                    <PostCardMetadata>{format(new Date(publishedAt as string), 'MMM dd, yyyy')}</PostCardMetadata>
                  </PostCardBody>
                </PostCard>
              </Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}
