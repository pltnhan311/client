import RegisterForm from '@/app/(auth)/register/register-form'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='m-5'>
      <h1 className='text-xl font-semibold text-center mb-5 text-blue-500'>Đăng ký</h1>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
