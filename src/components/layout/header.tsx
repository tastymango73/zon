'use client'

import { useScrollVisibility } from '@/hooks/use-scroll-visibility'

import { GradientBanner } from './gradient-banner'
import { LogoSection } from './logo-section'
import { NavigationButtons } from './navigation-buttons'
import { cn } from '@/utils/class-names'

export function Header() {
  const { isVisible: isCompactVisible, instantHide } = useScrollVisibility({
    showAt: 80,
    hideAt: 32,
    predictiveOffWindow: 140,
  })

  return (
    <>
      <header className='bg-transparent transition-all duration-300'>
        <div className='mx-auto max-w-7xl bg-white px-4 py-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 w-full items-center justify-between'>
            <LogoSection />
            <div className='hidden items-center md:flex'>
              <NavigationButtons />
            </div>
          </div>
        </div>
        <GradientBanner />
      </header>

      <div
        aria-hidden={!isCompactVisible}
        className={cn(
          'fixed inset-x-0 top-0 z-50',
          isCompactVisible ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl transform-gpu px-4 sm:px-6 lg:px-8',
            isCompactVisible
              ? 'translate-y-0 opacity-100 transition-all duration-300'
              : cn(instantHide ? 'duration-0' : 'duration-150', '-translate-y-4 opacity-0'),
          )}
        >
          <div className='bg-background/90 mt-2 rounded-2xl shadow-sm backdrop-blur-md will-change-transform'>
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
