import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated" || session?.user.role !== "admin") {
      router.push("/");
    } else {
      fetch("/api/admin/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.users));
    }
  }, [status, session]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-700">Manage users & subscriptions</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Registered Users</h2>
          <table className="min-w-full border-collapse border border-gray-200 mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">Role</th>
                <th className="border border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{user.role}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleUpgrade(user.email)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Upgrade to Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

async function handleUpgrade(email) {
  await fetch("/api/admin/upgrade", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  window.location.reload();
}