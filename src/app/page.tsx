import ButtonRedirect from '@/app/components/ButtonRedirect'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ul className='text-blue-600'>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/register'}>Register</Link>
        </li>
      </ul>
      <ButtonRedirect />
    </main>
  )
}
