import nodemailer from "nodemailer";
import { loadTemplate } from "./emailTemplates";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendEmail(to: string, subject: string, templateName: string, data: Record<string, any>) {
  try {
    const html = loadTemplate(templateName, data);

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    // Log email success
    await prisma.emailLog.create({
      data: {
        userEmail: to,
        subject,
        status: "sent",
      },
    });

    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Email sending failed:", error);

    // Log email failure
    await prisma.emailLog.create({
      data: {
        userEmail: to,
        subject,
        status: "failed",
      },
    });
  }
}