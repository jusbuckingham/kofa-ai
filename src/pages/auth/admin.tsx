import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("🔍 Debug: session object →", session); // ✅ Check what session contains

  useEffect(() => {
    if (status === "loading") return; // Wait until session is loaded
    if (!session || session.user.role !== "admin") {
      router.push("/"); // Redirect unauthorized users
    }
  }, [status, session, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session || session.user.role !== "admin") return <p>Unauthorized</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
    </div>
  );
}