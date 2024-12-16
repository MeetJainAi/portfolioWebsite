import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Navigation from "@/components/Navigation";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: "ML Engineer Portfolio",
  description: "Cloud and Machine Learning Engineer Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
        <Script id="emailjs-init" strategy="afterInteractive">
          {`window.onload = function() {
              emailjs.init({
                publicKey: '${publicKey}'
              });
           }`}
        </Script>
      </body>
    </html>
  );
}
