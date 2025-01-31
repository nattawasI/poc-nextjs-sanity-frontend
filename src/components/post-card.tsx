import { HTMLAttributes } from 'react'
import { cn } from '@/libs/utils'
import Image from 'next/image'

const PostCard = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex gap-x-5', className)} {...props} />
}

const PostCardImage = ({
  src,
  alt,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { src: string; alt: string }) => {
  return (
    <div className={cn('relative aspect-video w-[160px] shrink-0 rounded-xl', className)} {...props}>
      <Image src={src} alt={alt} priority fill sizes="112px" className="object-cover object-center" />
    </div>
  )
}

const PostCardBody = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} />
}

const PostCardHeading = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h3 className={cn('line-clamp-2 text-xl font-semibold tracking-tight', className)} {...props} />
}

const PostCardMetadata = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn('mt-2 text-sm text-neutral-500', className)} {...props} />
}

export { PostCard, PostCardImage, PostCardBody, PostCardHeading, PostCardMetadata }
