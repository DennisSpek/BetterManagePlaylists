import NextAuth from "next-auth"
import EmailProvider from 'next-auth/providers/email'

import DatabaseAdapter from '#/src/database/src/adapter'

export const authOptions = {
  // Configure one or more authentication providers
  adapter: DatabaseAdapter(),
  providers: [
    EmailProvider({
      service: 'Mailgun',
      server: {
        host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
        port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
        },
      },
     
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  pages: {
    signIn: "",
  },
}
export default NextAuth(authOptions)