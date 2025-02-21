import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prisma'
import bcrypt from 'bcryptjs'
import { sendEmail } from '@/utils/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('📩 Incoming signup request...')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { email, password } = req.body
    console.log('📩 Received body:', req.body)

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'user',
      },
    })

    console.log('✅ User created successfully:', newUser)

    await sendEmail(
      email,
      'Welcome to Kofa AI',
      'Your account has been created.'
    )

    return res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    console.error('❌ Error creating user:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
