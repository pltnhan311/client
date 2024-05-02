'use client'
import LoginForm from '@/app/(auth)/login/login-form'
import React from 'react'
export default function LoginPage() {
  return (
    <div className='m-5'>
      <h1 className='text-xl font-semibold text-center mb-5 text-blue-500'>Đăng nhập</h1>
      <LoginForm />
    </div>
  )
}
