/** libs */
import { cn } from '@/libs/utils'

/** components */
import { Link } from 'next-view-transitions'
import { LogoPrimary, LogoSecondary } from '@/components/logos'
import { HeaderNav } from '@/components/header/header-nav'

const Header = ({ isHomePage, theme = 'light' }: { isHomePage?: boolean; theme?: 'dark' | 'light' }) => {
  return (
    <header className="relative z-[1] flex shrink-0 items-start justify-between gap-x-5 px-8 pt-6 md:px-10 md:pt-7 lg:pt-10">
      <h1>
        <Link
          href="/"
          className={cn(
            'block [&>svg]:w-full',
            isHomePage ? 'w-[5.25rem] md:w-[12.25rem]' : 'w-[8rem] md:w-[10.625rem]',
            theme === 'light' ? 'text-neutral-100' : '',
          )}
        >
          {isHomePage ? <LogoPrimary /> : <LogoSecondary />}
        </Link>
      </h1>
      <div className="shrink-0 md:-mt-2">
        <HeaderNav theme={theme} />
      </div>
    </header>
  )
}

export { Header }
