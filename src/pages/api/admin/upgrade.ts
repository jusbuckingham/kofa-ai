import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (!session || (session.user as any)?.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' })
  }

  try {
    const { email, newRole } = req.body

    await prisma.user.update({
      where: { email },
      data: { role: newRole },
    })

    res.status(200).json({ message: 'User role updated successfully' })
  } catch (error) {
    console.error('Error upgrading user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
