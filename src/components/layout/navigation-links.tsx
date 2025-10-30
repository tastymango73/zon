import Link from 'next/link'

import { ClientRoutes } from '@/constants/routes'

export const LINKS = [
  { title: 'Placeholder', href: ClientRoutes.HOME },
  { title: 'Placeholder', href: ClientRoutes.HOME },
]

export function NavigationLinks() {
  return (
    <nav className='hidden items-center space-x-7 text-sm font-medium md:flex'>
      {LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className='hover:text-foreground text-sm text-neutral-600 transition dark:text-neutral-300 dark:hover:text-white'
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}
