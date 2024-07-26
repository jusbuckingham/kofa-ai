// pages/api/get-ballots.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const GOOGLE_CIVIC_API_KEY = process.env.GOOGLE_CIVIC_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { zipCode } = req.query;

  if (!zipCode) {
    return res.status(400).json({ error: 'Zip code is required' });
  }

  try {
    const response = await axios.get(`https://www.googleapis.com/civicinfo/v2/voterinfo`, {
      params: {
        key: GOOGLE_CIVIC_API_KEY,
        address: zipCode,
      },
    });

    const ballotInfo = response.data;
    res.status(200).json(ballotInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ballot information' });
  }
}
