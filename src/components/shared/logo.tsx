import Image from 'next/image'

interface LogoProps {
  size?: number
}

export function Logo({ size = 40 }: LogoProps) {
  return <Image src='/logo.svg' alt='Logo' width={size} height={size} priority />
}
