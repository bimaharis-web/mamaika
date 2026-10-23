import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://mamaika.my.id";
const pageUrl = "/review/";
const imageBasePath = "/review/images";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Review Pelanggan | Mamaika Aqiqah & Catering",
  description:
    "Ceritakan pengalaman Anda menikmati layanan aqiqah dan catering Mamaika. Masukan Anda membantu kami melayani dengan lebih baik.",
  applicationName: "Mamaika Aqiqah & Catering",
  openGraph: {
    title: "Review Pelanggan | Mamaika Aqiqah & Catering",
    description:
      "Bagikan pengalaman Anda bersama Mamaika Aqiqah & Catering melalui Google Review.",
    type: "website",
    locale: "id_ID",
    siteName: "Mamaika Aqiqah & Catering",
    url: pageUrl,
    images: [
      {
        url: `${imageBasePath}/mamaika-og.jpg`,
        width: 1000,
        height: 1000,
        alt: "Mamaika Aqiqah & Catering — Berkah, Amanah, Syar'i",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Review Pelanggan | Mamaika Aqiqah & Catering",
    description:
      "Bagikan pengalaman Anda bersama Mamaika Aqiqah & Catering melalui Google Review.",
    images: [`${imageBasePath}/mamaika-og.jpg`],
  },
  icons: {
    icon: `${imageBasePath}/mamaika-logo.jpg`,
    apple: `${imageBasePath}/mamaika-logo.jpg`,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF6ED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
