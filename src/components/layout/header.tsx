'use client'

import { useEffect, useState } from 'react'

import { LogoSection } from './logo-section'
import { NavigationButtons } from './navigation-buttons'
import { GradientBanner } from './gradient-banner'
import { cn } from '@/utils/class-names'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className='bg-transparent transition-all duration-300'>
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 py-2 transition-all duration-300 sm:px-6 lg:px-8',
            isScrolled
              ? 'bg-background/85 rounded-b-2xl shadow-sm backdrop-blur-md'
              : 'bg-white',
          )}
        >
          <div className='relative flex h-16 w-full items-center justify-between'>
            <LogoSection />

            <div className='flex items-center gap-4'>
              <div className='hidden items-center space-x-3 md:flex'>
                <NavigationButtons />
              </div>
            </div>
          </div>
        </div>

        <GradientBanner />
      </header>

      <div
        aria-hidden={!isScrolled}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isScrolled ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
            'transform-gpu transition-all duration-300',
            isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
          )}
        >
          <div className='bg-background/90 mt-2 rounded-2xl shadow-sm backdrop-blur-md'>
            <div className='relative flex w-full items-center justify-between px-4 py-2'>
              <LogoSection compact />

              <div className='hidden items-center md:flex'>
                <NavigationButtons compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
