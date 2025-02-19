import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session || session.user?.role !== "admin") {
      router.push("/auth/signin"); // Redirect to sign-in if not admin
    }
  }, [status, session, router]);

  if (status === "loading") return <p>Loading...</p>;

  if (!session || session.user?.role !== "admin") {
    return <p>Unauthorized</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
    </div>
  );
}