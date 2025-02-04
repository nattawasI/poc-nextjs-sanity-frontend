/** components */
import { cn } from '@/libs/utils'

/** components */
import { Link } from 'next-view-transitions'
import { ArrowLeft } from 'lucide-react'

const ButtonBack = ({ href, label, className }: { href: string; label: string; className?: string }) => {
  return (
    <Link href={href} className={cn('mb-10 inline-flex items-center gap-x-1 hover:underline', className)}>
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  )
}

export { ButtonBack }
