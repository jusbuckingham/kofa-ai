import OpenAI from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in .env.local
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await openai.Completions.create({
      model: "gpt-4-turbo",
      prompt,
      max_tokens: 500,
    });

    return res.status(200).json({ result: response.choices[0].text });
  } catch (error) {
    return res.status(500).json({ error: 'AI request failed', details: error });
  }
}