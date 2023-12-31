import dynamic from 'next/dynamic';
import { useState } from 'react';
import './globals.css'
import SessionProvider from './SessionProvider';
// import Header from './Header';
const Header=dynamic(()=>import('./Header'))
import React from 'react';
import Providers from './Providers';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Providers>
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
      
      <SessionProvider>      
      <Header/>
      <div className='max-w-6xl mx-auto'>{children}</div>
      </SessionProvider>
      </body>
      </Providers>
    </html>
  );
}