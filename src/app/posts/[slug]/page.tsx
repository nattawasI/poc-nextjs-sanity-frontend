/** libs */
import { getPostDetail } from '@/libs/sanity/data'
import { urlFor } from '@/libs/sanity/utils'
import { PortableText } from 'next-sanity'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

/** components */
import Image from 'next/image'
import { ButtonBack } from '@/components/button-back'
// import { PortableContent } from '@/components/portable-content'

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = await getPostDetail(slug)

  if (!post) {
    notFound()
  }

  const { title, publishedAt, image, body } = post

  const postImageUrl = image ? urlFor(image)?.url() : null

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
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
            // components={{
            //   types: {
            //     image: ({ value }) => {
            //       console.log(value)
            //       return <img src={value} />
            //     },
            //   },
            // }}
          />
        )}
      </div>
    </main>
  )
}
