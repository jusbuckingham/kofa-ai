import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  // Get AI usage per user
  const users = await prisma.user.findMany({
    select: {
      email: true,
      role: true,
      _count: {
        select: { AIReport: true }, // Count AI reports per user
      },
    },
  });

  // Get subscription status per user
  const subscriptions = await prisma.subscription.findMany({
    select: { userEmail: true, status: true },
  });

  // Merge subscription status into user data
  const userAnalytics = users.map((user) => ({
    email: user.email,
    role: user.role,
    reportsGenerated: user._count.AIReport,
    subscriptionStatus: subscriptions.find((sub) => sub.userEmail === user.email)?.status || "inactive",
  }));

  res.json({ userAnalytics });
}