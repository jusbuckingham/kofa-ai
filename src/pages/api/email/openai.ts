import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import OpenAI from "openai";
import { sendEmail } from "@/utils/email";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || !session.user?.email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: "Generate an AI report based on user input...",
      max_tokens: 150,
    });

    const result = response.choices[0].text.trim();

    await sendEmail(session.user.email, "Your AI Report is Ready", `Here is your AI report: ${result}`);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error generating AI report" });
  }
}