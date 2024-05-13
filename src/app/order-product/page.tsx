'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function OrderProduct() {
  const router = useRouter()
  const handlePurchase = () => {
    router.push('/')
  }

  return (
    <>
      <h1>OrderProduct</h1>
      <Button onClick={handlePurchase}>Purchase</Button>
    </>
  )
}
