'use client'

/** libs */
import { Link } from 'next-view-transitions'
import { cn } from '@/libs/utils'
import { usePathname } from 'next/navigation'

/** types */
import type { NavItemType } from '@/types'

const items: NavItemType[] = [
  {
    id: 'play-full-film',
    href: '/play-full-film',
    label: 'PLAY FULL FILM',
  },
  {
    id: 'enquire',
    href: '/enquire',
    label: 'ENQUIRE',
  },
]

const HeaderNav = () => {
  const pathname = usePathname()
  return (
    <nav>
      {items.map((item) => (
        <div key={item.id} className="flex justify-end">
          <Link href={item.href} className={cn('typo-heading-2 uppercase', item.href === pathname ? 'font-bold' : '')}>
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export { HeaderNav }
