import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="flex-1 overflow-hidden">
        <div className="no-scrollbar h-full overflow-y-auto">{children}</div>
      </div>
      <Footer />
    </>
  )
}
