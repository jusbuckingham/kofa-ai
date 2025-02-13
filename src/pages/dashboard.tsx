import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [aiReports, setAiReports] = useState([])

  useEffect(() => {
    if (!session) {
      router.push('/auth/login')
    } else {
      fetch('/api/reports')
        .then((res) => res.json())
        .then((data) => setAiReports(data.reports))
    }
  }, [session, router]) // ✅ Added `router` to dependencies

  if (status === 'loading') return <p>Loading...</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        <p className="text-gray-700">Welcome, {session?.user?.email}!</p>

        {/* AI Reports Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your AI Reports</h2>
          {aiReports.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {aiReports.map((report, index) => (
                <li key={index} className="p-3 border rounded-lg bg-gray-100">
                  {report}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-3">No reports yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
