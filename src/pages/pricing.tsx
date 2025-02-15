import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId,
        userEmail: "user@example.com", // Replace with actual user email
      }),
    });
    const { sessionId } = await res.json();
    if (sessionId) {
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold">Choose Your Plan</h1>
      <div className="flex gap-6 mt-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold">Basic Plan</h2>
          <p className="text-gray-600">$5/month</p>
          <button
            onClick={() => handleCheckout("price_basic_plan_id")}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? "Processing..." : "Subscribe"}
          </button>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold">Pro Plan</h2>
          <p className="text-gray-600">$10/month</p>
          <button
            onClick={() => handleCheckout("price_pro_plan_id")}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? "Processing..." : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}