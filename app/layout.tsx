'use client'
import '#/styles/globals.css';
import "reflect-metadata";

import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-neutral-900/5 w-full h-full '>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}