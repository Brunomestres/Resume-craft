import type { Metadata } from "next";
import {  Nunito} from 'next/font/google'
export const metadata: Metadata = {
  title: "ResumeCraft",
};


const nunito = Nunito({ subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen bg-background antialiased ${nunito.className}`}>{children}</body>
    </html>
  );
}
