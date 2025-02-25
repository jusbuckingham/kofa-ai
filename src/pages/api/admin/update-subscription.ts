import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') 
    return res.status(405).json({ error: 'Method Not Allowed' })

  try {
    const { email, status } = req.body

    if (!email || !status) {
      return res.status(400).json({ error: 'Missing email or status' })
    }

    // ✅ First, find the user's ID using their email
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true }
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // ✅ Update subscription using `userId`
    const result = await prisma.subscription.update({
      where: { userId: user.id },
      data: { status },
    })

    res.status(200).json({ message: 'Subscription updated successfully', result })
  } catch (error) {
    console.error('Error updating subscription:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}