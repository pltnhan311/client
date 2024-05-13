import React from 'react'
import { notFound } from 'next/navigation'

export default function ReviewDetail({
  params
}: {
  params: {
    productId: string
    reviewId: string
  }
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }
  return (
    <div>
      Review {params.reviewId} of product {params.productId}
    </div>
  )
}
