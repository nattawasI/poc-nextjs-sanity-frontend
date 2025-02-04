import { Layout, LayoutContent, LayoutScrollArea } from '@/components/layout'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Layout>
      <Header variant="sub-page" />
      <LayoutContent>
        <LayoutScrollArea>{children}</LayoutScrollArea>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}
