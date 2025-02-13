async function handleSubscriptionUpdate(email, status) {
    await fetch("/api/admin/update-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, status }),
    });
  
    window.location.reload();
  }
  
  return (
    <td className="border border-gray-200 px-4 py-2">
      <button
        onClick={() => handleSubscriptionUpdate(user.email, "active")}
        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
      >
        Activate
      </button>
      <button
        onClick={() => handleSubscriptionUpdate(user.email, "inactive")}
        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Deactivate
      </button>
    </td>
  );