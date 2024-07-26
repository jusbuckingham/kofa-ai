import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { address } = req.query;
  // Fetch voter information from Google Civic Information API
  // ...
  res.status(200).json({ /* voter information */ });
}
