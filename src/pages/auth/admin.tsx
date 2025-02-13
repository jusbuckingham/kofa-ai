import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AdminAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated' || session?.user.role !== 'admin') {
      router.push('/')
    }
  }, [status, session, router]) // ✅ Added `router` to dependencies

  if (status === 'loading') return <p>Loading...</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900">Admin Access</h1>
      <p className="text-gray-700">You have access to admin privileges.</p>
    </div>
  )
}
