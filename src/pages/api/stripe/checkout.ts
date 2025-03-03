import { NextApiRequest, NextApiResponse } from 'next'
import { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia', // ✅ Fix: Use correct Stripe API version
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { priceId, userEmail } = req.body

    if (!priceId || !userEmail) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: userEmail,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    })

    res.status(200).json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: 'Could not create Stripe session' })
  }
}
