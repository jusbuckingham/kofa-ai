import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

  await prisma.emailLog.deleteMany({
    where: { createdAt: { lt: oneMonthAgo } },
  })

  res.json({ message: 'Old email logs deleted.' })
}
