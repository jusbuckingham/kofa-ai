import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, User as PrismaUser } from "@prisma/client";
import bcrypt from "bcryptjs";

// ✅ Prevent multiple Prisma client instances in dev
const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// ✅ Define CustomUser with role
interface CustomUser extends PrismaUser {
  role: string;
}

// ✅ Extend NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    email: string;
    role: string;
  }
}

// ✅ Fix missing `authOptions` export
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // ✅ Ensure user exists & check password
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          role: (user as CustomUser).role || "user", // ✅ Ensure role is present
        } as CustomUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as CustomUser; // ✅ Ensure `role` exists
        token.id = u.id;
        token.role = u.role;
        token.email = u.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        role: token.role as string,
        name: session.user?.name || null,
        image: session.user?.image || null,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// ✅ Correct export format
export default NextAuth(authOptions);