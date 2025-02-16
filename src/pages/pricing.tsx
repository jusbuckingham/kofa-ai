import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with Public Key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (priceType: string, priceId: string) => {
    setLoadingPlan(priceId);
    const stripe = await stripePromise;

    console.log("⚡ Sending Request:", { priceType, priceId });

    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceType,
        priceId,
        userEmail: "user@example.com", // Replace with actual user email
      }),
    });

    const data = await res.json();
    console.log("💳 Stripe Checkout Response:", data);

    if (!res.ok) {
      console.error("🚨 Error:", data.error);
      alert(`Checkout failed: ${data.error}`);
      setLoadingPlan(null);
      return;
    }

    if (data.sessionId && stripe) {
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    }

    setLoadingPlan(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold">Choose Your Plan</h1>
      <div className="flex gap-6 mt-6">
        
        {/* Basic Plan */}
        <div className="p-6 border rounded-lg bg-white shadow-lg">
          <h2 className="text-xl font-semibold">Basic Plan</h2>
          <p className="text-gray-600">$5/month</p>
          <button
            onClick={() => handleCheckout("basic_monthly", process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY!)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
            disabled={loadingPlan === process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY}
          >
            {loadingPlan === process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY ? "Processing..." : "Subscribe"}
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-6 border rounded-lg bg-white shadow-lg">
          <h2 className="text-xl font-semibold">Pro Plan</h2>
          <p className="text-gray-600">$11/month</p>
          <button
            onClick={() => handleCheckout("pro_monthly", process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY!)}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg"
            disabled={loadingPlan === process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY}
          >
            {loadingPlan === process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY ? "Processing..." : "Subscribe"}
          </button>
        </div>

      </div>
    </div>
  );
}