'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/shared/button'

import { ClientRoutes } from '@/constants/routes'

import { Logo } from '../shared/logo'

import { NavigationLinks } from './navigation-links'
import { cn } from '@/utils/class-names'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={cn(
        'sticky top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/85 shadow-sm backdrop-blur-md' : 'bg-background',
      )}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 w-full items-center justify-between'>
          <div className='flex items-center'>
            <Link href={ClientRoutes.HOME}>
              <Logo size={96} />
            </Link>
          </div>
          <div className='absolute left-1/2 hidden -translate-x-1/2 items-center md:flex'>
            <NavigationLinks />
          </div>
          <div className='flex items-center gap-4'>
            <div className='hidden items-center space-x-3 md:flex'>
              <div className='flex items-center gap-5'>
                <Button variant='outline' size='sm' className='rounded-full' asChild>
                  <Link href={ClientRoutes.HOME}>Войти</Link>
                </Button>
                <Button variant='primary' size='sm' className='rounded-full' asChild>
                  <Link href={ClientRoutes.HOME}>Регистрация</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
