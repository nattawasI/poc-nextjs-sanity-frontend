/** libs */
import { ReactElement } from 'react'
import { cn } from '@/libs/utils'

/** components */
import { Link } from 'next-view-transitions'
import { Facebook, Instagram, Youtube } from '@/components/icons'

type SocialNavItemType = {
  id: string
  href: string
  label: string
  icon: ReactElement
}

const items: SocialNavItemType[] = [
  { id: 'facebook', href: '/', label: 'Navigate to Facebook', icon: <Facebook /> },
  { id: 'instagram', href: '/', label: 'Navigate to Instagram', icon: <Instagram /> },
  { id: 'youtube', href: '/', label: 'Navigate to Youtube', icon: <Youtube /> },
]

const SocialNav = ({ theme = 'light' }: { theme?: 'dark' | 'light' }) => {
  return (
    <nav className="flex gap-x-6 max-md:hidden">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          target="_blank"
          aria-label={item.label}
          className={cn('block h-5 w-5', theme === 'light' ? 'text-neutral-100' : '')}
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}

export { SocialNav }
