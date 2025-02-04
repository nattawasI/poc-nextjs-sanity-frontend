/** libs */
import { cn } from '@/libs/utils'

/** components */
import { Link } from 'next-view-transitions'

/** types */
import type { NavItemType } from '@/types'

const items: NavItemType[] = [
  { id: 'story-chapters', href: '/story/chapters', label: 'Story' },
  { id: 'details', href: '/details', label: 'Details' },
  { id: 'gallery', href: '/gallery', label: 'Gallery' },
  { id: 'connect', href: '/connect', label: 'Connect' },
]

const FooterNav = ({ isHomePage, theme = 'light' }: { isHomePage?: boolean; theme?: 'dark' | 'light' }) => {
  return (
    <nav className="flex gap-x-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            'typo-heading-2 transition-all',
            theme === 'light' ? 'text-neutral-100' : '',
            !isHomePage ? 'opacity-40' : '',
            'hover:underline hover:opacity-100',
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export { FooterNav }
