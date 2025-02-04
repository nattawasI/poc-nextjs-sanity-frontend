import { FooterNav } from '@/components/footer/footer-nav'
import { SocialNav } from '@/components/footer/social-nav'

const Footer = ({ isHomePage }: { isHomePage?: boolean }) => {
  return (
    <footer className="shrink-0 px-8 pb-6 md:px-10 md:pb-7 lg:pb-10">
      <div className="flex items-center justify-between gap-x-5">
        <FooterNav isHomePage={isHomePage} />
        <SocialNav />
      </div>
    </footer>
  )
}

export { Footer }
