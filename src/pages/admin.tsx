import { useSession } from "next-auth/react";

interface Log {
  id: string;
  userEmail: string;
  subject: string;
  status: string;
  clicked: boolean;
  createdAt: string;
}

const logs: Log[] = []; // Replace with actual logs from database

export default function AdminPage() {
  const { data: session } = useSession();

  if (!session?.user || (session.user as any).role !== "admin") {
    return <p>Unauthorized</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>User Email</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Clicked</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.userEmail}</td>
              <td>{log.subject}</td>
              <td>{log.status}</td>
              <td>{log.clicked ? "Yes" : "No"}</td>
              <td>{new Date(log.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}