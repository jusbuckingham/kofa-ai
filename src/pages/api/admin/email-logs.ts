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
    const logs = await prisma.emailLog.findMany({
      orderBy: { createdAt: 'desc' },
    })

    res.status(200).json({ logs })
  } catch (error) {
    console.error('Error fetching email logs:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
