import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Incoming request body:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { priceType, userEmail } = req.body;
    console.log("Received priceType:", priceType);
    console.log("Received userEmail:", userEmail);

    if (!priceType || !userEmail) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let priceId;
    switch (priceType) {
      case "basic_monthly":
        priceId = process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY;
        break;
      case "basic_annual":
        priceId = process.env.NEXT_PUBLIC_STRIPE_BASIC_ANNUAL;
        break;
      case "basic_one_time":
        priceId = process.env.NEXT_PUBLIC_STRIPE_BASIC_ONE_TIME;
        break;
      case "pro_monthly":
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY;
        break;
      case "pro_annual":
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRO_ANNUAL;
        break;
      case "pro_one_time":
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRO_ONE_TIME;
        break;
      default:
        console.error("🚨 Invalid price type received:", priceType);
        return res.status(400).json({ error: "Invalid price type. Check your environment variables." });
    }

    if (!priceId) {
      console.error("🚨 Missing price ID in environment variables.");
      return res.status(400).json({ error: "Invalid price ID. Check your environment variables." });
    }

    console.log("Using price ID:", priceId);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: userEmail,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: priceType.includes("one_time") ? "payment" : "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    });

    console.log("✅ Stripe session created:", session.id);

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("🔥 Stripe API Error:", error);
    res.status(500).json({ error: "Could not create Stripe session" });
  }
}