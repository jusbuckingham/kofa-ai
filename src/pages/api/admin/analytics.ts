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
    const users = await prisma.user.findMany({
      select: { id: true, email: true }, // ✅ Select both id & email
    })
    const subscriptions = await prisma.subscription.findMany()

    const userAnalytics = users.map((user) => ({
      email: user.email,
      subscriptionStatus:
        subscriptions.find((sub) => sub.userId === user.id)?.status || 'inactive',
    }))

    res.status(200).json({ userAnalytics })
  } catch (error) {
    console.error('Error fetching analytics:', error) // ✅ Log error for debugging
    res.status(500).json({ error: 'Internal Server Error' })
  }
}