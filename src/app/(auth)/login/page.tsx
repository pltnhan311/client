'use client'
import React, { useState } from 'react'
export default function LoginPage() {
  const [email, setEmail] = useState('nhan@gmail.com')
  return (
    <>
      <div>Login page</div>
      <span>Email: {email}</span>
    </>
  )
}
