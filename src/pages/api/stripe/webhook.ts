import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
})

export const config = {
  api: {
    bodyParser: false, // Required for Stripe webhook validation
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  let event
  const sig = req.headers['stripe-signature']

  try {
    const rawBody = await buffer(req)
    event = stripe.webhooks.constructEvent(
      rawBody.toString(),
      sig as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    )
  } catch (err) {
    console.error('🔴 Stripe Webhook Error:', err)
    return res.status(400).json({ error: 'Invalid Stripe Webhook Signature' })
  }

  // Handle Stripe event
  switch (event.type) {
    case 'checkout.session.completed':
      console.log('✅ Payment Success:', event.data.object)
      break
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  res.status(200).json({ received: true })
}
