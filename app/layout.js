import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: {
    default: "BRHS DECA",
    template: "%s"
  },
  description: "Empowering future business leaders at Bridgewater-Raritan High School. Join 90+ members competing in DECA events, earning 50+ awards, with 4 students advancing to ICDC.",
  keywords: [
    "BRHS DECA",
    "Bridgewater-Raritan High School DECA",
    "DECA club",
    "business competition",
    "high school business",
    "ICDC",
    "SCDC",
    "business leadership",
    "marketing competition",
    "finance competition",
    "entrepreneurship",
    "New Jersey DECA",
    "Bridgewater-Raritan",
    "business education"
  ],
  authors: [{ name: "BRHS DECA" }, { name: "Arya Vaidya" }],
  creator: "BRHS DECA",
  publisher: "Bridgewater-Raritan High School DECA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brhs-deca.vercel.app',
    siteName: 'BRHS DECA',
    title: 'BRHS DECA - Empowering Future Business Leaders',
    description: 'Join Bridgewater-Raritan High School DECA! 90+ members, 50+ awards, 4 ICDC qualifiers. Competitive business events and professional development.',
    images: [
      {
        url: '/BR_and_DECA_LOGO.png',
        width: 1200,
        height: 630,
        alt: 'BRHS DECA Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRHS DECA - Empowering Future Business Leaders',
    description: 'Join Bridgewater-Raritan High School DECA! 90+ members, 50+ awards, 4 ICDC qualifiers.',
    images: ['/BR_and_DECA_LOGO.png'],
  },
  alternates: {
    canonical: 'https://brhs-deca.vercel.app',
  },
  verification: {
    google: 'google53ea055d3c01e4ca',
  },
  icons: {
    icon: '/BR_and_DECA_LOGO.png',
    shortcut: '/BR_and_DECA_LOGO.png',
    apple: '/BR_and_DECA_LOGO.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BRHS DECA',
    alternateName: 'Bridgewater-Raritan High School DECA',
    description: 'DECA chapter at Bridgewater-Raritan High School empowering future business leaders through competitive events, professional development, and community engagement.',
    url: 'https://brhs-deca.vercel.app',
    logo: 'https://brhs-deca.vercel.app/BR_and_DECA_LOGO.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bridgewater',
      addressRegion: 'NJ',
      addressCountry: 'US'
    },
    sameAs: [
      'https://hs.brrsd.org/',
      'https://deca.org/'
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'DECA Inc.',
      url: 'https://deca.org/'
    },
    foundingDate: '2024',
    numberOfEmployees: '90+',
    awards: '50+',
    knowsAbout: [
      'Business Management',
      'Marketing',
      'Finance',
      'Entrepreneurship',
      'Hospitality and Tourism',
      'Personal Financial Literacy'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Analytics />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
