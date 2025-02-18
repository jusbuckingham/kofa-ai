import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";
import { getSession } from "next-auth/react";
import { sendEmail } from "@/utils/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || (session.user as any)?.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const { email, status } = req.body;

  try {
    await prisma.subscription.update({
      where: { userEmail: email },
      data: { status },
    });

    await sendEmail(
      email,
      `Subscription ${status}`,
      `Your subscription status has been updated to ${status}.`
    );

    res.status(200).json({ message: "Subscription updated successfully" });
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}