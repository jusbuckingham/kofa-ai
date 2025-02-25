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

    // ✅ Ensure Prisma recognizes `userEmail`
    const result = await prisma.subscription.updateMany({
      where: { userEmail: email as string }, // ✅ Explicitly cast `email`
      data: { status },
    })

    if (result.count === 0) {
      return res.status(404).json({ error: 'Subscription not found' })
    }

    res.status(200).json({ message: 'Subscription updated successfully' })
  } catch (error) {
    console.error('Error updating subscription:', error) // ✅ Debugging
    res.status(500).json({ error: 'Internal Server Error' })
  }
}