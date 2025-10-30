import { Header } from '@/components/layout/header'

export default function SiteLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='min-h-screen'>
      <Header />

      <main className='container mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
    </div>
  )
}
