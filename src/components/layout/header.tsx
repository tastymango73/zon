'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ClientRoutes } from '@/constants/routes'

import { Button } from '../shared/button'
import { LogoIcon } from '../shared/logo-icon'

import { cn } from '@/utils/class-names'

const NAV_BUTTONS = [
  { href: ClientRoutes.HOME, src: '/person.svg', alt: 'Person', label: 'Войти' },
  { href: ClientRoutes.HOME, src: '/cart.svg', alt: 'Cart', label: 'Корзина' },
  { href: ClientRoutes.HOME, src: '/heart.svg', alt: 'Heart', label: 'Избранное' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='sticky top-0 z-50 rounded-b-lg bg-transparent transition-all duration-300'>
      <div
        className={cn(
          'mx-auto max-w-7xl px-4 py-2 transition-all duration-300 sm:px-6 lg:px-8',
          isScrolled
            ? 'bg-background/85 rounded-b-2xl shadow-sm backdrop-blur-md'
            : 'rounded-b-2xl bg-white',
        )}
      >
        <div className='relative flex h-16 w-full items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Link href={ClientRoutes.HOME}>
              <LogoIcon className='size-24' />
            </Link>

            <Button
              variant='primary'
              size='catalog'
              className='hidden rounded-sm md:flex'
              asChild
            >
              <Link href={ClientRoutes.HOME}>
                <Image src='/catalog.svg' alt='Catalog' width={24} height={24} />
                <span className='text-md font-semibold'>Каталог</span>
              </Link>
            </Button>
          </div>

          <div className='flex items-center gap-4'>
            <div className='hidden items-center space-x-3 md:flex'>
              <div className='flex items-center gap-5'>
                {NAV_BUTTONS.map(({ href, src, alt, label }) => (
                  <Link key={label} href={href} className='flex flex-col items-center'>
                    <Image src={src} alt={alt} width={24} height={24} className='size-6' />
                    <span className='text-xs font-medium'>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
