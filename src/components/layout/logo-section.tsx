import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/shared/button'
import { LogoIcon } from '@/components/shared/logo-icon'

import { ClientRoutes } from '@/constants/routes'

import { cn } from '@/utils/class-names'

interface LogoSectionProps {
  compact?: boolean
}

export function LogoSection({ compact = false }: LogoSectionProps) {
  return (
    <div className='flex items-center gap-3'>
      <Link href={ClientRoutes.HOME} className='flex items-center'>
        <LogoIcon className={cn(compact ? 'h-8 w-24' : 'size-24')} />
      </Link>

      <Button
        variant='primary'
        size={compact ? 'xs' : 'catalog'}
        className='hidden rounded-sm md:flex'
        asChild
      >
        <Link href={ClientRoutes.HOME}>
          <Image src='/catalog.svg' alt='Catalog' width={24} height={24} />
          <span className='text-md font-semibold'>Каталог</span>
        </Link>
      </Button>
    </div>
  )
}
