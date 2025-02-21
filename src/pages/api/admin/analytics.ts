import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method Not Allowed' })

  try {
    const users = await prisma.user.findMany()
    const subscriptions = await prisma.subscription.findMany()

    const userAnalytics = users.map((user: { email: string }) => ({
      email: user.email,
      subscriptionStatus:
        subscriptions.find(
          (sub: { userEmail: string }) => sub.userEmail === user.email
        )?.status || 'inactive',
    }))

    res.status(200).json({ userAnalytics })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
