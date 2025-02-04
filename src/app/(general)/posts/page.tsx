/** libs */
import { urlFor } from '@/libs/sanity/utils'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/libs/sanity/live'
import { POSTS_QUERY } from '@/libs/sanity/query'

/** components */
import { Link } from 'next-view-transitions'
import { ButtonBack } from '@/components/button-back'
import { PostCard, PostCardImage, PostCardBody, PostCardHeading, PostCardMetadata } from '@/components/post-card'

export default async function Posts() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  if (!posts) {
    notFound()
  }

  return (
    <div className="container mx-auto min-h-screen max-w-3xl p-8">
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
    </div>
  )
}
