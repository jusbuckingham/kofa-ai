import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const emailLogs = await prisma.emailLog.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json({ emailLogs });
}