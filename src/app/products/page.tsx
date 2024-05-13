import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (
    <>
      <Link href={'/'}>Home</Link>
      <div>ProductList page</div>
      <h2>
        <Link href={`products/1`}> Product 1</Link>
      </h2>
    </>
  )
}
