import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Iphone ${params.productId}`), 1000)
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetail({
  params
}: {
  params: {
    productId: string
  }
}) {
  return <div>Product Detail Id {params.productId} </div>
}
