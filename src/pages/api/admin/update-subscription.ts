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

    await prisma.subscription.update({
      where: { userEmail: email as string }, // ✅ Explicitly cast `email`
      data: { status },
    })

    res.status(200).json({ message: 'Subscription updated successfully' })
  } catch (error) {
    console.error('Error updating subscription:', error) // ✅ Debugging
    res.status(500).json({ error: 'Internal Server Error' })
  }
}