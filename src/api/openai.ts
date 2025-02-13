import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await openai.Completions.create({
      model: "gpt-4-turbo",
      prompt,
      max_tokens: 500,
    });

    const result = response.choices[0].text;

    // Save the AI report to the database
    await prisma.aiReport.create({
      data: {
        userEmail: session.user.email,
        report: result,
      },
    });

    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: "AI request failed", details: error });
  }
}