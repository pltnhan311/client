import Link from "next/link"

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-[600px]">
      {children}
    </div>
  )
}
