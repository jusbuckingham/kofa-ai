import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' })
  }

  try {
    const reports = await prisma.aIReport.findMany() // ✅ Corrected model name
    res.status(200).json({ reports })
  } catch (error) {
    console.error('🔴 Error fetching reports:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
