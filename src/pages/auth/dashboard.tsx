import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [aiReports, setAiReports] = useState([])

  useEffect(() => {
    if (session) {
      fetch('/api/reports')
        .then((res) => res.json())
        .then((data) => setAiReports(data.reports))
    }
  }, [session])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4">You must be logged in to access the dashboard.</p>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        <p className="text-gray-700">Welcome, {session.user?.email}!</p>

        {/* Subscription Info */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Subscription Status</h2>
          <p className="text-green-600">Active</p>
          <button
            onClick={() => (window.location.href = '/api/stripe/checkout')}
            className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Upgrade Subscription
          </button>
        </div>

        {/* AI Reports Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your AI-Generated Reports</h2>
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

        {/* Logout Button */}
        <button
          onClick={() => signOut()}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
