import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable : "--font-montserrat",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const title = "Solusi Digital Kreatif - Jasa Pembuatan Website";
  const description =
    "Solusi Digital Kreatif adalah penyedia jasa pembuatan website modern, cepat, dan responsif untuk bisnis dan personal branding.";

  const url = "https://solusidigitalkreatif.my.id";

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url,
      siteName: "Solusi Digital Kreatif",
      images: [
        {
          url: `${url}/og.png`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
