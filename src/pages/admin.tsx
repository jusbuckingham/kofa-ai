import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [emailLogs, setEmailLogs] = useState([]);

  useEffect(() => {
    console.log("Session Data:", session);
    console.log("Status:", status);

    if (status === "loading") return; // Prevent early redirect

    if (!session || !session.user || session.user.role !== "admin") {
      console.log("Redirecting: User is not an admin");
      router.push("/");
    } else {
      fetch("/api/admin/email-logs")
        .then((res) => res.json())
        .then((data) => setEmailLogs(data.emailLogs));
    }
  }, [status, session, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-700">Monitor email performance</p>

        {/* Email Logs Table */}
        <div className="mt-6 overflow-x-auto">
          <h2 className="text-xl font-semibold">Email Logs</h2>
          <table className="min-w-full border-collapse border border-gray-200 mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">User Email</th>
                <th className="border border-gray-200 px-4 py-2">Subject</th>
                <th className="border border-gray-200 px-4 py-2">Status</th>
                <th className="border border-gray-200 px-4 py-2">Clicked</th>
                <th className="border border-gray-200 px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {emailLogs.length > 0 ? (
                emailLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">{log.userEmail}</td>
                    <td className="border border-gray-200 px-4 py-2">{log.subject}</td>
                    <td
                      className={`border border-gray-200 px-4 py-2 ${
                        log.status === "opened"
                          ? "text-blue-600"
                          : log.status === "sent"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {log.status}
                    </td>
                    <td
                      className={`border border-gray-200 px-4 py-2 ${
                        log.clicked ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {log.clicked ? "Yes" : "No"}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="border border-gray-200 px-4 py-2 text-center text-gray-500">
                    No email logs available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}