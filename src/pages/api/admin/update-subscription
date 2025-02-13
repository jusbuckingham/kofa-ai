import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "@/utils/email";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const { email, status } = req.body;

  await prisma.subscription.upsert({
    where: { userEmail: email },
    update: { status },
    create: { userEmail: email, status },
  });

  // Send Subscription Notification Email
  await sendEmail(email, `Subscription ${status}`, "subscription", {
    status,
    message: status === "active" ? "full access to Kofa AI's features." : "limited access.",
  });

  res.json({ success: true });
}