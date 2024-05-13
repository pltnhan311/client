'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    name: 'Login',
    href: '/login'
  },
  {
    name: 'Register',
    href: '/register'
  },
  {
    name: 'Forgot Password',
    href: '/forgot-password'
  }
]
export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathName = usePathname()

  return (
    <div className='max-w-[600px]'>
      <h2>Auth layout</h2>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href)
        return (
          <Link
            className={isActive ? 'font-bold text-blue-500 mr-4' : 'text-green-500 mr-4'}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>
  )
}
