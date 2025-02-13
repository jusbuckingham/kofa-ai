import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [userAnalytics, setUserAnalytics] = useState([])

  useEffect(() => {
    if (status === 'unauthenticated' || session?.user.role !== 'admin') {
      router.push('/')
    } else {
      fetch('/api/admin/analytics')
        .then((res) => res.json())
        .then((data) => setUserAnalytics(data.userAnalytics))
    }
  }, [status, session, router]) // ✅ Added `router` to dependencies

  if (status === 'loading') return <p>Loading...</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-700">Manage users & analytics</p>

        {/* User Analytics Table */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">User Analytics</h2>
          <table className="min-w-full border-collapse border border-gray-200 mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">Role</th>
                <th className="border border-gray-200 px-4 py-2">AI Reports</th>
                <th className="border border-gray-200 px-4 py-2">
                  Subscription
                </th>
              </tr>
            </thead>
            <tbody>
              {userAnalytics.map((user) => (
                <tr key={user.email}>
                  <td className="border border-gray-200 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {user.role}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {user.reportsGenerated}
                  </td>
                  <td
                    className={`border border-gray-200 px-4 py-2 
                    ${user.subscriptionStatus === 'active' ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {user.subscriptionStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
