'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema'
import { useToast } from '@/components/ui/use-toast'

const LoginForm = () => {
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    try {
      const result = await fetch(`http://localhost:4000/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(async (res) => {
        const payload = await res.json()
        const data = { status: res.status, payload }
        if (!res.ok) throw data
        return data
      })
      toast({
        description: result.payload.message
      })
      const resultFromNextServer = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async (res) => {
        const payload = await res.json()
        const data = { status: res.status, payload }
        if (!res.ok) throw data
        return data
      })
      console.log(resultFromNextServer)
    } catch (error: any) {
      const errors = error.payload.errors as { field: string; message: string }[]
      const status = error.status as number
      if (status === 422) {
        errors.forEach((error) => {
          form.setError(error.field as 'email' | 'password', {
            type: 'server',
            message: error.message
          })
        })
      } else {
        toast({
          title: 'Lỗi',
          description: error.payload.message,
          variant: 'destructive'
        })
      }
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2' noValidate>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full !mt-5 bg-blue-600 hover:bg-blue-700 text-white' type='submit'>
          Đăng nhập
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
