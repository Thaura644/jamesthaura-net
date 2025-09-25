import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Layout } from '@/components/layout/layout'
import "./globals.css";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Thaura - Software Engineer | Python, Flutter, Next.js Developer",
  description: "James Thaura is a Software Engineer building innovative solutions with Python, Flutter, and Next.js. Specialized in full-stack development, mobile apps, and SaaS platforms. Open to global opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
        
        {/* Cal.com Scripts */}
        <Script
          id="cal-floating-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { 
                let p = function (a, ar) { a.q.push(ar); }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string"){
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar); 
                    return;
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://app.cal.com/embed/embed.js", "init");
              
              Cal("init", "kyc", {origin:"https://app.cal.com"});
              
              Cal.ns.kyc("floatingButton", {
                "calLink":"james-mweni-mrwrhm/kyc",
                "config":{"layout":"month_view"}
              }); 
              
              Cal.ns.kyc("ui", {
                "hideEventTypeDetails":false,
                "layout":"month_view"
              });
            `,
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
