/** libs */
import { client } from '@/libs/sanity/client'
import { urlFor } from '@/libs/sanity/utils'
import { PortableText } from 'next-sanity'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { getImageDimensions } from '@sanity/asset-utils'
import { sanityFetch } from '@/libs/sanity/live'
import { POST_PARAMS_QUERY, POST_DETAIL_QUERY } from '@/libs/sanity/query'

/** components */
import Image from 'next/image'
import { ButtonBack } from '@/components/button-back'
// import { PortableContent } from '@/components/portable-content'

export async function generateStaticParams() {
  const posts = await client.fetch(POST_PARAMS_QUERY)

  if (!Array.isArray(posts)) {
    return []
  }

  return posts.map((post) => ({
    slug: post.slug?.current || '',
  }))
}

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { data: post } = await sanityFetch({ query: POST_DETAIL_QUERY, params })

  if (!post) {
    notFound()
  }

  const { title, publishedAt, image, body } = post

  const postImageUrl = image ? urlFor(image)?.url() : null

  return (
    <div className="container mx-auto min-h-screen max-w-3xl p-8">
      <ButtonBack href="/posts" label="Back to posts" />
      <h1 className="typo-h1">{title as string}</h1>
      <p className="mt-4 text-neutral-500">Published: {format(new Date(publishedAt as string), 'MMM dd, yyyy')}</p>
      {postImageUrl && (
        <div className="relative mt-5 aspect-video rounded-xl">
          <Image
            src={postImageUrl}
            alt={title as string}
            priority
            fill
            sizes="100vw, (min-width: 768px) 704px"
            className="object-cover object-center"
          />
        </div>
      )}
      <div className="prose mt-10">
        {Array.isArray(body) && (
          <PortableText
            value={body}
            components={{
              types: {
                image: ({ value }) => {
                  const { width, height } = getImageDimensions(value)
                  const imageSrc = urlFor(value)?.url()
                  return (
                    <>
                      {imageSrc ? (
                        <Image
                          src={urlFor(value)?.url() as string}
                          alt={value.alt || ''}
                          loading="lazy"
                          width={width}
                          height={height}
                        />
                      ) : null}
                    </>
                  )
                },
              },
            }}
          />
        )}
      </div>
    </div>
  )
}
