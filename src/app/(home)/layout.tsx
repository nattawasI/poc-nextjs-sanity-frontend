import { Layout, LayoutContent, LayoutScrollArea } from '@/components/layout'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Layout>
      <Header variant="home" />
      <LayoutContent>
        <LayoutScrollArea>{children}</LayoutScrollArea>
      </LayoutContent>
      <Footer isHomePage />
    </Layout>
  )
}
