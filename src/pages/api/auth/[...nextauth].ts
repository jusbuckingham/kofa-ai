import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, User as PrismaUser } from "@prisma/client"; // ✅ Import Prisma User type
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// 🔹 Extend NextAuth User Type to Include `id` & `role`
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    role: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    email: string;
    role: string;
  }
}

const authOptions: AuthOptions = {
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

        // 🔹 Find user in the database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role || "user",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("🔍 Debug: User before JWT →", user); // ✅ See user before setting token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role || "user"; // ✅ Ensure role is stored
      }
      console.log("🔍 Debug: Token after JWT →", token); // ✅ See token contents
      return token;
    },
    async session({ session, token }) {
      console.log("🔍 Debug: Token before session →", token); // ✅ Check what's inside token

      session.user = {
        id: token.id as string,
        email: token.email as string,
        role: token.role as string,
        name: session.user?.name || null,
        image: session.user?.image || null,
      };

      console.log("🔍 Debug: Session user →", session.user); // ✅ Confirm session user is set

      return session;
    },
  },
  session: {
    strategy: "jwt", // ✅ Ensure we use JWT for session strategy
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);