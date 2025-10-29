import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/shared/button'

import { ClientRoutes } from '@/constants/routes'

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='px-4 py-10 text-center sm:px-6 lg:px-8'>
        <h1 className='text-primary block text-8xl font-bold'>404</h1>
        <p className='text-muted-foreground mt-6 text-lg'>
          Кажется, мы потеряли эту страницу.
        </p>
        <div className='mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3'>
          <Button
            asChild
            size='lg'
            className='bg-primary hover:bg-primary/80 text-white transition-colors'
          >
            <Link href={ClientRoutes.HOME}>
              На главную
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
