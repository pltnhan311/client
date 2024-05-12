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
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/products'}>Products</Link>
        </li>
      </ul>
    </main>
  )
}
