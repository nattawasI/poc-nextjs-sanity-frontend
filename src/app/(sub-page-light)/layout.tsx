import { Layout, LayoutContent, LayoutScrollArea } from '@/components/layout'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function SubPageLightLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Layout className="bg-neutral-100 text-neutral-600">
      <Header variant="sub-page-light" />
      <LayoutContent>
        <LayoutScrollArea>{children}</LayoutScrollArea>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}
