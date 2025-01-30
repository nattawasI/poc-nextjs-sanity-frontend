import Image from 'next/image'

type Props = { title: string; image: string | null | undefined; publishedAt: string }

const PostCard = ({ title, image, publishedAt }: Props) => {
  return (
    <div className="flex gap-x-5">
      {image && (
        <div className="relative aspect-video w-[160px] shrink-0 rounded-xl">
          <Image src={image} alt={title} priority fill sizes="112px" className="object-cover object-center" />
        </div>
      )}
      <div>
        <h3 className="line-clamp-2 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{publishedAt}</p>
      </div>
    </div>
  )
}

export { PostCard }
