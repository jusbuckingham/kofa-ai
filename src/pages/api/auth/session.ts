import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    res.status(200).json({ session })
  } catch (error) {
    console.error('🔴 Error retrieving session:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
