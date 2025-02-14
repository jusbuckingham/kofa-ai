import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { emailId, url } = req.query;

  if (!emailId || !url) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  // Log the click in the database
  await prisma.emailLog.update({
    where: { id: String(emailId) },
    data: { clicked: true },
  });

  // Redirect the user to the actual URL
  res.redirect(302, decodeURIComponent(url as string));
}