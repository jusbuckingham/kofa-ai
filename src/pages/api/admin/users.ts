import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    console.error("🔴 Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}