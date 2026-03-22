import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pratham Mittal — Backend & Distributed Systems Engineer',
  description:
    'Portfolio of Pratham Mittal — building scalable distributed systems, ML pipelines, and AI-powered backend infrastructure. Experienced with Kafka, Redis, LangChain, and cloud-native architecture.',
  keywords: [
    'Pratham Mittal',
    'Backend Engineer',
    'Distributed Systems',
    'Software Engineer',
    'ML Engineer',
    'Kafka',
    'Redis',
    'LangChain',
    'Portfolio',
  ],
  openGraph: {
    title: 'Pratham Mittal — Backend & Distributed Systems Engineer',
    description:
      'Building scalable distributed systems and AI-powered backend infrastructure.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
